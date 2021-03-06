import {NextFunction, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {getManager, getRepository} from 'typeorm';
import AuthenticationTokenMissingException from '../Exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../Exceptions/WrongAuthenticationTokenException';
import DataStoredInToken from '../interfaces/dataStoredInToken';

import User from "../Models/Users/user.entity";
import RequestWithUser from "../interfaces/requestWithUser.interface";
import NotActiveException from "../Exceptions/NotActiveException";
import BlackListedToken from "../Models/BlackListedTokenEntity/blackListedToken.entity";


async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
    /*  const cookies = request.cookies;
    console.log(cookies.Authorization);
    const manager = getManager();

    if (cookies && cookies.Authorization) {
        const secret = process.env.JWT_SECRET;*/
    const authorization = request.header('Authorization');

    const manager = getManager();

    if (authorization) {
        const secret = process.env.JWT_SECRET;


        try {
            const blackListedToken = await manager.findOne(BlackListedToken, {
                blacklistedToken: authorization
            });
            console.log(`blacklisted token= ${blackListedToken}`);
            if (blackListedToken!==undefined) {
                console.log("blacklisted token if executed");
                next(new WrongAuthenticationTokenException());
            }
            const verificationResponse = jwt.verify(authorization, secret) as DataStoredInToken;
            console.log(verificationResponse);

            const user: User = await manager.findOne(User, {id: verificationResponse.id, softDeleteDate:null}, {relations: ['roles']})
            console.log(user);


            if (user) {
                var userActive: boolean = user.active;
                if (userActive) {
                    request.user = user;

                    next();
                } else {
                    next(new NotActiveException());
                }
            } else {
                next(new WrongAuthenticationTokenException());
            }
        } catch (error) {
            next(error);
        }
    } else {
        next(new AuthenticationTokenMissingException());
    }
}

export default authMiddleware;

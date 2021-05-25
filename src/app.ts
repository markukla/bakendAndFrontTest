
import * as express from 'express';
import * as bodyParser from 'body-parser';

import Controller from "./interfaces/controller.interface";
import errorMiddleware from "./middleware/error.middleware";
import 'reflect-metadata';
import 'es6-shim';
import  'dotenv/config';
import * as cookieParser from "cookie-parser";
import * as fs from "fs";
import setCORSAllowHeader from "./middleware/addCORSOrginAccessHeader";
const multer = require("multer");

const path = require('path');
import * as cors from "cors";
import * as https from "https";
import * as http from "http";




class App {
    public app: express.Application;


    constructor(controllers:Controller[]) {
        this.app = express();




        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    privateKey = fs.readFileSync(path.join(__dirname, './privkey.pem'), 'utf8');
    certificate = fs.readFileSync(path.join(__dirname, './cert.pem'), 'utf8');
    host= '0.0.0.0';
    port: number =  Number(process.env.PORT);
    private connectToDatabase() {

    }
    public getServer() {
        return this.app;
    }




    private initializeMiddlewares() {
       // this.app.use(cors());
        const publicDirectoryPath= path.join(__dirname, './public');
        console.log(`publicDirectoryPath= ${publicDirectoryPath}`);
        this.app.use(express.static(publicDirectoryPath));
        this.app.use(express.static(process.cwd()+"/my-app/dist/projekt1FilterFront/"));
        /* process.cwd() -This method returns a string specifying the current working directory of the node.js process.*/
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.enable('trust proxy');
        /*        this.app.use((req:any, res:any, next:any) => {
            req.secure ? next() : res.redirect('https://' + req.headers.host + req.url);
            console.log('redirecting from port 80 to port 443 in app middleware');
        });*/

        this.app.get('/', (req: express.Request,res:express.Response) => {

                res.sendFile(process.cwd()+"/my-app/dist/projekt1FilterFront/index.html")
        });
        this.app.get('/*', function(req:any, res:any, next) {



                if(req.url.includes('api')){
                    return next();

                }
                res.sendFile(process.cwd()+"/my-app/dist/projekt1FilterFront/index.html")


        });
    }

    private initializeControllers(controllers:Controller[]) {
        controllers.forEach(controller=>{
            this.app.use('/', controller.router);
        });




    }
    private initializeErrorHandling(){
        this.app.use(errorMiddleware);
    }



    public listen() {
        this.app.listen(this.port, this.host, () => {
            console.log(`Running on port:${this.port}`);
        });
    }
    public listenOnHttpSWithSSL(){
        https.createServer({
            key: this.privateKey,
            cert: this.certificate
        }, this.app).listen(this.port, this.host,() => {
            console.log(`Running on port:${this.port} using https protocol`);
        }  );
    }

    public listenOn80AndRedirectToHttps443() {
        http.createServer(function (req:any, res:any) {
            res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
            res.end();
        }).listen(80);
        console.log('listen on port 80 in order to redirect to 443')

    }
}

export default App;


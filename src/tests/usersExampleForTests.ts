import Role from "../Models/Role/role.entity";
import RoleEnum from "../Models/Role/role.enum";
import User from "../Models/Users/user.entity";
import CreatePrivilegedUserDto from "../Models/Users/PrivilegedUsers/user.dto";
import CreateBusinessPartnerDto from "../Models/Users/BusinessPartner/businessPartner.dto";
import {IsBoolean, IsEmail, IsString} from "class-validator";
import UpdatePrivilegedUserWithouTPasswordDto from "../Models/Users/PrivilegedUsers/modyfyUser.dto";
import UpdateBussinessPartnerWithoutPassword from "../Models/Users/BusinessPartner/modyfyBusinessPartent.dto";

class UsersExampleForTests {
    public hashedPassword: string = "$2b$10$fpooDkA4UaG/9nDsuuUmB.bIUJ7ittTknMl8nEMQ9o28UQPXqdZBC";
    public correctUnhashedPasswordOfexampleUserInDatabase: string = "Nicram12";
    public wrongUnhashedPasswordOfexampleUserInDatabase: string = "Nicrrerere12";
    public activeAdminUserExample: User = {
        fulName: 'Jacek Luczak',
        email: 'jacek.luczak@outlook.com',
        password: this.hashedPassword,
        active: true,
        id: 1,
        roles: [new Role(RoleEnum.ADMIN), new Role(RoleEnum.EDITOR)],
        businesPartnerCompanyName: null,
        code: null
    }
    public puppeterUser: User = {
        fulName: 'puppeteer',
        email: 'puppeteer@gmail.com',
        password: this.hashedPassword,
        active: true,
        id: 1,
        roles: [new Role(RoleEnum.ADMIN), new Role(RoleEnum.EDITOR)],
        businesPartnerCompanyName: null,
        code: null,
        hiden: true,
    }
    public inactiveAdminUserExample: User = {
        fulName: 'Jan Kowalski',
        email: 'jan@kowalski.com',
        password: this.hashedPassword,
        active: false,
        id: 2,
        roles: [new Role(RoleEnum.ADMIN), new Role(RoleEnum.EDITOR)],
        businesPartnerCompanyName: null,
        code: null
    }
    public activeEditorUserExample: User = {
        fulName: 'Jacek Nowak',
        email: 'jacek@nowak.com',
        password: this.hashedPassword,
        active: true,
        id: 3,
        roles: [new Role(RoleEnum.EDITOR)],
        businesPartnerCompanyName: null,
        code: null
    }
    public inactiveEditorUserExample: User = {
        fulName: 'Piotr Nowak',
        email: 'piotr@nowak.com',
        password: this.hashedPassword,
        active: true,
        id: 3,
        roles: [new Role(RoleEnum.EDITOR)],
        businesPartnerCompanyName: null,
        code: null
    }
    public activePartnerUserExample: User = {
        fulName: 'Marian Kukla',
        email: 'marian@kukla.com',
        password: this.hashedPassword,
        active: true,
        id: 4,
        roles: [new Role(RoleEnum.PARTNER)],
        businesPartnerCompanyName: 'polpharma',
        code: 'AST4'
    }
    public inactivePartnerUserExample: User = {
        fulName: 'Natalia Kukla',
        email: 'natalia@kukla.com',
        password: this.hashedPassword,
        active: false,
        id: 4,
        roles: [new Role(RoleEnum.PARTNER)],
        businesPartnerCompanyName: 'polpharma',
        code: 'AST4'
    }
    public createAdminUserDto: CreatePrivilegedUserDto = {


        "fulName": 'John Smith',
        "email": 'john@smith.com',
        "password": "Nicram12",
        "active": true,
        "isAdmin": true

    }
    public createEditorUserDto: CreatePrivilegedUserDto = {


        "fulName": 'Marcin kuklinski',
        "email": 'kuklinski@gmail.com',
        "password": "Nicram12",
        "active": true,
        "isAdmin": false

    }

    public createPartnerDto: CreateBusinessPartnerDto = {

        "fulName": 'Jan Kowalski',
        "email": 'kowalski@gmail.com',
        "password": "Nicram1234",
        "active": true,
        "code": "POL1",
        "businesPartnerCompanyName": "Polpharma",
    }

    public updatePrivilligedUserDto:UpdatePrivilegedUserWithouTPasswordDto={
        "fulName": 'updated fullName',
        "email": 'updated@gmail.com',
        "active": true,
        "isAdmin": true
    }
    public updatePartnerDto:UpdateBussinessPartnerWithoutPassword={
        "fulName": 'updated fullName',
        "email": 'updated@gmail.com',
        "active": true,
        "code": "updateDcode",
        "businesPartnerCompanyName": "updatedCompanyName"
    }

}

export default UsersExampleForTests;

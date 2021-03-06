import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import User from "../Users/user.entity";
import Product from "../Products/product.entity";
import Material from "../Materials/material.entity";
import OrderDetails from "../OrderDetail/orderDetails.entity";
import OrderVersionRegister from "../OrderVersionRegister/orderVersionRegister.entity";

@Entity("orders")
class Order {

    @PrimaryGeneratedColumn()
    public id?: number;
    @Column()
    orderNumber:number;  // it is not id because it is the same for orders with the same order version register
    @Column()
    orderVersionNumber:string;
    @Column()
    orderTotalNumber:string; // orderNumber and version number with some separator
    @Column()
    index:string;

    @Column()
    date:Date;
    @Column()
    orderName:string;

    @Column()
    commentToOrder?:string;
    @Column({nullable:true})
    addMaterialDescription: boolean


    @ManyToOne(() => User, (businessPartner: User) => businessPartner.ordersOfPartner, {eager: true})    // has a forein key
    businessPartner: User;


    @ManyToOne(() => Product, { }) // has a forein key
    product: Product;


    @ManyToOne(() => Material, (productMaterial: Material) => productMaterial.orders, {/*eager: true*/})
    productMaterial: Material;


    @OneToOne(() => OrderDetails, {eager: true, cascade:true,onDelete:"CASCADE"})// has a forein key
    @JoinColumn() // this determines that foreing key will be on this side of relation
    orderDetails: OrderDetails;
    @ManyToOne(() => User, (creator: User) => creator.orderCreatedByUser, {eager: true})
    creator: User

@ManyToOne(()=>OrderVersionRegister,(orderVersionRegister:OrderVersionRegister)=>orderVersionRegister.orders,{cascade:true, eager:true})
    register:OrderVersionRegister;



}

export default Order;

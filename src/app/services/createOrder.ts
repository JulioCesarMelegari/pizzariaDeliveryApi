/* eslint-disable linebreak-style */
import { Order } from '../models/Order';
import { io } from '../../index';
import { Request, Response } from 'express';

export async function createOrder(req: Request, res: Response){
    try {
        const {table, products} = req.body;

        const order = await Order.create({table, products});
        const orderDeatils = await order.populate('products.product');

        io.emit('order@new', orderDeatils);
        res.status(201).json(order);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}
/* eslint-disable linebreak-style */
import { Order } from '../models/Order';
import {Request, Response} from 'express';


export async function cancelOrder(req: Request, res: Response){
    try {
        const {orderId} = req.params;

        await Order.findByIdAndDelete(orderId);
        res.sendStatus(284);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
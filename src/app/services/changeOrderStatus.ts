/* eslint-disable linebreak-style */
import { Order } from '../models/Order';
import {Request, Response} from 'express';


export async function changeOrderStatus(req: Request, res: Response){
    try {
        const {orderId} = req.params;
        const {status} = req.body;

        if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
            return res.status(400).json({
                error: 'Status shoud be one fo these: WAITING, IN_PRODUCTION, DONE.'
            });
        }

        await Order.findByIdAndUpdate(orderId, {status});
        res.sendStatus(284);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


/* eslint-disable linebreak-style */
import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { createCategory } from './app/services/createCategory';
import {listCategories} from './app/services/listCategories';
import { listProducts } from './app/services/listProducts';
import { createProduct } from './app/services/createProduct';
import { listOrders } from './app/services/listOrders';
import { listProductsByCategoroy } from './app/services/listProductsByCategory';
import { createOrder } from './app/services/createOrder';
import { changeOrderStatus } from './app/services/changeOrderStatus';
import { cancelOrder } from './app/services/cancelOrder';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback){
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    }),
});

//list categories
router.get('/categories', listCategories);

//create categories
router.post('/categories', createCategory);

//list products
router.get('/products', listProducts);

//create products
router.post('/products', upload.single('image'), createProduct);

//get products by category
router.get('/categories/:categoryId/products', listProductsByCategoroy);

//list orders
router.get('/orders', listOrders );

//create orders
router.post('/orders', createOrder);

//change order status
router.patch('/orders/:orderId', changeOrderStatus);

//delete/cancel order
router.delete('/orders/:orderId', cancelOrder);

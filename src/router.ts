/* eslint-disable linebreak-style */
import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { createCategory } from './app/services/createCategory';
import {listCategories} from './app/services/listCategories';
import { listProducts } from './app/services/listProducts';
import { createProduct } from './app/services/createProduct';

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
router.get('/categories/:categoryId/products', (req, res) =>{
    res.send('OK');
});

//list orders
router.get('/orders', (req, res) =>{
    res.send('OK');
});

//create orders
router.post('/orders', (req, res) =>{
    res.send('OK');
});

//change order status
router.patch('/orders/:orderId', (req, res) =>{
    res.send('OK');
});

//delete/cancel order
router.delete('/orders/:orderId', (req, res) =>{
    res.send('OK');
});

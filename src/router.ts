/* eslint-disable linebreak-style */
import { Router } from 'express';

export const router = Router();

//list categories
router.get('/categories', (req, res) =>{
    res.send('OK');
});

//create categories
router.post('/categories', (req, res) =>{
    res.send('OK');
});

//list products
router.get('/products', (req, res) =>{
    res.send('OK');
});

//create products
router.post('/products', (req, res) =>{
    res.send('OK');
});

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

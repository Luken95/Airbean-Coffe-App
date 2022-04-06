const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');
const { db } = require('../utils/db')

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});


router.post('/order', async (req, res) => {

    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    res.json(order);
});


router.post('/key', (req, res) => {
    console.log('requesting key')

    const key = {
        key: uuid()
    }
    
    res.send(JSON.stringify(key));
})



module.exports = router
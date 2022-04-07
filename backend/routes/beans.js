const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const uuid = require('uuid-random');
const { generateOrderNr, generateETA } = require('../utils/utils');
const { saveUsers, findUser, addOrder, getUsers } = require('../database/operations');
// const { db } = require('../utils/db')

router.get('/', async (req, res) => {
    const menu = fs.createReadStream('data/menu.json');
    menu.pipe(res);
});


router.post('/order', async (req, res) => {
    const totalPrice = req.body;
    const date = new Date();
    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
        totalPrice: totalPrice.orderHistory,
        date: date.toDateString()
    }

    addOrder("Anders", order);

    res.json(order);
});


router.post('/key', (req, res) => {
    console.log('requesting key')

    const key = {
        key: uuid()
    }

    res.send(JSON.stringify(key));
});

router.post('/updateDB', (req, res) => {
  const order = req.body;

});

router.get('/userData', async (req, res) => {
    const user = req.headers.authorization.replace('Bearer ', '')
    const thisUser = await findUser(user);
    console.log(thisUser)

    res.json(thisUser)
})

// router.post('/saveOrder', (req, res) =>{
//   const order = req.body;
//
//   console.log(order);
//
//
// })



module.exports = router

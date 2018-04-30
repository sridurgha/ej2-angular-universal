const express = require('express');
const router = express.Router();

/* GET api listing. */
router.post('/', (req, res) => {
    let order = req.body.orderitems;
    if (order.length > 0) {
        res.send({mesg: 'Order Placed Successfully.'});
        console.log('test');
        console.log('Order Placed Successfully.');
    }
    else {
        res.send('Placing Order Failed.');
        console.log('Placing Order Failed.');
    }
});

module.exports = router;
const ShoppingService = require("../services/shopping-service");
const { PublishCustomerEvent, SubscribeMessage } = require("../utils");
const { CUSTOMER_SERVICE } = require('../config');
const { PublishMessage } = require('../utils')

module.exports = (app, channel) => {
    
    const service = new ShoppingService();
    
    app.get('/', (req, res) => {
        res.status(200).send('Welcome to your shopping service!');
    });

    app.post('/order', async (req,res,next) => {
        const { _id } = req.body; // Utilisation directe de _id depuis le corps de la requête
        const { txnNumber } = req.body;

        const { data } = await service.PlaceOrder({_id, txnNumber});
        
        const payload = await service.GetOrderPayload(_id, data, 'CREATE_ORDER')
        PublishMessage(channel, CUSTOMER_SERVICE, JSON.stringify(payload))

        res.status(200).json(data);
    });

    app.get('/orders', async (req,res,next) => {
        const { _id } = req.query; // Utilisation directe de _id depuis la requête
        const { data } = await service.GetOrders(_id);
        res.status(200).json(data);
    });

    app.put('/cart', async (req,res,next) => {
        const { _id } = req.body; // Utilisation directe de _id depuis le corps de la requête
        const { data } = await service.AddToCart(_id, req.body._id);
        res.status(200).json(data);
    });

    app.delete('/cart/:id', async (req,res,next) => {
        const { _id } = req.query; // Utilisation directe de _id depuis la requête
        const { data } = await service.AddToCart(_id, req.params.id);
        res.status(200).json(data);
    });
    
    app.get('/cart', async (req,res,next) => {
        const { _id } = req.query; // Utilisation directe de _id depuis la requête
        const { data } = await service.GetCart({ _id });
        res.status(200).json(data);
    });

    app.get('/whoami', (req,res,next) => {
        return res.status(200).json({msg: '/shopping : I am Shopping Service'})
    })
}

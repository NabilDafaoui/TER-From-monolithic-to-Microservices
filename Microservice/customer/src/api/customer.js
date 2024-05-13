const CustomerService = require('../services/customer-service');
const  UserAuth = require('./middlewares/auth');
const { SubscribeMessage } = require('../utils');


module.exports = (app, channel) => {
    const service = new CustomerService();

    // Route pour la racine "/"
    app.post('/', (req, res) => {
        res.status(200).json({ message: 'Received POST request at root' });
    });
    

    app.post('/signup', async (req,res,next) => {
        const { email, password, phone } = req.body;
        const { data } = await service.SignUp({ email, password, phone}); 
        res.json(data);

    });

    app.post('/login', async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const { data } = await service.SignIn({ email, password });
            res.json(data);
        } catch (error) {
            console.error('Error in login endpoint:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    

    app.post('/address', async (req,res,next) => {
        
        const { _id } = req.query;


        const { street, postalCode, city,country } = req.body;

        const { data } = await service.AddNewAddress( _id ,{ street, postalCode, city,country});

        res.json(data);

    });
     

    app.get('/profile', async (req, res) => {
        try {
          const { _id } = req.query; // Obtenez l'ID directement depuis la requête (assurez-vous que _id est passé dans la requête)
          
          // Utilisez directement _id pour obtenir le profil
          const { data } = await service.GetProfile({ _id });
          
          // Retournez les données du profil en tant que réponse JSON
          res.json(data);
        } catch (error) {
          // En cas d'erreur, renvoyez une réponse d'erreur
          console.error('Error fetching profile:', error);
          res.status(500).json({ error: 'Failed to fetch profile' });
        }
      });
     

    app.get('/shoping-details', UserAuth, async (req,res,next) => {
        const { _id } = req.user;
       const { data } = await service.GetShopingDetails(_id);

       return res.json(data);
    });
    
    app.get('/wishlist', UserAuth, async (req,res,next) => {
        const { _id } = req.user;
        const { data } = await service.GetWishList( _id);
        return res.status(200).json(data);
    });

    app.get('/whoami', (req,res,next) => {
        return res.status(200).json({msg: '/customer : I am Customer Service'})
    })
}

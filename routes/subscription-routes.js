import {Router} from 'express';
import authorize from "../middleware/auth-middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription-controller.js";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/',  (req, res) => res.send({title:'Get all subscriptions'}));
subscriptionRoutes.get('/:id',  (req, res) => res.send({title:'Get subscription details'}));
subscriptionRoutes.post('/', authorize,createSubscription);
subscriptionRoutes.put('/:id',  (req, res) => res.send({title:'Update subscription by ID'}));
subscriptionRoutes.delete('/:id',  (req, res) => res.send({title:'Delete subscription by ID'}));
subscriptionRoutes.get('/user/:id', authorize, getUserSubscriptions);
subscriptionRoutes.put('/:id/cancel',  (req, res) => res.send({title:'Cancel subscription'}));
subscriptionRoutes.put('/upcoming-renewals',  (req, res) => res.send({title:'Get upcoming renewels'}));


export default subscriptionRoutes;

import {Router} from 'express';

const subscriptionRoutes = Router();

subscriptionRoutes.get('/',  (req, res) => res.send({title:'Get all subscriptions'}));
subscriptionRoutes.get('/:id',  (req, res) => res.send({title:'Get subscription details'}));
subscriptionRoutes.post('/',  (req, res) => res.send({title:'Create a new subscription'}));
subscriptionRoutes.put('/:id',  (req, res) => res.send({title:'Update subscription by ID'}));
subscriptionRoutes.delete('/:id',  (req, res) => res.send({title:'Delete subscription by ID'}));
subscriptionRoutes.get('/user/:id',  (req, res) => res.send({title:'Get all users subscription'}));
subscriptionRoutes.put('/:id/cancel',  (req, res) => res.send({title:'Cancel subscription'}));
subscriptionRoutes.put('/upcoming-renewals',  (req, res) => res.send({title:'Get upcoming renewels'}));


export default subscriptionRoutes;
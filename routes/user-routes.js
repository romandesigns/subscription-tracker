import {Router} from 'express';

const userRouter = Router();

userRouter.get('/',  (req, res) => res.send({title:'Get all users'}));
userRouter.get('/:id',  (req, res) => res.send({title:'Get user details'}));
userRouter.post('/',  (req, res) => res.send({title:'Create a new user'}));
userRouter.put('/:id',  (req, res) => res.send({title:'Update user by ID'}));
userRouter.delete('/:id',  (req, res) => res.send({title:'Delete user by ID'}));

export default userRouter;
const express = require('express');

//require from controller {get,post,put,delete}
//finish controller and come here

const {
    registerUser,
    updateUser,
    getAllUser,
    deleteUserById
} = require('../controller/users.controller');

const userRouter = express.Router();

userRouter.get('/all',getAllUser);
userRouter.post('/',registerUser);
userRouter.put('/',updateUser);
userRouter.delete('/:id',deleteUserById);



module.exports = userRouter;
//first finish model and come here


// All business logics are written here....

const UsersModel = require('./../models/users.model');

class UsersService {
    //get post put delete -> register, update , getALL, delete

    async registerUser(email,password){
        const obj = {
            email,
            password
        }
        await UsersModel.create(obj);
    }
    async updateUser(obj){
        const id = obj._id;
        const existingUser  = await UsersModel.findById(id);
        if(!existingUser){
            throw new Error('the user id is not exist...Sign up to register...');
        }
        existingUser.username = obj.username;
        existingUser.details = obj.details;
        await existingUser.save();
    }
    async getAllusers(){
        const users = UsersModel.find();
        return users;
    }
    async deleteUserById(id){
        await UsersModel.findByIdAndDelete(id);
    }
}
const usersService = new UsersService();
module.exports = usersService;
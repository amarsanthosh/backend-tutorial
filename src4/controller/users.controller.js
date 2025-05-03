//first finish services and validators, then come here...

const usersService = require('../services/users.service');
const usersValidator = require('../validators/user.validator');

exports.registerUser = async function(req,res) {
    try{
        const payload = req.body;
        const{error,value} = usersValidator.registerUser.validate(payload);
        if(error !== undefined){
            throw new Error(error.details[0].message);
        }
        console.log("tijos");
        await usersService.registerUser(value.email, value.password);
        res.status(201).json({
            status : true,
            message : "user registration successful"
        });
    }
    catch(error){
        res.status(400).json({
            status : false,
            message :"error" +  error.message
        });
    }
};

exports.updateUser = async function(req,res){
  try{
    const payload = req.body;
    await usersService.updateUser(payload);
    res.status(201).json({
        status : true,
        message : "User update successful..."
    });
  }  
  catch(error){
    res.status(400).json({
        status : false,
        message : error.message
    }); 
  }
};

exports.getAllUser = async function(req,res){
    const data = await usersService.getAllusers();
    try{
        res.status(200).json({
            status : true,
            message : "got all users...",
            data : data,
        });
    }
    catch(error){
        res.status(400).json({
            status : false,
            message : error.message,
        });
    }
};

exports.deleteUserById = async function(req,res){
    // const user_id = req.params.id;
    try{
        const user_id = req.params.id;
        await usersService.deleteUserById(user_id);
        res.status(200).json({
            status : true,
            message : "The user with that id is deleted",
        });
    }catch(error){
        res.status(400).json({
            status : false,
            message : error.message,
        });
    }
};
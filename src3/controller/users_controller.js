// ways to declare controller in nodejs


// TYPE : function based : 1
async function createUser(req,res) { }
async function getAllUser(req,res) { }

module.exports = {
    createUser, getAllUser
};

// //TYPE: function based 2 
// exports.createUser = async(req,res) => {};
// exports.getAllUser = async(req,res) => {};

//TYPE: object based

// const userController = {
//     createUser: async (req,res) => {},
//     getAllUser: async (req,res) => {}
// };
// module.exports = userController;

// Type: class based 1
// class userController{
//     static async createUser(req,res) {}
//     static async gatAllUser(req,res) {}
// }
// module.exports = userController;

// Type: class based 2
// class userController{
//     async createUser(req,res) {}
//     async gatAllUser(req,res) {}
// }
// module.exports = new userController();

async function getAllUser(req,res){
    res.json({
        msg: "Response from getAllUsers"
    });
}
async function getUsers(req,res) {
    res.json({
        msg: "Response from getUsers"
    });    
}

module.exports = {getAllUser, getUsers}
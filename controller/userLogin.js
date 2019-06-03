var userToken = require('../tokenCreator/Generator');
class user{
    userLogin(req,res,next){
       var data = {
           username:req.body.username,
           password:req.body.password
       }

       if(data.username ==null || data.password==null){
        res.json({ success: false , 'message':'Sorry you cant submit empty field' });
       }else{
        userToken.createToken(data).then(userDetail =>{
            if(userDetail){
                res.json({message:'user login successful',data:userDetail})
            }else{
                res.json({message:'Error encountered while creating login user in '})
            }
        })
       }

   
    }
   }
   module.exports = new user();
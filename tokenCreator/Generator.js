var jwt = require('jsonwebtoken');
var secretKey = process.env.secretKey

class generator{
    createToken(data){
        return new Promise((resolve, reject)=>{
            jwt.sign(data, secretKey,{expiresIn:'24hrs'}, function(err, usertoken){
               if(!err){
                   resolve(usertoken);
               }else{
                   reject(err);
               }
            })
        })
    }
}

module.exports = new generator();
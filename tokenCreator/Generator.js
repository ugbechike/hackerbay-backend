var jwt = require('jsonwebtoken');
var secretKeys = process.env.secretKey

class generator{
    createToken(data){
        console.log(data , 'data in payload');
        return new Promise((resolve, reject)=>{
            jwt.sign(data, secretKeys,{expiresIn: '24hrs'}, function(err, usertoken){
               if(!err){
                   resolve(usertoken);
               }else{
                   reject(err);
               }
            })
        })
    }

    verifyToken(data){
        return new Promise((resolve, reject)=>{
            jwt.verify(data.replace("bearer ", ""), secretKeys, function(err, newToken){
                if(!err){
                    resolve(newToken)
                }else{
                    reject(err);
                }
            })
        })
    }
}

module.exports = new generator();
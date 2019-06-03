var tokenGenerator = require('../tokenCreator/Generator');

class authenticator{
    routeAuth(req,res,next){
        var jwt = req.header['userToken'];
        if(jwt == null){
            res.status(401).send({ message: "Token not available" });

        }else{
           tokenGenerator.createToken(jwt).then(token =>{
               next();
           }).catch(err =>{
               next(err);
           })
        }
    }
}

module.exports = new authenticator();
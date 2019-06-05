var tokenGenerator = require('../tokenCreator/Generator');

class authenticator{
    routeAuth(req,res,next){
        var jwt = req.headers['usertoken'];
        if(jwt == null){
            res.status(401).send({ message: "Token not available" });

        }else{
           tokenGenerator.verifyToken(jwt).then(token =>{
               next();
           }).catch(err =>{
               next(err);
           })
        }
    }
}

module.exports = new authenticator();
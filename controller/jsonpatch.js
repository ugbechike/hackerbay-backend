var patchs = require('jsonpatch');

class jsonpatch{
    createPatch(req,res){
        var userDocument = typeof(req.body.userDocument)=="string" ? JSON.parse(req.body.userDocument) : req.body.userDocument ;
        var patch = typeof(req.body.patch)=="string" ? JSON.parse(req.body.patch) : req.body.patch;
        userDocument = patchs.apply_patch(userDocument,patch);
        res.json(userDocument);
    }
}

module.exports = new jsonpatch();
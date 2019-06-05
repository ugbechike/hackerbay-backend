var thumbsnail = require('node-thumbnail').thumb;
var fileshare = require('fs');
var paths = require('path');
class userThumbnail{
    thumbnailGenerator(req,res){
        var file = paths.basename(req.body.source)
        file = file.substr(0,file.lastIndexOf("."));
        var ext = paths.extname(req.body.source);
        var data = {
            source:req.body.source,
            destination: 'Assets',
            suffix:new Date(),
            width:50,
            height:50,
            concurrency:4
      }
     if(fileshare.existsSync(data.source)){
        thumbsnail(data ,function (files, err, stdout, stderr){
           res.json({file:`Assets/`+file+data.suffix+ext})
       }).catch(err =>{
           res.json({ message:'invalid file insertion'});
       })  
     }else{
         res.json("File not found ")
     }
    }

}

module.exports = new userThumbnail();
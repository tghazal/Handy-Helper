const express = require("express");
const router = express.Router();
var models = require("../models");
var fs = require("fs");

var multer  = require('multer');
//var upload = multer()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+".png")
    }
  })
  
  var upload = multer({ storage: storage }).single('profileImage')
  

 router.post('/', function (req, res) {
     console.log(req.body.files)
    //  models.UserData.findOneAndUpdate({ _id: req.body.id }, { image: req.body.image })
    //  .then(dbModel => res.json(dbModel))
    //  .catch(err => console.err(err));
    upload(req, res, function (err) {
      if (err) {
        // An error occurred when uploading
      //  console.err(err)
      }
  res.json({
      success:true,
      message:"image uploaded",
     // path = req.file.path
  })
      // Everything went fine
    })
  })

//   router.post('/', upload.none(), function (req, res, next) {
//     // req.body contains the text fields
//   })
// router.post("/",function(req,res){
//  // var newItem = new Item();
//  console.log(req.body.files)
//  let image={data:fs.readFileSync(req.body.files.userPhoto.path),contentType: "image/png"}
//  models.UserData.findOneAndUpdate({ _id: req.body.id }, { image: image })
//      .then(dbModel => res.json(dbModel))
//      .catch(err => console.err(err));

// console.log("hi")
// });

module.exports = router;
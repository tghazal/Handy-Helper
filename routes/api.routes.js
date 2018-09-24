const express = require("express");
const router = express.Router();
var models = require("../models");
var fs = require("fs");
var multer = require('multer');


router.get("/getUserInfo/:email", function (req, res) {
  console.log("in routes email is" + req.params.email)
  models.UserData.findOne({ email: req.params.email })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});


router.get('/jobs', (req, res) => {
  models.Job.find({ 'address.from': req.body.zipcode })
    .then(jobs => res.json(jobs))
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    })
})


router.post("/updateSkills", function (req, res) {
  console.log("in routes update skills " + req.body.skills)
  console.log("iddddd" + req.body.id)
  // .findOneAndUpdate({ _id: req.params.id }, req.body)
  models.UserData.findOneAndUpdate({ _id: req.body.id }, { skills: req.body.skills })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  //       updateSkills
});

// router.post("/api/photo",function(req,res){
//   var newItem = new Item();
//   newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newItem.img.contentType = "image/png";
// //  newItem.save();
// console.log("hi")
// });

module.exports = router;
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


//get route to find jobs
router.get('/jobs', (req, res) => {
  models.Job.find({ 'address.from': req.body.zipcode })
    .then(jobs => res.json(jobs))
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    })
}),

  //post route to post a job
  router.get('./jobs', (req, res) => {
    models.Job.create(req.body)
      .then(job => res.json(job))
      .cathc(err => {
        res.status(500).json(err);
        console.error(err);
      })
  })

router.post("/updateAdress", function (req, res) {
  console.log("in routes update address " + req.body.address1)
  models.UserData.findOneAndUpdate({ _id: req.body.id }, { 'address.address1': req.body.address1, 'address.address2': req.body.address2, 'address.state': req.body.state, 'address.city': req.body.city, 'address.zip': req.body.zip })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});


router.post("/updateSkills", function (req, res) {
  console.log("in routes update skills " + req.body.skills)
  console.log("iddddd" + req.body.id)
  models.UserData.findOneAndUpdate({ _id: req.body.id }, { skills: req.body.skills })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});



module.exports = router;
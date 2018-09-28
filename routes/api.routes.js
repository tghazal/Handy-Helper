const express = require("express");
const router = express.Router();
var models = require("../models");
var fs = require("fs");
var multer = require('multer');
const ctrl = require('./controller');

// get user data using email
router.get("/getUserInfo/:email", function (req, res) {
  models.UserData.findOne({ email: req.params.email }).populate('myJobs')
    .then(dbModel => res.json(dbModel))
    .catch(err => {
      console.error(err);
      res.status(422).json(err)
    });
});

// get jobs by zipcode
router.get('/jobs/:zipcode', (req, res) => {
  console.log(req.params);
  models.Job.find({ 'address.zip': req.params.zipcode })
    .then(jobs => res.json(jobs))
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    })
});

// post a job
router.post('/jobs', (req, res) => {
  models.Job.create(req.body)
    .then(job => {
      console.log('Successfully saved the job.');
      res.json(job);
      return job;
    })
    // save the job to the user owner
    .then(job => {
      const id = req.body.owner;
      models.UserData.findById(id, (err, user) => {
        if (err) console.error(err);
        user.myJobs.push(job._id);
        user.save(err => {
          if (err) console.error(err);
          console.log('Successfully saved the job to the user owner.')
        })
      })
    })
    .catch(err => {
      res.status(500).json(err);
      console.error(err);
    })
})

// post user address
router.post("/updateAdress", function (req, res) {
  console.log("in routes update address " + req.body.address1)
  models.UserData.findOneAndUpdate({ _id: req.body.id }, { 'address.address1': req.body.address1, 'address.address2': req.body.address2, 'address.state': req.body.state, 'address.city': req.body.city, 'address.zip': req.body.zip })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// post user skill
router.post("/updateSkills", function (req, res) {
  console.log("in routes update skills " + req.body.skills)
  console.log("iddddd" + req.body.id)
  models.UserData.findOneAndUpdate({ _id: req.body.id }, { skills: req.body.skills })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// post user image
router.post("/saveimage", function (req, res) {
  console.log("in routes update image " + req.body.file)
  models.UserData.findOneAndUpdate({ email: req.body.email }, { image: req.body.file })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// rest API
/*-------------------------------------------------------*/

// Job
router.get('/job', ctrl.Job.find);
router.get('/job/:id', ctrl.Job.findById);
router.get('/job/populate/:id/:field', ctrl.Job.populate);
router.delete('/job/delete', ctrl.Job.delete);
router.put('/job/update/:id/:method', ctrl.Job.put);
router.post('/job/post', ctrl.Job.post);

// UserData
router.get('/userData', ctrl.UserData.find);
router.get('/userData/:id', ctrl.UserData.findById);
router.get('/userData/populate/:id/:field', ctrl.UserData.populate);
router.delete('/userData/delete', ctrl.UserData.delete);
router.put('/userData/update/:id/:method', ctrl.UserData.put);

module.exports = router;
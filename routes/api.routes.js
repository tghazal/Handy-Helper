const express = require("express");
const router = express.Router();
var models = require("../models/users.model");


router.post("/register", function (req, res) {
    var user = {
        email: req.body.email,
        name: req.body.name,
        
    }
   

    models.create(user) 
    .then(dbModel =>  res.json({ message: "Creation Sucess!", id: dbModel.id }))
    .catch(err => res.status(422).json(err));


  
});

module.exports = router;
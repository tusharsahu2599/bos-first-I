const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.post("", async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.json(user);
        return res.status(201).json({
            message: "User created successfully"
        });
    } catch(err){
       return res.status(400).json({message: err});
    }
})


router.post("/:email", async (req, res) => {
    try {
        let users = await User.findOne({ email: req.params.email });
    
        // if manager does not exist, then throw an error
    
        if (!users) {
        return res.status(400).json({
            status: "Failed",
            message: "Please provide correct email address or password.",
          });
        }
    
    
        const match = await users.checkPassword(req.body.password);
    
       
        if (!match) {
         return res.status(400).json({
            status: "Failed",
            message: "Please provide correct email address or password.",
          });
        }
    
        let token = 12+users.name+"sahuji" 
    
        return res.status(200).send({ users,token });
      } catch (e) {
        res.status(500).json({ status: "Failed", message: e.message });
      }
    });
    
    
module.exports = router;
    
const express = require('express');
const Hotels = require('hotels');;
const route = express.Router();

route.post("", async (req, res) => {
    try{
        let Hotel = await Hotels.create(req.body);
        return res.status(201).send({Hotel})
    }catch(err){
        return res.status(404).json({error: err})
    }
});

route.get('', async (req, res) =>{
    try{
        let hotel = await Hotels.find().lean().exec();
        return res.status(200).send({hotel})
    }catch(err){
        return res.status(404).json({error: err})
    }
})

module.exports = route;



const express = require('express');
const cors = require('cors');
const userController = require('./src/controllers/user.controller')
const hotelController = require('./src/controllers/hotel.controller')
const connect = require('./src/config/db');

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userController);
app.use('/hotel', hotelController);

app.listen(PORT, async (req, res) => {
    try {
       connect()
    }catch (err) {
        console.log(err)
    }
    console.log(`listening on ${PORT}`)
});


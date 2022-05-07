const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect('mongodb://localhost:27017/hotel', {
        useNewUrlParser: true,
        useUnifiedTopology: true
}  ).then(() => {
    console.log('Connected to MongoDB')
}
).catch(err => {
    console.log(err)
}
)
}

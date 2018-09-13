const mongoose = require('mongoose');
const db = 'mongodb://localhost/test'

mongoose.Promise = global.Promise

exports.connect = () => {
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true)
    }

    mongoose.connect(db);

    mongoose.connection.on('disconnected', () => {
        console.log('disconnected')
        // mongoose.connect(db)
    })

    mongoose.connection.on('error', (err) => {
        console.log(err)
    })

    mongoose.connection.once('open', (err) => {
        console.log('mongodb connected successfully')
    })
}
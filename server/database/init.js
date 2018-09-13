const mongoose = require('mongoose');
const db = 'mongodb://localhost/test'

mongoose.Promise = global.Promise

exports.connect = () => {
    return new Promise((resolve, reject) => {
        let maxConnectTimes;
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true)
        }

        mongoose.connect(db);

        mongoose.connection.on('disconnected', () => {
            if (maxConnectTimes < 5) {
                maxConnectTimes++
                mongoose.connect(db)
            } else {
                throw new Error('数据库的问题～～～～')
            }
        })
        mongoose.connection.on('error', (err) => {
            reject()
        })

        mongoose.connection.once('open', () => {

            const Cat = mongoose.model('Cat', {name: String});

            const kitty = new Cat({name: 'jehol'});
            kitty.save().then(() => console.log('meow'));


            resolve()
            console.log('mongodb connected successfully')
        })
    })
}
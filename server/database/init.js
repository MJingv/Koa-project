const mongoose = require('mongoose');
const db = 'mongodb://localhost/test'

mongoose.Promise = global.Promise

const catSchema = new mongoose.Schema({
    name: String,
});

catSchema.methods.speak = function () {
    let greeting = this.name ? `meow name is ${this.name} ` : "i don't have name"
    console.log(greeting)
}
let vicky = mongoose.model('vicky', catSchema);
let jehol = mongoose.model('jehol', catSchema);

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
            console.log('-------------mongodb connected successfully----------')
            let jj = new jehol({name: 'jj'})
            jj.speak()

            jj.save(function (err, jj) {
                if (err) return console.log(err)
                console.log('------save-----')
                console.log(jj)

            })

            jehol.find(function (err, jj) {
                if (err) return console.error(err)
                console.log(jj)
            })

            resolve()

        })
    })
}
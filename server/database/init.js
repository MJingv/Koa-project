const mongoose = require('mongoose');
const db = 'mongodb://localhost/douban-trailer';
const glob = require('glob');
const {resolve} = require('path');

mongoose.Promise = global.Promise;


exports.initSchemas = () => {

	glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(
		require);
};


exports.connect = () => {
	return new Promise((resolve, reject) => {
		let maxConnectTimes;
		if (process.env.NODE_ENV !== 'production') {
			//不是生产环节
			mongoose.set('debug', true);
		}

		mongoose.connect(db, {useNewUrlParser: true});

		mongoose.connection.on('disconnected', () => {
			//重连次数
			if (maxConnectTimes < 5) {
				maxConnectTimes++;
				mongoose.connect(db, {useNewUrlParser: true});
			} else {
				throw new Error('数据库的问题～～～～');
			}
		});
		mongoose.connection.on('error', (err) => {
			reject();
		});

		mongoose.connection.once('open', () => {
			console.log('-------------mongodb connected successfully----------');

			resolve();
		});
	});
};

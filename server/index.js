// const Koa = require('koa');
// const app = new Koa();
// const pug = require('pug');
// const views = require('koa-views');
// const {resolve} = require('path');
// const {connect, initSchemas} = require('./database/init');
// const mongoose = require('mongoose');
//
// ;(async () => {
// 	await connect();
// 	initSchemas();
//
// 	//初始化爬数据
// 	// require('./tasks/movie');
// 	// require('./tasks/api');
//
//
// 	// const Movie = mongoose.model('Movie');
// 	// const movies = await Movie.find({});
// 	//
// 	// console.log(movies);
//
// })();
//
//
// app.use(views(resolve(__dirname, './views'), {
// 	extension: 'pug'
// }));
//
//
// app.use(async (ctx, next) => {
// 	await ctx.render('index', {
// 		name: 'jehol',
// 		pageTitle: '电影预告片'
// 	});
// });
//
//
// app.listen(2333);

//
// async function async1() {
// 	console.log('async1 start');
// 	await async2();
// 	console.log('async1 end');
//
// }
//
// async function async2() {
// 	console.log('async2');
// }
//
// console.log('scrpit start');
// setTimeout(function () {
// 	console.log('settimeout');
// }, 0);
//
// async1();
// new Promise(function (res) {
// 	console.log('promise1');
// 	res();
//
// }).then(function () {
// 	console.log('promise2');
// });
// console.log('srcipet end');
//
// const obj = {
// 	name: 'jscoder',
// 	skill: ['es6', 'react', 'angular'],
// 	say: function () {
// 		for (let i = 1, len = this.skill.length; i <= len; i++) {
// 			const t = this;
// 			// (function (i) {
// 			// 	setTimeout(function timer() {
// 			// 		console.log('no' + i + t.name);
// 			// 		console.log(t.skill[i-1]);
// 			// 		console.log('----');
// 			// 	}, 0);
// 			// })(i);
//
// 				setTimeout(function timer() {
// 					console.log('no' + i + t.name);
// 					console.log(t.skill[i-1]);
// 					console.log('----');
// 				}, 0);
//
//
// 			console.log(i);
//
// 		}
//
// 	}
// };
//
// obj.say();

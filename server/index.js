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

//
// const obj = {
// 	name: 'jehol',
// 	skill: ['vue', 'react', 'angular'],
// 	say: function () {
// 		for (let i = 1, len = this.skill.length; i <= len; i++) {
// 			setTimeout(() => {
// 				console.log('no' + i + this.name);
// 				console.log(this.skill[i - 1]);
// 				console.log('----' + i);
// 			}, 0);
// 			console.log(i);
// 		}
// 	}
// };
//
// obj.say();


// function Animal(name, color) {
// 	this.name = name;
// 	this.color = color;
// }
//
// Animal.prototype.say = function () {
// 	let res = `i am a ${this.color} - ${this.name}`;
// 	console.log(res);
// 	return res;
// };
//
//
// const Cat = Animal.mybind(null, 'cat');
// const cat = new Cat('white');
//
// if (cat.say() === 'i am a white - cat' && cat instanceof Cat && cat instanceof Animal) {
// 	console.log('success');
// }


Function.prototype.mybind = function (ctx, ...res) {
	return () => {
		this.call(ctx, res);
	};

};


function sayname(arg) {
	console.log(this.name, 'arg', ...arg);
}

let obj = {
	name: 'jehol'
};

sayname.mybind(obj, '我是参数')();

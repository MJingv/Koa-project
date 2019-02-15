// const Koa = require('koa');
// const session = require('koa-session');
// const logger = require('koa-logger');
// const EventEmitter = require('events');
// const {readFile} = require('fs');
//
// // const app = new Koa();
// //
// // app.keys = ['jehol'];
// //
// // app.use(logger());
// // app.use(session(app));
// //
// //
// // app.use(async ctx => {
// // 	ctx.body = 'Hello World';
// //
// // });
// //
// // app.listen(3000);
//
// class EE extends EventEmitter {
//
// }
//
// const yy = new EE();
//
// yy.on('event', () => {
// 	console.log('aaaa-------');
// });
//
// setTimeout(() => {
// 	console.log('0 ms timeout');
// }, 0);
//
// setTimeout(() => {
// 	console.log('100 ms timeout');
// }, 100);
//
// setTimeout(() => {
// 	console.log('200 ms timeout');
// }, 200);
//
//
// readFile('./README.md', 'utf-8', data => {
// 	console.log('读第11111个文件cb');
// });
//
// readFile('./koa学习笔记.md', 'utf-8', data => {
// 	console.log('读第2222个文件cb');
// });
//
// readFile('./加密学习笔记.md', 'utf-8', data => {
// 	console.log('读第33333个文件cb');
// });
//
//
// setImmediate(() => {
// 	console.log('------setImmediate');
// });
// process.nextTick(() => {
// 	console.log('process.nextTick的cb');
// });
//
// Promise.resolve().then(() => {
// 	yy.emit('event');
//
// 	process.nextTick(() => {
// 		console.log('promise 里的nextticket');
// 	});
// 	console.log('promise里的1111111cb');
//
//
// }).then(() => {
// 	console.log('promise里的22222cb');
//
// }).then(() => {
// 	console.log('promise里的333333cb');
//
// })
//
// console.log('start---');


// function Parent(value) {
// 	this.val = value;
//
// }
//
// Parent.prototype.getVal = function () {
// 	console.log(this.val);
// };
//
//
// function Child(value) {
// 	Parent.call(this, value); //super
// }
//
// // Child.prototype = new Parent();
//
// Child.prototype = Object.create(Parent.prototype, {
// 	constructor: {
// 		value: Child,
// 		enumerable: false,
// 		writable: true,
// 		configurable:true,
// 	}
// });
//
// let child = new Child(1);
// child.getVal();//1
// console.log(child instanceof Parent);//true


const arr = [1, 2, 3];

let myMap = arr.reduce((pre, curr, index, arr) => {
	pre.push(curr * 2);
	return pre;

}, []);
console.log(myMap);




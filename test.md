bind、call、apply 最后一遍
===


手写bind
---


```js

Function.prototype.mybind = function (ctx, ...res) {
	return () => {
		this.call(ctx, res);
	};

};

// Function.prototype.mybind = function (ctx, ...res) {
// 	let self = this;
// 	return function () {
// 		self.call(ctx, res);
// 	};
//
// };

function sayname(arg) {
	console.log(this.name, 'arg', ...arg);
}

let obj = {
	name: 'jehol'
};

sayname.mybind(obj, '我是参数')();

```

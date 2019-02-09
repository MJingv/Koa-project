const Koa = require('koa');
const app = new Koa();
const {htmlTpl, ejsTpl, pugTpl} = require('./tpl/index');
const ejs = require('ejs');
const pug = require('pug');
// const {connect} = require('./database/init')

// ;(async () => {
// 	await connect();
// })();


app.use(async (ctx, next) => {
	ctx.type = 'text/html; charset=utf-8';
	ctx.body = pug.render(pugTpl, {
		name: 'jehol',
		pageTitle: '电影预告片'
	});
});


app.listen(2333);

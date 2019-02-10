const Koa = require('koa');
const app = new Koa();
const pug = require('pug');
const views = require('koa-views');
const {resolve} = require('path');


// const {connect} = require('./database/init')

// ;(async () => {
// 	await connect();
// })();
app.use(views(resolve(__dirname, './views'), {
	extension: 'pug'
}));


app.use(async (ctx, next) => {
	await ctx.render('index', {
		name: 'jehol',
		pageTitle: '电影预告片'
	});
});


app.listen(2333);

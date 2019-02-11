const Koa = require('koa');
const app = new Koa();
const pug = require('pug');
const views = require('koa-views');
const {resolve} = require('path');
const {connect, initSchemas} = require('./database/init');
const mongoose = require('mongoose');

;(async () => {
	await connect();
	initSchemas();

	//初始化爬数据
	// require('./tasks/movie');
	// require('./tasks/api');


	// const Movie = mongoose.model('Movie');
	// const movies = await Movie.find({});
	//
	// console.log(movies);

})();


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

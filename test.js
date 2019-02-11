const Koa = require('koa');
const session = require('koa-session');
const logger = require('koa-logger');
const app = new Koa();

app.keys = ['jehol'];

app.use(logger());
app.use(session(app));


app.use(async ctx => {
	ctx.body = 'Hello World';
	if (ctx.path === '/favicon.co') return;
	let n = ctx.session.views || 0;
	ctx.session.views = ++n;
	ctx.body += ctx.session.views;

	if (ctx.path === '/') {
		ctx.body = 'HOME';
	}
	if (ctx.path === '/page') {
		ctx.body = 'PAGE';
	}
});

app.listen(3000);

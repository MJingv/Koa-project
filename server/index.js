const Koa = require('koa')
const app = new Koa()


app.use(async (ctx, next) => {
    ctx.body = 'Hello jehol';
});


app.listen(2333)
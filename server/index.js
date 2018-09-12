const Koa = require('koa')
const app = new Koa()
const tpl = require('./tpl/normal')


app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = tpl
});


app.listen(2333)
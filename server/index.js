const Koa = require('koa')
const session = require('koa-session')
const app = new Koa()


// app.use(async (ctx, next) => {
//     console.log(ctx.host)
//     ctx.body = 'Hello jehol';
// });
app.keys = ['jehol']
app.use(session(app))

app.use(ctx => {
    if (ctx.path === '/') {
        if (ctx.path === '/favicon.ico') return
        let n = ctx.session.views || 0
        ctx.session.views = ++n
        ctx.body = n + 'views'

    } else if (ctx.path === '/hello') {
        ctx.body = 'hello world'

    }
})

app.listen(2333)
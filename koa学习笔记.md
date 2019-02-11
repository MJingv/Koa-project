# Koa学习资料

一切皆中间件
---

参考资料
> 1. [阮一峰-Koa 框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)
> 2. d


koa vs express
---
> 1. 回调函数 vs async
> 1. 底层同一套http基础库
> 1. 错误处理 ctx.throw 、try catch && ctx.app.emit()
> 1. 中间件洋葱模型
> 1. context 


koa 1.0 vs koa 2.0
---

http 接收 解析 响应

中间件 执行上下文

---

### koa核心对象

#### Application

- Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。 
- eg
``` js
 const app =new Koa()
 app.use(middlewares)
 app.listen(3000)
```
- 组成
> 1. constructor【class App extends Emitter】
> 1. listen 【createServer(this.callback)】
> 1. use
> 1. callback 
> > 1. createContext
> > 1. handleRequest【compose(middlewares)、respond(res.end)】


#### Context

表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。通过加工这个对象，就可以控制返回给用户的内容。

>http 上游（request）和下游（response）

#### Request
>
#### Response
> 
#### Middlewares
> 1. 中间件：因为它处在 HTTP Request 和 HTTP Response 中间，用来实现某种中间功能。app.use()用来加载中间件。
> 1. 每个中间件默认接受两个参数，第一个参数是 Context 对象，第二个参数是next函数。只要调用next函数，就可以把执行权转交给下一个中间件。
> 1. 多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
#### Session
> 
#### Cookie
> 用户信息、埋点

---

### others
 
> 1. 路由 koa-router
> 1. 静态资源 koa-static
> 1. 日志 koa-logger
> 1. 本地存储 koa-session
> 1. 组合 koa-compose

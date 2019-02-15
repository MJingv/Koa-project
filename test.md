vue
===


组件间通信
---

### 父子
- props && emit
- slot
- v-model
- $parent && $children
- v-on && $listeners 
- .sync (emit语法糖)

### 兄弟 
-  this.$parent.$children && children name

### 跨多层次组件通信 
- provide / inject

### 任意组件 
- Vuex 
- Event Bus 
- mobx等


extend 能做什么
---
- 作用是扩展组件生成一个构造器，通常会与 $mount 一起使用

mixin 和 mixins 区别
---
- mixin 用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的
- mixins 如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 mixins 混入代码
- mixins 混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并

computed 和 watch 区别
---
- computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容
- watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作

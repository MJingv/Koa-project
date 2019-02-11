### mongoDB
- 定义

    MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。

- 概念

SQL术语/概念 |MongoDB术语/概念| 解释/说明
:---|:---|:---
database|	database|	数据库
table	|collection	|数据库表/集合
row	|document|	数据记录行/文档
column|	field|	数据字段/域
index|	index|	索引
table| joins	| 	表连接,MongoDB不支持
primary key	|primary key	|主键,MongoDB自动将_id字段设置为主键

- NoSQL的优点/缺点

优点|缺点
----|----
 高可扩展性 | 没有标准化
 分布式计算| 有限的查询功能（到目前为止）
 低成本| 最终一致是不直观的程序
 架构的灵活性，半结构化数据|
 没有复杂的关系|

- ACID vs BASE

ACID |	BASE
----|----
原子性(Atomicity) |	基本可用(Basically Available)
一致性(Consistency)|	软状态/柔性事务(Soft state)
隔离性(Isolation)|最终一致性 (Eventual consistency)
持久性 (Durable)|

- 基本命令

 数据库
 
命令 |说明
---|---
show dbs|显示所有数据的列表
db|显示当前数据库对象或集合
use xx（db）|连接到一个指定的数据库
---|---

- 启动

> 1. mongod
> 1. mongo

- 原子操作

> 1. mongodb不支持事务，所以，在你的项目中应用时，要注意这点。无论什么设计，都不要要求mongodb保证数据的完整性
> 1. 所谓原子操作就是要么这个文档保存到Mongodb，要么没有保存到Mongodb，不会出现查询到的文档没有保存完整的情况。

命令 | 说明
---|---
$set |用来指定一个键并更新键值，若键不存在并创建
$unset |用来删除一个键
$inc|$inc可以对文档的某个值为数字型（只能为满足要求的数字）的键进行增减的操作。
$push|把value追加到field里面去，field一定要是数组类型才行，如果field不存在，会新增一个数组类型加进去。
$pull|从数组field内删除一个等于value值。
$rename|修改字段名称
---

### mongoose

- 定义

Mongoose是在node.js环境下对mongodb进行便捷操作的对象模型工具

- 概念

名词 | 说明
---|---
schema|一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
Model  |由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
Entity |由Model创建的实体，他的操作也会影响数据库

- 更新

> 1. entity : find => save  
> 1. model : find => update(条件，更新对象,cb)
> 1. dd
> 1. dd
> 1. dd
> 1. dd


- 新增 
> 1. entity : save
> 1. model : create

- 删除
> 1. entity : remove
> 1. model : remove

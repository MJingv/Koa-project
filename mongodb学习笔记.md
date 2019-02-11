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

- 

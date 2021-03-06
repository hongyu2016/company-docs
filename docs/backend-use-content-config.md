---
nav:
  title: 后台管理系统使用手册-内容相关设置
  order: 1
---

## 模型管理

> 内置 新闻模型、商品模型、图片模型，可以新增模型和新增字段来扩展系统的功能。内置模型不可删除，自建模型可以删除；内置字段不可删除，自建字段可以删除

新建/编辑模型：

![新建/编辑模型](/images/content-config/1.png "新建/编辑模型")

| 字段名称 | 说明 |
|  ----  | ----  |
| 模型名称 | 模型名称 |
| 表名 | 插入到数据库的表名，新建后不可修改 |
| 标识码 | 与表名相同 |
| 描述 | 模型的描述 |
| 状态 | 启用或禁用 |
| 排序 | 数字越小越靠前 |
| 状态 | 启用或者禁用 |

***
字段管理：

![字段管理](/images/content-config/2.png "字段管理")

新增字段时，可选的类型有

| STRING | TEXT | LONGTEXT | BOOLEAN | DATE | DATEONLY | INTEGER | BIGINT | DECIMAL | DOUBLE | FLOAT |  

## 栏目管理

添加栏目分为一级栏目和子栏目，需要给栏目指定一种模型，还要给栏目指定唯一标识。栏目可以删除，但是删除栏目前，必须先删除该栏目下的子栏目和文章
![栏目管理](/images/content-config/3.png "栏目管理")





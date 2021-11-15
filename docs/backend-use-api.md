---
nav:
  title: 后台管理系统-api
  order: 1
---

# api

## api接口

> 前端与后台管理系统的交互通过api接口来完成

api前缀为： 域名/api/

全局返回参数：
  | 字段名称 | 说明 |
  |  ----  | ----  |
  | code | 返回码，200成功 |
  | msg | 提示信息 |

### 获取栏目
说明：根据name标识获取对应栏目--此接口尚未实现

> 接口地址：/getCategoryByCode

> 请求方式：get

> 请求参数：

> 返回参数：

### 获取文章列表
说明：根据 模块名和栏目名获取新闻列表

> 接口地址：/getArticleListByCodeAndColumn

> 请求方式：get

> 请求参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | column | 栏目名 |
  | code | 模型表名 |

> 返回参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | total | 总条数 |
  | rows | 列表数组 |
  | - title | 标题 |
  | - sub_title | 副标题 |
  | - column_id | 栏目id |
  | - status | 1或者true开启，0或者false关闭 |
  | - sort | 数字越小越靠前 |
  | - descrition | 描述 |
  | - thumb | 缩略图 |
  | - content | 正文内容 |
  | - create_time | 创建时间 |
  | - update_time | 更新时间 |

### 获取文章详情
说明：根据id，code 获取文章详情

> 接口地址：/getArticleByCodeAndId

> 请求方式：get

> 请求参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | id | 文章id |
  | code | 模型表名 |

> 返回参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | title | 标题 |
  | sub_title | 副标题 |
  | column_id | 栏目id |
  | status | 1或者true开启，0或者false关闭 |
  | sort | 数字越小越靠前 |
  | descrition | 描述 |
  | thumb | 缩略图 |
  | content | 正文内容 |
  | create_time | 创建时间 |
  | update_time | 更新时间 |

### 获取系统文章详情
说明：根据id获取系统文章详情，比如获取联系我们，关于我们

> 接口地址：/getArticleDetail

> 请求方式：get

> 请求参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | id | 文章id |

> 返回参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | title | 标题 |
  | status | 1或者true开启，0或者false关闭 |
  | sort | 数字越小越靠前 |
  | descrition | 描述 |
  | thumb | 缩略图 |
  | content | 正文内容 |
  | create_time | 创建时间 |
  | update_time | 更新时间 |

### 获取网站设置信息
说明：获取描述，网站标题等信息

> 接口地址：/getConfig

> 请求方式：get

> 请求参数：无

> 返回参数：

  | 字段名称 | 说明 |
  |  ----  | ----  |
  | name | 站点名称 |
  | site_title | 网站标题 |
  | keyword | 关键字 |
  | descrition | 描述 |
  | setting | 设置 |
  | copyright | 版权信息 |
  | create_time | 创建时间 |
  | update_time | 更新时间 |





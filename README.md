> 轻量级评论插件[Valine](https://github.com/xCss/Valine)的`React`版本。

[![Build Status](https://travis-ci.org/stonehank/react-valine.svg?branch=master)](https://travis-ci.org/stonehank/react-valine)
[![npm](https://img.shields.io/npm/v/react-valine.svg)](https://www.npmjs.com/package/react-valine)
[![codecov](https://codecov.io/gh/stonehank/react-valine/branch/master/graph/badge.svg)](https://codecov.io/gh/stonehank/react-valine)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-valine?color=yellowgreen&label=gzip)

---

### Changelog

##### 0.5.1 (2020-3-15)

* `API`请求替换`leancloud-sdk`，显著减少包大小(parsed size from `479.2kb` to `331.92kb`)
* 自定义组件UI替换`material-ui`，显著减少包大小(parsed size from `331.92kb` to `216.48kb`)
* 增加自定义`leancloud`上Class名称，默认为`"Comment_demo"`

##### 0.5.0 (2020-3-13)

* 增加可编辑模式，基于`cookie`的token检测
* 当添加，回复，修改评论后，对目标评论增加一个显眼的闪烁效果
* 修复滚动精确度
* 调整部分UI，包括字体颜色，背景等

[更多Changelog](https://github.com/stonehank/react-valine/blob/master/CHANGELOG.md)

### 特性

* 支持实时预览，支持`markdown`语法
* 表情输入，通过输入`:`开启表情选择框
* 头像自定义，用户可以选择头像(一共`8`种)，如果你填写的邮箱在[gravatar](http://gravatar.com)注册，那么将会获取你的头像加入到选项中。
* 支持编辑(使用`session/cookie`保存`token`)
* 嵌套和非嵌套的回复列表模式。
* 展示[评论数](#ValineCount)和[页面阅读量](#ValinePageview)统计组件，可以在任意位置调用。
* 精简大小(`gzip`后`50kb`，不需要额外引入除了`react`任何组件)
* 可配置[邮件回复](#邮件回复)
* 多语言支持，支持自由扩展语言 

### 效果查看

[点击查看](https://stonehank.github.io/react-valine/)


### 待添加特性

- [x] 阅读量统计
- [x] 优化表情输入
- [x] 邮件回复
- [x] 多语言支持
- [x] 增加测试
- [X] 支持编辑
- [X] 替换`leancloud-sdk`，减少包大小
- [X] 替换三方UI，减少包大小
- [ ] 支持`light`/`dark`主题(Doing...)
- [ ] 垃圾评论处理

### 使用说明

* 安装

`npm install react-valine`


### 组件说明：

####  Valine

创建`React.createContext`，并且传递`自定义参数`和储存当前`count`的组件(避免重复请求)。

参数：

|参数|是否必须|作用|默认值|
|:---:|:---:|:---:|:---:|
|appId|是|leancloud上的appId|/|
|appKey|是|leancloud上的appKey|/|
|requireName|否|是否必须填写昵称|true|
|requireEmail|否|是否必须填写邮箱|false|
|placeholder|否|评论框占位提示符|说点什么吧|
|nest|否|回复样式是否为嵌套模式|true|
|nestLayers|否|开启嵌套模式后有效，配置嵌套的层数|Infinity|
|pageSize|否|评论列表分页，每页条数|10|
|emojiListSize|否|输入`:`显示`emoji`的条数|5|
|sofaEmpty|否|无评论时显示|快来做第一个评论的人吧~|
|previewShow|否|是否默认开启实时预览|true|
|lang|否|支持中文(zh-cn)和英文(en)|zh-cn|
|CommentClass|否|在`leancloud`上的Class名称|Comment_demo|
|customTxt|否|自定义内部文字|参考assets/locales.json|


案例参考：

index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Valine} from "react-valine";
const appId='xxxxxxx-xxxx'
const appKey='xxxxxxxxx'

// 此处为全局导入，在App内部任意位置都可以使用<ValineCount />和<ValinePanel />
ReactDOM.render(
  <Valine  appId={appId}
           appKey={appKey}
           pagesize={12} 
           customTxt={
             {
               tips:{sofa:"抢个沙发吧~"},
               ctrl:{more:"再给我来一打"}
             }
           }>
    <App />
  </Valine>
  , document.getElementById('root'));
```

#### ValineCount

获取当前`uniqStr`的评论数。

参数：

|参数|是否必须|作用|默认值|
|:---:|:---:|:---:|:---:|
|uniqStr|否|一个独立值，用于获取当前页面评论|window.location.origin+window.location.pathname|
|style|否|组件的样式|''|
|count|否|未获取时的初始值|获取中|

> 注意：uniqStr必须是一个独立值，强烈建议自己填写一个独立值，而不是用默认值，因为如果使用默认值，当需要获取评论数时，并不一定在当前评论页的`uniqStr`上，就会获取错误或者失败。

案例参考：

articleMeta.js
```js
import React from 'react';
import {ValineCount} from "react-valine";

class ArticleMeta extends React.Component{
  render(){
    const {createdAt,author,a_unique_string}=this.props
    return (
      <div>
        <span>创建日期：{createdAt}</span>
        <span>作者：{author}</span>
        <span>评论数：<ValineCount uniqStr={a_unique_string}/></span>
      </div>
    )
  }
}
```

#### ValinePageview

阅读量统计组件。

参数：

|参数|是否必须|作用|默认值|
|:---:|:---:|:---:|:---:|
|uniqStr|否|一个独立值，用于获取当前页面评论|window.location.origin+window.location.pathname|
|style|否|组件的样式|''|
|count|否|未获取时的初始值|获取中|
|title|否|当前组件对应的文章标题，用于方便后台查看|document.title|

> 注意：uniqStr必须是一个独立值，强烈建议自己填写一个独立值，而不是用默认值，因为如果使用默认值，当需要获取评论数时，并不一定在当前评论页的`uniqStr`上，就会获取错误或者失败。

articleMeta.js
```js
import React from 'react';
import {ValineCount} from "react-valine";

class ArticleMeta extends React.Component{
  render(){
    const {createdAt,author,a_unique_string}=this.props
    return (
      <div>
        <span>创建日期：{createdAt}</span>
        <span>作者：{author}</span>
        <span>评论数：<ValineCount uniqStr={a_unique_string}/></span>
        <span>阅读量：<ValinePageview uniqStr={a_unique_string} title={"JS基础教程"} /></span>
      </div>
    )
  }
}
```

#### ValinePanel

评论面板，一般放在文章页最尾端。

参数：

|参数|是否必须|作用|默认值|
|:---:|:---:|:---:|:---:|
|uniqStr|否|一个独立值，用于获取当前页面评论|window.location.origin+window.location.pathname|
|useWindow|否|配置执行滚动时所依赖的父元素|true|
|getPanelParent|否|`useWindow`为`false`时，可以自定义滚动父组件，默认滚动父组件为`panel.parentNode`|null|

> 注意：uniqStr必须是一个独立值，强烈建议自己填写一个独立值，而不是用默认值，因为如果使用默认值，当需要获取评论数时，并不一定在当前评论页的`uniqStr`上，就会获取错误或者失败。

#### modify_hljs

一个自定义`highlight`的方法。

由于直接引入`highlight`文件体积过大，因此使用按需加载。

默认提供`js`和`java`的代码高亮显示。

案例参考：

增加`python`代码高亮。
```js
import {modify_hljs} from "react-valine";

modify_hljs((hljs)=>{
  const python = require('highlight.js/lib/languages/python');
  hljs.registerLanguage('python', python);
  return hljs
})

```

更多关于[异步加载highlight](https://highlightjs.org/usage/)的介绍。


### 邮件回复

参考[Valine-Admin](https://github.com/zhaojun1998/Valine-Admin)

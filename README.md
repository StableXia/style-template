# style-template
一些基础的样式模板

### 为什么会有style-template

>我们在日常开发中总会做一些重复的工作，比如我们的前端工程师们再写css的时候，可能就会遇到经常写像文本溢出隐藏、布局、边距等等一些基础的样式类，为了多点时间刷知乎，我们是不是可以把这些经常要用的基础样式类封装起来，在要用的项目组直接引入即可。因此就有了style-template。


### 为什么要使用style-template
>1、不用再写基础的样式类,style-template已经帮我们写好了；    
2、可以统一我们各个应用项目的基础样式，方便管理维护；


### 如何使用
+ 安装
```js
# install style-template
npm install style-template
```

+ 以less的方式引入
```less
@import '~style-template/lib/less/index.less';
```

+ 以css的方式引入
```css
@import '~style-template/lib/less/index.css';
```

## 常见元素种类

- 行内元素 `inline`
    - 不独占一行；相邻排同一行；一行排不下换行
    - 不可设宽高
    - `padding`、`margin` **水平方向上设置有效**，垂直方向上无效
- 行内块元素 `inline-block`
    - 和其他元素同一行（行内元素特点）
    - 可以设宽高（块级元素特点）
    - `padding`、`margin` 设置有效
- 块级元素 `block`
    - 独占一行
    - 可以设宽高
    - `padding`、`margin` 设置有效

## 元素嵌套

- 内联元素可以嵌套内联元素
- 块元素能嵌套任何元素
- **p 标签不能嵌套 div**
- **a 标签不能嵌套 a 标签**

## a 标签作用

1. 超链接 `<a href="link">link</a>`
2. 打电话 `<a href="tel:18722232223">联系我们</a>`
3. 发邮件 `<a href="mailto:evelance@gmail.com">发送邮件</a>`
4. 锚点定位 `<a href="#div1">去id为div1的位置去</a>`
5. 协议限定符 `<a href="javascript:alert('hello world')">打开弹窗</a>`
    1. 禁止刷新页面：`<a href="javascript:;">无法跳转</a>` （`javascript:;`）
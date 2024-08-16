---
outline: 'deep'
---
# 牛客网刷题前端JavaScript处理输入输出问题

1. JavaScript Node环境
2. JavaScript V8环境（chrome浏览器）在oj或者是leetcode刷题基本就是函数 return结果出来就行，不需要自己处理什么输入输出，但是牛客网不会，需要自己去读输入的输出以及输出结果数据
3. 读输入的数据 readline
4. 输出数据 console.log() 或者print()也可以，前端的话习惯用console.log

### 参考资源

https://juejin.cn/post/7050765036926533668  
https://blog.csdn.net/LinWang__King/article/details/120336276

### Node环境和V8环境

```javascript
// Node环境 依赖process
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function() {
  console.log('每行数据---', line);
})

// V8环境
const line = readline();
```

这些都是读一行的情况，写法上看V8环境更加简单。

### 单行读取

就像上面的写法一样就行

### 多行读取

#### 固定行数的

输入：ABCD
6

```javascript
let num = 2;
let inputs = [];
rl.on('line', function() {
  inputs.push(line);
  if (inputs.length === num) {
    // 处理当前输入并输出；
    console.log('输出结果xxx');
    // inputs置空 给下一组数据使用
    inputs = [];
  }
})
```

#### 多组数据 不确定行数的

先输入一个数据比如N，然后接下来输入N个数据进行处理，比如
输入：3
data1
data2
data3

```javascript
let num = 0; 
let inputs = [];
rl.on('line', function() {
  if (num === 0) {
    num = parseInt(num); // 第一个数据先获取到
  } else {
    inputs.push(line);
  }

  if (inputs.length === num) {
    // 处理当前输入并输出；
    console.log('输出结果xxx');
    // inputs置空 给下一组数据使用
    inputs = [];
  }
})
```

### 一组数据，但是行数不明确的

输入：
xxx1
xxx2
xxx...

就是输入结束后再处理，

```javascript
let inputs = [];
let handleData = []; // 可以再输入时临时处理
rl.on('line', function(line) {
  inputs.push(line);
  handleData[0] = line + 1; // 自己处理
});

// 输入结束后再进行处理
rl.on('close', function() {
  // 这里处理输入结束后的内容

})
```

### 特定条件结束输入结束进程吧

比如单行输入处理数据的时候，遇到特定数据比如'0 0'时候结束了 也不进行输入了

```javascript
rl.on('line', function(line) {
  if (line === '0 0') {
    process.exit(0); // 结束进程
  }

  console.log('正常处理0----')
})
```

# single-merge
## description
----- Reasons for choosing single merge -----
1. single-xxx series plugin each plugin does only one thing
2. the plugin size is less than 1k
3. Provides a merge policy for multiple objects
4. High configuration policy

## options
1. If the first parameter is an array, the second parameter is considered to be config options,The purpose is to merge the elements in the array
   1. 如果第一个参数是数组，那么我们认为的第二个参数一定是config options
2. if the all parameter is object, there is no need to set parameters {arrayCover}
   1. 如果所有的参数都是对象，我们会忽略arrayCover参数
3. params[arrayCover]
   1. Under certain requirements, we need to merge arrays instead of overwriting them
   2. arrayCover => true array cover
   3. arrayCover => false array concat
   4. arrayCover default value is true
## example for
```
example1:
const merge = require('single-merge')
const a = {name: 'test', age: 20, arr: [1, 2]}
const b = {name: 'test1', age2: 30, arr: [3, 4]}
const c = {age2: 40, {school: {name: '111'}}}
const result = merge([a, b, c], {arrayCover: false})
=>
{
   name: 'test1',
   age: 20,
   age2: 30,
   arr: [1, 2, 3, 4],
   school: {
      name: '111'
   }
}

example2:
const result = merge(a, b, c)
=>
{
   name: 'test1',
   age: 20,
   age2: 30,
   arr: [3, 4],
   school: {
      name: '111'
   }
}
```
## install
```
npm install single-merge --save
yarn add single-merge --save
```
## contact me
[GitHub](https://github.com/a572251465/single-merge)
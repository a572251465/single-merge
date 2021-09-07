# single-merge
## description
----- Reasons for choosing single merge -----
1. single-xxx series plugin each plugin does only one thing
2. the plugin size is less than 1k
3. Provides a merge policy for multiple objects
4. High configuration policy

## options
1. params[arrayCover]
   1. Under certain requirements, we need to merge arrays instead of overwriting them
   2. arrayCover => true array cover
   3. arrayCover => false array concat
   4. arrayCover default value is true
## example for
```
const merge = require('single-merge')
const a = {name: 'test', age: 20}
const b = {name: 'test1', age2: 30}
const c = {age2: 40, {school: {name: '111'}}}
const result = merge([a, b, c])
```
## install
```
npm install single-merge --save
yarn add single-merge --save
```
## contact me
[GitHub](https://github.com/a572251465/single-merge)
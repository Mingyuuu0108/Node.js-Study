/*
path: 운영체제 별로 다른 폴더의 경로를 쉽게 조작하도록 하는 모듈
*/

const path = require('path');

const string = __filename;

console.log(`path.sep: ${path.sep}:`);
console.log(`path.delimiter: ${path.delimiter}:`);
console.log('-----------------------------');
console.log(`path.dirname(): ${path.dirname(string)}:`);
console.log(`path.extname(): ${path.extname(string)}:`);
console.log(`path.basename(): ${path.basename(string)}:`);
console.log(`path.basename - extname: ${path.basename(string, path.extname(string))}:`);
console.log('-----------------------------');
console.log(`path.parse(): ${path.parse(string)}:`);
console.log('-----------------------------');
console.log(`path.join(): ${path.join(__dirname, '..', '..', '/users', '.', '/leemingyu')}:`);
console.log(`path.resolve(): ${path.resolve(__dirname, '..', '/users', '.', '/leemingyu')}:`);
const odd = 'CJS 홀수입니다';
const even = 'CJS 짝수입니다';

console.log(this);
console.log(this === module.exports);

function whatIsThis() {
    console.log('function', this === module.exports);
}

whatIsThis();

module.exports = {
    odd, even
};
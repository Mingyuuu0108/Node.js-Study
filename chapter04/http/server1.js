const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // html: 랜더링
    // res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }); // plain: 원문
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.')
})
const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        // 절대 경로 추가
        const data = await fs.readFile('/Users/leemingyu/Desktop/github/Node.js-Study/chapter04/readhtml/server2.html');
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
})
.listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다.')
});
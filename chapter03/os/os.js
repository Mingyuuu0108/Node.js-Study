const os = require('os');

console.log('운영체제 정보---------------------');
// arch, platform, type 은 분기 처리 등에 사용이 됨.
console.log(`os.arch(): ${os.arch()}`)
console.log(`os.platform(): ${os.platform()}`)
console.log(`os.type(): ${os.type()}`)
console.log(`os.uptime(): ${os.uptime()}`)
console.log(`os.hostname(): ${os.hostname()}`)
console.log(`os.release(): ${os.release()}`)

console.log('\n경로----------------------------');
console.log(`os.homedir() ${os.homedir()}:`)
console.log(`os.tmpdir() ${os.tmpdir()}:`)

console.log('\nCPU 정보----------------------------');
console.log(`os.cpus(): ${os.cpus()}`)
console.log(`os.cpus.length: ${os.cpus().length}`)

console.log('\n메모리정보 정보----------------------------');
console.log(`os.freemem() ${os.freemem()}:`)
console.log(`os.totalmem() ${os.totalmem()}:`)
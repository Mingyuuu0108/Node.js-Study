const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});

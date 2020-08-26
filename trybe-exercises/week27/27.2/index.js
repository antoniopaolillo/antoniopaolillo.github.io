console.time('tempo do script');

const fs = require('fs');

console.time('tempo pra ler o arquivo')

const time = fs.readFileSync('citibike.tar.gz');

console.timeEnd('tempo pra ler o arquivo');

console.log('tamanho em bytes:', time.toString().length);

console.timeEnd('tempo do script');
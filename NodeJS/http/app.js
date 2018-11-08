const http = require('http');
const url = 'http://csszengarden.com';

http.get(url,(res)=>{
    let chunkCount = 0;

    res.on('data', (chunk)=>{
        chunkCount++;
        console.log('---------------------------------');
        console.log(chunk.toString('utf8'));
    });
    
    res.on('end', () => {
        console.log(`res가 ${chunkCount}로 나눠졌어요`);
    });
});
const http = require('http');

const data = {
    ceo: 'john',
    director: 'song',
}

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('hhhh');
        res.end();
    }

    if(req.url === '/api'){
        res.write(JSON.stringify(data));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');



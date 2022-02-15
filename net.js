const http = require('http');

http.createServer((req,resp)=>{
    console.log('nueva peticion');
    console.log(req.url);
    resp.setHeader('content-type','text/html;charset=utf-8');
    resp.write('<html>')
    resp.write('<body>')
    resp.write('<h1> Hello rest</h1>');
    resp.write(req.url);
    resp.write('</body>')
    resp.write('</html>')
    resp.end();
}).listen(3000);
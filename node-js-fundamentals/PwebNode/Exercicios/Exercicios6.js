let http = require('http');
let server = http.createServer(function(req,res){
    res.end("<html><body> Site da fatec sorocaba, </body></html>")
})
server.listen(3000)
console.log('servido iniciado')

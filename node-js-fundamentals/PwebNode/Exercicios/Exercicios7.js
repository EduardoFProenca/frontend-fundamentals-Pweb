let http = require('http');

let server = http.createServer(function(req, res) {
    let opcao = req.url;

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

    if (opcao == '/historia') {
        res.end("<html><body> História da Fatec Sorocaba </body></html>");
    } else if (opcao == '/cursos') {
        res.end("<html><body> Cursos da Fatec Sorocaba </body></html>"); 
    } else if (opcao == '/professores') {
        res.end("<html><body> Professores da Fatec Sorocaba </body></html>"); 
    } else {
        res.end("<html><body> Site da Fatec Sorocaba </body></html>");
    }
});

    Console.log("Servidor rodando na porta 3000!");

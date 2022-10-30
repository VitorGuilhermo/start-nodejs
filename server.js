const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({
        data: "Treinando com Node.js"
    }));
}).listen(3000, () => console.log("Servidor está rodando na porta 3000"));


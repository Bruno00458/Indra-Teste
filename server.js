const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/Indra-Teste'))

app.get('/*', (req, res) => {
    req.sendFile(__dirname + '/dist/Indra-Teste/index.html');

});

app.listen(PORT, () => {

    console.log('Servidor Iniciado na porta ' + PORT);

})
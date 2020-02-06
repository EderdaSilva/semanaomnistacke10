const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://edersilva:edersilva@cluster0-zkcvv.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);



app.listen(3333);


// comenetarios geral
//Métodos HTTP: GET, POST, PUT, DELETE

/*
Tipos de parâmetros:
    Query Params: req.query (Filtros, ordenação, paginação, ...)
    Route Params: request.params (Identificar um recurso na alteração ou remoção)
    Body: request.body (Dados para criação ou alteração de um registro)
*/

// MongoDB (Não-relacional) (site mongoDB Atlas)
// isntalar dentro da apricação o "mongoose", via yarn add mongoose
/*
axios faz chamada para outras API's -> yarn add axios
*/
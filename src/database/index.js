const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const url = process.env.MONGO_URL;
const local_url = 'mongodb://localhost/dbtodo';
try{
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.Promise = global.Promise;
    console.log('Conexão estabelecida com sucesso!')
}catch(error){
    console.log('Erro: ' + error);
}

module.exports = mongoose;
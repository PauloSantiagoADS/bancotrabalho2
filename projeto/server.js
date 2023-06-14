const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const eventRoutes = require('./routes');

// Configuração do servidor
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados MongoDB Atlas
connectDB();

// Rotas
app.use('/api', eventRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API do Meu Projeto');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

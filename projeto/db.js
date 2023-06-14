const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://mateus:mateus147@apicluster.tofgbch.mongodb.net/eventBD?retryWrites=true&w=majority', {
    useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o MongoDB Atlas estabelecida!');
  } catch (error) {
    console.error('Erro ao conectar-se ao MongoDB Atlas:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

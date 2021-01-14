const mongoosedb = require('../config/database');
const Schema = mongoosedb.Schema;


const clientSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  nascimento: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String
  }
})

module.exports = mongoosedb.model("Client", clientSchema);
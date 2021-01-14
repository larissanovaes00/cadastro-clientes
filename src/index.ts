import express from "express"
const server = express();

server.use(express.json());

const ClientRoutes = require('./routes/ClientRoutes');

server.use('/clients', ClientRoutes);

server.listen(3000, () => {
  console.log('api online');
});
const express = require('express');
const router = express.Router();
const ClientController = require('../controller/ClientController');

router.get('/list', ClientController.getAll);
router.post('/create', ClientController.create);
router.put('/update/:id', ClientController.update);
router.delete('/delete/:id', ClientController.delete);

module.exports = router;
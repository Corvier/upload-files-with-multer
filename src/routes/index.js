const express = require('express');
const uploadFile = require('../middleware/multer');
const uploadMultiplesFiles = require('../middleware/multer.multiple');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send({ title: 'express' });
});

//** localhost:3000/upload => Carga un solo archivo */
router.post('/upload', uploadFile(), function(req, res, next) {
    console.log(req.file);
    res.json({ title: 'upload success', status: 'ok' });
});

//** localhost:3000/upload => Carga multiples archivos */
router.post('/upload-multiples', uploadMultiplesFiles(), function(req, res, next) {
    console.log(req.files);
    res.json({ title: 'upload success', status: 'ok' });
});


module.exports = router
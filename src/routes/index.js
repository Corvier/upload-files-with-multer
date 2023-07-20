const express = require('express');
const uploadFile = require('../middleware/multer');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send({ title: 'express' });
});

//** localhost:3000/upload */
router.post('/upload', uploadFile(), function(req, res, next) {
    console.log(req.file);
    res.json({ title: 'upload success', status: 'ok' });
});

module.exports = router
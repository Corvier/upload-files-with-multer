const multer = require('multer');
const path = require('path');

const uploadMultiplesFiles = () => {
    const storage = multer.diskStorage({
        destination: path.join(__dirname, `../public/files`),
        filename: function (_req, file, cb) {
            const extension = path.extname(file.originalname);
            cb(null, `${Date.now()}${extension}`);
        }
    });

    const upload = multer({ storage: storage }).array('file', 3);

    return upload;
}


module.exports = uploadMultiplesFiles;
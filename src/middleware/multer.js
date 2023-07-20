const multer = require('multer');
const path = require('path');

const uploadFile = () => {
    const storage = multer.diskStorage({
        destination: path.join(__dirname, `../public/profiles`),
        filename: function (_req, file, cb) {
            let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
            // const extension = path.extname(file.originalname);
            cb(null, `${Date.now()}${extension}`);
        }
    });

    const upload = multer({ storage: storage }).single('file');

    return upload;
}


module.exports = uploadFile;
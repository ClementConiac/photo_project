/* const multer = require('multer')

module.exports = {
    storage () {
        const storage = multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, './../client/src/assets/img/')
            },
            filename: function(req, file, cb) {
                cb(null, Date.now() + file.originalname)
            }
        })
        const fileFilter = (req, file, cb) => {
            if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                cb(null, true)
            } else {
                cb(null, false)
            }
        }
        const upload = multer({
            storage: storage, 
            limits: {
                fileSize: 1024*1024*5
            },
            fileFilter: fileFilter
        })
    } 
}
 */
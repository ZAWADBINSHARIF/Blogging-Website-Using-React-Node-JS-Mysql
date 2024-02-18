// external import
import multer from "multer";
import path from 'path';


export function singleFileUploader(req, res, next) {

    const __dirname = path.resolve();
    const allowedFileType = ['image/jpg', 'image/png', 'image/jpeg'];
    const errorMessage = "Only jpg, png and jpeg pictures are allowed";
    const uploadFolderPath = path.join(__dirname, "backend", "public", "uploads", "blog_post_img");

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadFolderPath);
        },
        filename: function (req, file, cb) {
            const fileExt = path.extname(file.originalname);
            const fileName =
                file.originalname
                    .replace(fileExt, "")
                    .toLowerCase()
                    .split(" ")
                    .join("-") +
                "-" +
                Date.now();
            req.body.img = fileName + fileExt;
            cb(null, fileName + fileExt);
        }
    });

    const upload = multer({
        storage,
        fileFilter: function (req, file, cd) {
            if (allowedFileType.includes(file.mimetype)) {
                cd(null, true);
            } else {
                cd(errorMessage);
            }
        }
    }).single('img');

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log(err);
        } else if (err) {
            // An unknown error occurred when uploading.
            console.log(err);
            res.status(400).json(`${err}`);
        } else {
            next();
        }
    });
}
import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 5, //5MB
	},
	fileFilter: function (_req, file, cb) {
		if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
			cb(null, true);
		} else {
			cb(new Error("only jpeg or png public allowd"));
		}
	},
});

export { upload };

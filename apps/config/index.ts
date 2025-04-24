import { NODE_ENV, ENV, EXT } from "./env/env.config";
import { CONSTANT, ENV_TYPE, EXT_TYPE } from "./constants/typ.constant";
import { logger as LOGGER } from "./logger/winston.logger";
import { upload } from "./uploads/multer.config";
import { CONSTANTS } from "./constants/constant";

const ACTIVE: CONSTANT = CONSTANTS;

export {
	ENV,
	EXT,
	CONSTANTS,
	CONSTANT,
	NODE_ENV,
	ENV_TYPE,
	EXT_TYPE,
	ACTIVE,
	LOGGER,
	upload,
};

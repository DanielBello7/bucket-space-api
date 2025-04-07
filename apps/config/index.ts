import { NODE_ENV, ENV, EXT, envLocation } from "./env/env.config";
import { CONSTANT, ENV_TYPE, EXT_TYPE } from "./constants/typ.constant";
import { DEV_CONSTANT } from "./constants/dev.constant";
import { PRO_CONSTANT } from "./constants/pro.constant";
import { logger as LOGGER } from "./logger/winston.logger";
import { upload } from "./uploads/multer.config";

const CURRENT = {
	DEV: DEV_CONSTANT,
	PRO: PRO_CONSTANT,
};
const ACTIVE: CONSTANT = CURRENT[EXT];

export {
	ENV,
	EXT,
	CONSTANT,
	NODE_ENV,
	DEV_CONSTANT,
	ENV_TYPE,
	EXT_TYPE,
	PRO_CONSTANT,
	envLocation,
	CURRENT,
	ACTIVE,
	LOGGER,
	upload,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidParamPipe = void 0;
var bad_request_error_error_1 = require("../../../errors/bad-request-error.error");
var class_validator_1 = require("class-validator");
var uuidParamPipe = function (param) {
    return function (req, res, nxt) {
        var id = req.params[param];
        var check = (0, class_validator_1.isUUID)(id);
        if (!check) {
            throw new bad_request_error_error_1.BadRequestError("".concat(param, " not valid UUID"));
        }
        return nxt();
    };
};
exports.uuidParamPipe = uuidParamPipe;
//# sourceMappingURL=uuid-params.pipe.js.map
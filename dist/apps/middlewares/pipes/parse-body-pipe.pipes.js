"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBodyPipe = void 0;
var class_validator_1 = require("class-validator");
var internal_server_error_error_1 = require("../../errors/internal-server-error.error");
var validation_error_error_1 = require("../../errors/validation-error.error");
/** this function takes in a dto and uses it to evaluate a request */
/** if any of the challenges are failed it then passes the error to the next middleware */
var parseBodyPipe = function (dto) {
    return function (req, _res, next) {
        var validator = new dto();
        Object.assign(validator, req.body);
        (0, class_validator_1.validate)(validator)
            .then(function (errors) {
            if (errors.length > 0) {
                next(new validation_error_error_1.ValidationError(errors, "Error occured during ".concat(dto.name, " validation")));
            }
            else {
                next();
            }
        })
            .catch(function (error) {
            next(new internal_server_error_error_1.InternalServerError("Error occured during validation", error));
        });
    };
};
exports.parseBodyPipe = parseBodyPipe;
//# sourceMappingURL=parse-body-pipe.pipes.js.map
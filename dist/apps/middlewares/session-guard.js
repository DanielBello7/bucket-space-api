"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.session_guard = session_guard;
var config_1 = require("../config");
var unauthorized_error_error_1 = require("../errors/unauthorized-error.error");
var libs_1 = require("../libs");
function session_guard(req, _res, nxt) {
    var token = req.session.token;
    var jwt = new libs_1.JwtModule(config_1.ACTIVE.JWT_SECRET, "24h");
    if (!token) {
        throw new unauthorized_error_error_1.UnauthorizedError();
    }
    try {
        var user = jwt.service.verify(token);
        req.user = user;
        nxt();
    }
    catch (_a) {
        throw new unauthorized_error_error_1.UnauthorizedError();
    }
}
//# sourceMappingURL=session-guard.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var date_fns_1 = require("date-fns");
var unauthorized_error_error_1 = require("../../errors/unauthorized-error.error");
var otp_generator_1 = __importDefault(require("otp-generator"));
var AuthService = /** @class */ (function () {
    function AuthService(otp, accounts, jwt, email, refresh) {
        this.otp = otp;
        this.accounts = accounts;
        this.jwt = jwt;
        this.email = email;
        this.refresh = refresh;
    }
    /** sign in function */
    AuthService.prototype.sign_in = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (body.otp) {
                    return [2 /*return*/, this.authenticate(body.otp, body.email)];
                }
                else {
                    return [2 /*return*/, this.generate(body.email)];
                }
                return [2 /*return*/];
            });
        });
    };
    /** this removes many otp by a user from the database */
    AuthService.prototype.cleanup_otp = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.otp.removeMany({ email: email })];
            });
        });
    };
    /** this sends an email to the appropriate account */
    AuthService.prototype.generate = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var previous_tokens, valid, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accounts.findByEmail(email)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.otp.get({ email: email })];
                    case 2:
                        previous_tokens = _a.sent();
                        valid = previous_tokens.find(function (token) { return !(0, date_fns_1.isPast)(token.expiresAt); });
                        if (!valid) return [3 /*break*/, 4];
                        token = valid;
                        return [4 /*yield*/, this.otp.removeByIds(previous_tokens
                                .map(function (token) { return token.id; })
                                .filter(function (token) { return token !== valid.id; }))];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, this.cleanup_otp(email)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.otp.create({
                                email: email,
                                expiresAt: (0, date_fns_1.addHours)(new Date(), 2),
                                token: otp_generator_1.default.generate(6, {
                                    digits: true,
                                    lowerCaseAlphabets: false,
                                    specialChars: false,
                                    upperCaseAlphabets: false,
                                }),
                            })];
                    case 6:
                        token = _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.email.send_otp_mail({
                            otpTokn: token.token,
                            toEmail: email,
                            subject: "Your OTP Code, Please do not disclose this to anyone",
                        })];
                    case 8:
                        _a.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    /** this generates a valid token and refresh */
    AuthService.prototype.authorize = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var valid, refresh;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valid = this.jwt.sign(payload);
                        refresh = this.jwt.sign(payload, { expiresIn: "48h" });
                        return [4 /*yield*/, this.refresh.create({
                                account: payload.id,
                                refresh: refresh,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                token: valid,
                                refresh: refresh,
                                payload: payload,
                            }];
                }
            });
        });
    };
    /** this confirms the user is valid using the otp and the email */
    AuthService.prototype.authenticate = function (otp, email) {
        return __awaiter(this, void 0, void 0, function () {
            var account, token, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accounts.findByEmail(email)];
                    case 1:
                        account = _a.sent();
                        return [4 /*yield*/, this.otp.findByToken(otp)];
                    case 2:
                        token = _a.sent();
                        if (token.email !== email) {
                            throw new unauthorized_error_error_1.UnauthorizedError("invalid credentials");
                        }
                        if ((0, date_fns_1.isPast)(new Date(token.expiresAt).getTime())) {
                            throw new unauthorized_error_error_1.UnauthorizedError("token is expired");
                        }
                        return [4 /*yield*/, this.cleanup_otp(email)];
                    case 3:
                        _a.sent();
                        payload = {
                            id: account.id,
                            email: account.email,
                            name: account.name,
                        };
                        return [2 /*return*/, this.authorize(payload)];
                }
            });
        });
    };
    /** id represents user account id */
    AuthService.prototype.sign_out = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.refresh.removeMany({ account: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** this generates a new referesh token and a new valid session token for the user */
    AuthService.prototype.generate_refresh = function (refresh) {
        return __awaiter(this, void 0, void 0, function () {
            var find, account, payload, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.refresh.findByRefresh(refresh)];
                    case 1:
                        find = _b.sent();
                        return [4 /*yield*/, this.accounts.findById(find.account)];
                    case 2:
                        account = _b.sent();
                        return [4 /*yield*/, this.refresh.remove(find.id)];
                    case 3:
                        _b.sent();
                        payload = {
                            email: account.email,
                            id: account.id,
                            name: account.name,
                        };
                        return [2 /*return*/, this.authorize(payload)];
                    case 4:
                        _a = _b.sent();
                        throw new unauthorized_error_error_1.UnauthorizedError();
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrevoService = void 0;
var interfaces_1 = require("../../interfaces");
var otp_email_1 = require("./emails/otp.email");
var welcome_email_1 = require("./emails/welcome.email");
var EmailAPI = require("sib-api-v3-sdk");
var BrevoService = /** @class */ (function (_super) {
    __extends(BrevoService, _super);
    function BrevoService(body) {
        var _this = _super.call(this) || this;
        _this.send_text_email = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var toEmail, subject, message, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toEmail = body.toEmail, subject = body.subject, message = body.message;
                        return [4 /*yield*/, this.smtp.sendTransacEmail({
                                sender: { email: this.mail, name: this.name },
                                to: [{ email: toEmail }],
                                subject: subject,
                                textContent: message,
                                htmlContent: undefined,
                                params: undefined,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        _this.send_html_email = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var toEmail, subject, htmlBdy, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toEmail = body.toEmail, subject = body.subject, htmlBdy = body.htmlBdy;
                        return [4 /*yield*/, this.smtp.sendTransacEmail({
                                sender: { email: this.mail, name: this.name },
                                to: [{ email: toEmail }],
                                subject: subject,
                                htmlContent: htmlBdy,
                                textContent: undefined,
                                params: undefined,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        _this.send_otp_mail = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var otpTokn, subject, toEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        otpTokn = body.otpTokn, subject = body.subject, toEmail = body.toEmail;
                        return [4 /*yield*/, this.smtp.sendTransacEmail({
                                sender: { email: this.mail, name: this.name },
                                to: [{ email: toEmail }],
                                subject: subject !== null && subject !== void 0 ? subject : "Your OTP Code",
                                htmlContent: (0, otp_email_1.otp_email)(otpTokn, toEmail),
                                textContent: "Your OTP Code is: ".concat(otpTokn),
                                params: undefined,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.send_welcome_mail = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var name, subject, toEmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = body.name, subject = body.subject, toEmail = body.toEmail;
                        return [4 /*yield*/, this.smtp.sendTransacEmail({
                                sender: { email: this.mail, name: this.name },
                                to: [{ email: toEmail }],
                                subject: subject !== null && subject !== void 0 ? subject : "Welcome to Our Service!",
                                htmlContent: (0, welcome_email_1.welcome_email)(name, toEmail),
                                textContent: "Hi ".concat(name, ",\n\nWelcome to our service! We're excited to have you on board.\n\nBest regards,\n").concat(this.name),
                                params: undefined,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        var client = EmailAPI.ApiClient.instance;
        var apiKeyObject = client.authentications["api-key"];
        apiKeyObject.apiKey = body.apikey;
        _this.smtp = new EmailAPI.TransactionalEmailsApi();
        _this.mail = body.email;
        _this.name = body.email_name;
        return _this;
    }
    return BrevoService;
}(interfaces_1.IEmailConfig));
exports.BrevoService = BrevoService;
//# sourceMappingURL=brevo.service.js.map
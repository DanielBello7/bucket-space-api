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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareService = void 0;
var not_found_error_error_1 = require("../../errors/not-found-error.error");
var bad_request_error_error_1 = require("../../errors/bad-request-error.error");
var ShareService = /** @class */ (function () {
    function ShareService(shares) {
        this.shares = shares;
    }
    ShareService.prototype.alreadyExists = function (account, post) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shares.findOne({
                            where: {
                                account: account,
                                post: post,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            return [2 /*return*/, false];
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ShareService.prototype.save = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alreadyExists(body.account, body.post)];
                    case 1:
                        if (_a.sent()) {
                            throw new bad_request_error_error_1.BadRequestError("post already shared");
                        }
                        return [2 /*return*/, this.create(body)];
                }
            });
        });
    };
    ShareService.prototype.modify = function (id, updates) {
        return __awaiter(this, void 0, void 0, function () {
            var account, post, rest;
            return __generator(this, function (_a) {
                account = updates.account, post = updates.post, rest = __rest(updates, ["account", "post"]);
                return [2 /*return*/, this.update(id, rest)];
            });
        });
    };
    ShareService.prototype.countUserShares = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.shares.count({
                        where: {
                            account: id,
                        },
                    })];
            });
        });
    };
    ShareService.prototype.getUserShares = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.shares.find({
                        where: {
                            account: id,
                        },
                    })];
            });
        });
    };
    ShareService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shares.findOne({
                            where: {
                                id: id,
                            },
                            relations: {
                                Account: true,
                                Post: true,
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            throw new not_found_error_error_1.NotFoundError();
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    ShareService.prototype.get = function () {
        return __awaiter(this, arguments, void 0, function (query) {
            var page, take, skip, _, __, filters, _a, data, total;
            if (query === void 0) { query = {}; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        page = query.page ? parseInt(query.page, 10) : 1;
                        take = query.take ? parseInt(query.take, 10) : 100;
                        skip = (page - 1) * take;
                        _ = query.page, __ = query.limit, filters = __rest(query, ["page", "limit"]);
                        return [4 /*yield*/, this.shares.findAndCount({
                                where: filters,
                                skip: skip,
                                take: take,
                                relations: {
                                    Account: true,
                                },
                            })];
                    case 1:
                        _a = _b.sent(), data = _a[0], total = _a[1];
                        return [2 /*return*/, {
                                data: data,
                                total: total,
                                page: page,
                                take: take,
                                totalPages: Math.ceil(total / take),
                            }];
                }
            });
        });
    };
    ShareService.prototype.create = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = this.shares.create(body);
                return [2 /*return*/, this.shares.save(response)];
            });
        });
    };
    ShareService.prototype.update = function (id, updates) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shares.update(id, updates)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.findById(id)];
                }
            });
        });
    };
    ShareService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.shares.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return ShareService;
}());
exports.ShareService = ShareService;
//# sourceMappingURL=shares.service.js.map
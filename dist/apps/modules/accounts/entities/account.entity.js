"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var typeorm_1 = require("typeorm");
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.update_timestamp = function () {
        this.updatedAt = new Date();
    };
    Account.prototype.set_defaults = function () {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isVerified = false;
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 255,
        }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean' }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "isVerified", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            length: 255,
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], Account.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", Date)
    ], Account.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", Date)
    ], Account.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Account.prototype, "update_timestamp", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Account.prototype, "set_defaults", null);
    Account = __decorate([
        (0, typeorm_1.Entity)()
    ], Account);
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map
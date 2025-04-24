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
exports.Refresh = void 0;
var typeorm_1 = require("typeorm");
var Refresh = /** @class */ (function () {
    function Refresh() {
    }
    Refresh.prototype.defaults = function () {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    };
    Refresh.prototype.updated = function () {
        this.updatedAt = new Date();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Refresh.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], Refresh.prototype, "account", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 999 }),
        __metadata("design:type", String)
    ], Refresh.prototype, "refresh", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Refresh.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Refresh.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Refresh.prototype, "defaults", null);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Refresh.prototype, "updated", null);
    Refresh = __decorate([
        (0, typeorm_1.Entity)()
    ], Refresh);
    return Refresh;
}());
exports.Refresh = Refresh;
//# sourceMappingURL=refresh.entity.js.map
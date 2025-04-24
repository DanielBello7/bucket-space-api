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
exports.Like = void 0;
var account_entity_1 = require("../../accounts/entities/account.entity");
var typeorm_1 = require("typeorm");
var post_entity_1 = require("../../posts/entities/post.entity");
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.updated = function () {
        this.updatedAt = new Date();
    };
    Like.prototype.defaults = function () {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Like.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], Like.prototype, "post", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], Like.prototype, "account", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Like.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Like.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return account_entity_1.Account; }, function (account) { return account.Likes; }),
        (0, typeorm_1.JoinColumn)({ name: "account" }),
        __metadata("design:type", Object)
    ], Like.prototype, "Account", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return post_entity_1.Post; }, function (post) { return post.Likes; }),
        (0, typeorm_1.JoinColumn)({ name: "post" }),
        __metadata("design:type", Object)
    ], Like.prototype, "Post", void 0);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Like.prototype, "updated", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Like.prototype, "defaults", null);
    Like = __decorate([
        (0, typeorm_1.Entity)()
    ], Like);
    return Like;
}());
exports.Like = Like;
//# sourceMappingURL=like.entity.js.map
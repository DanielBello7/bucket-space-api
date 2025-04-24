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
exports.Post = void 0;
var account_entity_1 = require("../../accounts/entities/account.entity");
var comment_entity_1 = require("../../comments/entities/comment.entity");
var typeorm_1 = require("typeorm");
var like_entity_1 = require("../../likes/entities/like.entity");
var share_entity_1 = require("../../shares/entities/share.entity");
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.updated = function () {
        this.updatedAt = new Date();
    };
    Post.prototype.defaults = function () {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.Comments = [];
        this.Likes = [];
        this.Shares = [];
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Post.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 1000 }),
        __metadata("design:type", String)
    ], Post.prototype, "body", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar" }),
        __metadata("design:type", String)
    ], Post.prototype, "account", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "simple-json", length: 1000, nullable: true }),
        __metadata("design:type", Array)
    ], Post.prototype, "media", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "simple-json", length: 1000, nullable: true }),
        __metadata("design:type", Array)
    ], Post.prototype, "mimetype", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Post.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Post.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return account_entity_1.Account; }, function (account) { return account.Posts; }),
        (0, typeorm_1.JoinColumn)({ name: "account" }),
        __metadata("design:type", Object)
    ], Post.prototype, "Account", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return comment_entity_1.Comment; }, function (comment) { return comment.Post; }),
        __metadata("design:type", Object)
    ], Post.prototype, "Comments", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return like_entity_1.Like; }, function (like) { return like.Post; }),
        __metadata("design:type", Object)
    ], Post.prototype, "Likes", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_entity_1.Share; }, function (share) { return share.Post; }),
        __metadata("design:type", Object)
    ], Post.prototype, "Shares", void 0);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "updated", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "defaults", null);
    Post = __decorate([
        (0, typeorm_1.Entity)()
    ], Post);
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.entity.js.map
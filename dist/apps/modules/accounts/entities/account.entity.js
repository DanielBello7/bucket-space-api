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
var comment_entity_1 = require("../../comments/entities/comment.entity");
var like_entity_1 = require("../../likes/entities/like.entity");
var post_entity_1 = require("../../posts/entities/post.entity");
var relationship_entity_1 = require("../../relationships/entities/relationship.entity");
var share_entity_1 = require("../../shares/entities/share.entity");
var file_entity_1 = require("../../files/entities/file.entity");
var typeorm_1 = require("typeorm");
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.updated = function () {
        this.updatedAt = new Date();
    };
    Account.prototype.defaults = function () {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.isVerified = false;
        this.Posts = [];
        this.Comments = [];
        this.Likes = [];
        this.Shares = [];
        this.Followers = [];
        this.Following = [];
        this.Files = [];
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "isVerified", void 0);
    __decorate([
        (0, typeorm_1.Column)({ length: 255, type: "varchar" }),
        __metadata("design:type", String)
    ], Account.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Account.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Account.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return post_entity_1.Post; }, function (post) { return post.Account; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Posts", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return comment_entity_1.Comment; }, function (comment) { return comment.Account; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Comments", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return like_entity_1.Like; }, function (like) { return like.Account; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Likes", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_entity_1.Share; }, function (share) { return share.Account; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Shares", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return relationship_entity_1.Relationship; }, function (relationship) { return relationship.Following; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Followers", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return relationship_entity_1.Relationship; }, function (relationship) { return relationship.Follower; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Following", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return file_entity_1.File; }, function (files) { return files.Account; }),
        __metadata("design:type", Object)
    ], Account.prototype, "Files", void 0);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Account.prototype, "updated", null);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Account.prototype, "defaults", null);
    Account = __decorate([
        (0, typeorm_1.Entity)()
    ], Account);
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map
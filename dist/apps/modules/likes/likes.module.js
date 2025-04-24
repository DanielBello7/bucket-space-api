"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesModule = void 0;
var likes_service_1 = require("./likes.service");
var likes_controller_1 = require("./likes.controller");
var like_entity_1 = require("./entities/like.entity");
var LikesModule = /** @class */ (function () {
    function LikesModule(datastore) {
        this.repo = datastore.getRepository(like_entity_1.Like);
        this.service = new likes_service_1.LikeService(this.repo);
        this.controller = new likes_controller_1.LikesController(this.service);
    }
    return LikesModule;
}());
exports.LikesModule = LikesModule;
//# sourceMappingURL=likes.module.js.map
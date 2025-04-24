"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
var comments_controller_1 = require("./comments.controller");
var comments_service_1 = require("./comments.service");
var comment_entity_1 = require("./entities/comment.entity");
var CommentsModule = /** @class */ (function () {
    function CommentsModule(datasource) {
        this.repo = datasource.getRepository(comment_entity_1.Comment);
        this.service = new comments_service_1.CommentService(this.repo);
        this.controller = new comments_controller_1.CommentsController(this.service);
    }
    return CommentsModule;
}());
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map
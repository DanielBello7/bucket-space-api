"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
var posts_controller_1 = require("./posts.controller");
var posts_service_1 = require("./posts.service");
var post_entity_1 = require("./entities/post.entity");
var files_1 = require("../files");
var PostsModule = /** @class */ (function () {
    function PostsModule(datasource) {
        this.repo = datasource.getRepository(post_entity_1.Post);
        this.files = new files_1.FileModule(datasource);
        this.service = new posts_service_1.PostService(this.repo, this.files.service);
        this.controller = new posts_controller_1.PostController(this.service);
    }
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map
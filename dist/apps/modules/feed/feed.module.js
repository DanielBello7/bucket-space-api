"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedModule = void 0;
var feed_service_1 = require("./feed.service");
var feed_controller_1 = require("./feed.controller");
var accounts_1 = require("../accounts");
var posts_1 = require("../posts");
var shares_1 = require("../shares");
var likes_1 = require("../likes");
var relationships_1 = require("../relationships");
var FeedModule = /** @class */ (function () {
    function FeedModule(datasource) {
        this.posts = new posts_1.PostsModule(datasource);
        this.accounts = new accounts_1.AccountModule(datasource);
        this.likes = new likes_1.LikesModule(datasource);
        this.shares = new shares_1.SharesModule(datasource);
        this.relationships = new relationships_1.RelationshipModule(datasource);
        this.datasource = datasource;
        this.service = new feed_service_1.FeedService(this.accounts.service, this.posts.service, this.shares.service, this.likes.service, this.relationships.service);
        this.controller = new feed_controller_1.FeedController(this.service);
    }
    return FeedModule;
}());
exports.FeedModule = FeedModule;
//# sourceMappingURL=feed.module.js.map
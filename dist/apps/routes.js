"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var relationships_route_1 = __importDefault(require("./modules/relationships/relationships.route"));
var accounts_route_1 = __importDefault(require("./modules/accounts/accounts.route"));
var file_route_1 = __importDefault(require("./modules/files/file.route"));
var auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
var comments_route_1 = __importDefault(require("./modules/comments/comments.route"));
var likes_route_1 = __importDefault(require("./modules/likes/likes.route"));
var posts_route_1 = __importDefault(require("./modules/posts/posts.route"));
var feed_route_1 = __importDefault(require("./modules/feed/feed.route"));
var shares_route_1 = __importDefault(require("./modules/shares/shares.route"));
var router = express_1.default.Router();
router.use("/accounts/", accounts_route_1.default);
router.use("/auth/", auth_route_1.default);
router.use("/feed/", feed_route_1.default);
router.use("/comments/", comments_route_1.default);
router.use("/files/", file_route_1.default);
router.use("/likes/", likes_route_1.default);
router.use("/posts/", posts_route_1.default);
router.use("/relationships/", relationships_route_1.default);
router.use("/shares/", shares_route_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map
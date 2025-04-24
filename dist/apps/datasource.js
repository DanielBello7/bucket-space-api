"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
var CONFIG = __importStar(require("./config"));
var typeorm_1 = require("typeorm");
var file_entity_1 = require("./modules/files/entities/file.entity");
var like_entity_1 = require("./modules/likes/entities/like.entity");
var otp_entity_1 = require("./modules/otp/entities/otp.entity");
var account_entity_1 = require("./modules/accounts/entities/account.entity");
var comment_entity_1 = require("./modules/comments/entities/comment.entity");
var post_entity_1 = require("./modules/posts/entities/post.entity");
var relationship_entity_1 = require("./modules/relationships/entities/relationship.entity");
var share_entity_1 = require("./modules/shares/entities/share.entity");
var refresh_entity_1 = require("./modules/refresh/entities/refresh.entity");
exports.database = new typeorm_1.DataSource({
    type: "sqlite",
    entities: [
        account_entity_1.Account,
        comment_entity_1.Comment,
        file_entity_1.File,
        like_entity_1.Like,
        otp_entity_1.Otp,
        post_entity_1.Post,
        relationship_entity_1.Relationship,
        share_entity_1.Share,
        refresh_entity_1.Refresh,
        // additional entities
    ],
    synchronize: true,
    logging: false,
    migrations: [],
    database: CONFIG.ACTIVE.DATABASE_URI,
    subscribers: [],
});
//# sourceMappingURL=datasource.js.map
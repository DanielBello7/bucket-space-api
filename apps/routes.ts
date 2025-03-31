import express from "express";
import relationships from "./modules/relationships/relationships.route";
import accounts from "./modules/accounts/accounts.route";
import files from "./modules/files/file.route";
import auth from "./modules/auth/auth.route";
import comments from "./modules/comments/comments.route";
import likes from "./modules/likes/likes.route";
import posts from "./modules/posts/posts.route";
import shares from "./modules/shares/shares.route";

const router = express.Router();

router.use("/accounts/", accounts);

router.use("/auth/", auth);

router.use("/comments/", comments);

router.use("/files/", files);

router.use("/likes/", likes);

router.use("/posts/", posts);

router.use("/relationships/", relationships);

router.use("/shares/", shares);

export default router;

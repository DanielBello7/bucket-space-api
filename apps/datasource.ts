import * as CONFIG from "./config";
import { DataSource } from "typeorm";
import { File } from "./modules/files/entities/file.entity";
import { Like } from "./modules/likes/entities/like.entity";
import { Otp } from "./modules/otp/entities/otp.entity";
import { Account } from "./modules/accounts/entities/account.entity";
import { Comment } from "./modules/comments/entities/comment.entity";
import { Post } from "./modules/posts/entities/post.entity";
import { Relationship } from "./modules/relationships/entities/relationship.entity";
import { Share } from "./modules/shares/entities/share.entity";
import { Refresh } from "./modules/refresh/entities/refresh.entity";

export const database = new DataSource({
	type: "sqlite",
	entities: [
		Account,
		Comment,
		File,
		Like,
		Otp,
		Post,
		Relationship,
		Share,
		Refresh,
		// additional entities
	],
	synchronize: true,
	logging: false,
	migrations: [],
	database: CONFIG.ACTIVE.DATABASE_URI,
	subscribers: [],
});

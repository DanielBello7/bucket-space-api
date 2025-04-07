import { AccountService } from "../accounts";
import { LikeService } from "../likes";
import { PostService } from "../posts";
import { RelationshipService } from "../relationships";
import { ShareService } from "../shares";

export class FeedService {
	constructor(
		private readonly account: AccountService,
		private readonly posts: PostService,
		private readonly shares: ShareService,
		private readonly likes: LikeService,
		private readonly relationship: RelationshipService
	) {}

	/** get post feed tailored to a particular account */
	async get_acc_posts_feed(id: string, query: Record<string, any> = {}) {
		return this.posts.get(query);
	}

	/** this gets post feed for visitor accounts */
	async get_generic_post_feed(query: Record<string, any> = {}) {
		return this.posts.get(query);
	}
}

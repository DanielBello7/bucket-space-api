import { DataSource } from "typeorm";
import { FeedService } from "./feed.service";
import { FeedController } from "./feed.controller";
import { AccountModule } from "../accounts";
import { PostsModule } from "../posts";
import { SharesModule } from "../shares";
import { LikesModule } from "../likes";
import { RelationshipModule } from "../relationships";

export class FeedModule {
	public controller: FeedController;
	public service: FeedService;
	public datasource: DataSource;
	public accounts: AccountModule;
	public posts: PostsModule;
	public shares: SharesModule;
	public likes: LikesModule;
	public relationships: RelationshipModule;

	constructor(datasource: DataSource) {
		this.posts = new PostsModule(datasource);
		this.accounts = new AccountModule(datasource);
		this.likes = new LikesModule(datasource);
		this.shares = new SharesModule(datasource);
		this.relationships = new RelationshipModule(datasource);
		this.datasource = datasource;
		this.service = new FeedService(
			this.accounts.service,
			this.posts.service,
			this.shares.service,
			this.likes.service,
			this.relationships.service
		);
		this.controller = new FeedController(this.service);
	}
}

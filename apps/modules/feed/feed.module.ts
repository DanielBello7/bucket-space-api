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

	constructor(datasource: DataSource) {
		const accounts = new AccountModule(datasource);
		const posts = new PostsModule(datasource);
		const shares = new SharesModule(datasource);
		const likes = new LikesModule(datasource);
		const relationships = new RelationshipModule(datasource);
		this.datasource = datasource;
		this.service = new FeedService(
			accounts.service,
			posts.service,
			shares.service,
			likes.service,
			relationships.service
		);
		this.controller = new FeedController(this.service);
	}
}

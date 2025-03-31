export type Post = {
	id: string;
	body: string;
	account: string;
	media: string[];
	mimetype: string[];
	createdAt: Date;
	updatedAt: Date;
};

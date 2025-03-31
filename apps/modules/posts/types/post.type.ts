export type Post = {
	id: string;
	body: string;
	account: string;
	media: string | undefined;
	mimetype: string | undefined;
	createdAt: Date;
	updatedAt: Date;
};

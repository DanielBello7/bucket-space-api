import { Repository } from "typeorm";
import { Relationship } from "./entities/relationship.entity";
import { CreateRelationshipDto } from "./dto/create-relationship.dto";
import { UpdateRelationshipDto } from "./dto/update-relationship.dto";
import { NotFoundError } from "@/errors/not-found-error.error";
import { BadRequestError } from "@/errors/bad-request-error.error";

export class RelationshipService {
	constructor(private readonly relationships: Repository<Relationship>) {}

	/** check if a record already exists */
	async alreadyExists(follower: string, following: string) {
		const response = await this.relationships.findOne({
			where: {
				follower,
				following,
			},
		});
		if (!response) return false;
		return true;
	}

	/** get the list of those following a user */
	async findUserFollowers(id: string) {
		return this.relationships.find({
			where: {
				following: id,
			},
			relations: {
				Follower: true,
			},
		});
	}

	/** get the list of those a user is following */
	async findUserFollowing(id: string) {
		return this.relationships.find({
			where: {
				follower: id,
			},
			relations: {
				Following: true,
			},
		});
	}

	/** count the number of people following a user */
	async countUserFollowers(id: string) {
		return this.relationships.count({
			where: {
				following: id,
			},
		});
	}

	/** count the number of people a user is following */
	async countUserFollowing(id: string) {
		return this.relationships.count({
			where: {
				follower: id,
			},
		});
	}

	/** create a record */
	async save(body: CreateRelationshipDto) {
		if (await this.alreadyExists(body.follower, body.following)) {
			throw new BadRequestError("relationship already exists");
		}
		return this.create(body);
	}

	/** this checks if the reverse of a relationship exists */
	async findCounterPart(id: string) {
		const relationship = await this.findById(id);
		const counterpart = await this.relationships.findOne({
			where: {
				follower: relationship.following,
				following: relationship.follower,
			},
		});
		if (!counterpart) {
			throw new NotFoundError("counterpart not found");
		}
		return counterpart;
	}

	async findById(id: string) {
		const response = await this.relationships.findOne({
			where: {
				id,
			},
			relations: {
				Following: true,
				Follower: true,
			},
		});
		if (!response) {
			throw new NotFoundError();
		}
		return response;
	}

	async get(query: Record<string, any> = {}) {
		return this.relationships.find(query);
	}

	async create(body: CreateRelationshipDto) {
		const response = this.relationships.create(body);
		return this.relationships.save(response);
	}

	async update(id: string, updates: UpdateRelationshipDto) {
		await this.relationships.update(id, updates);
		return this.findById(id);
	}

	async delete(id: string) {
		const response = await this.findById(id);
		await this.relationships.delete(id);
		return response;
	}
}

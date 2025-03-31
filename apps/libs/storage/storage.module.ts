import { StorageService } from "./storage.service";
import path from "path";

export class StorageModule {
	public service: StorageService;
	public limits: number;
	public folder: string;

	constructor() {
		this.limits = 104857600;
		this.folder = path.join(__dirname, "..", "..", "..", "asst");
		this.service = new StorageService(this.folder, this.limits);
	}
}

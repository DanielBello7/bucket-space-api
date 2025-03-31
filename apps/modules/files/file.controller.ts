import express from "express";
import path from "path";

export class FileController {
	constructor() {}
	get() {
		return express.static(path.join(__dirname, "..", "..", "..", "asst"));
	}
}

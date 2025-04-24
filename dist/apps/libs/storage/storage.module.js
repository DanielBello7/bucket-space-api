"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModule = void 0;
var storage_service_1 = require("./storage.service");
var path_1 = __importDefault(require("path"));
var StorageModule = /** @class */ (function () {
    function StorageModule() {
        this.limits = 104857600;
        this.folder = path_1.default.join(__dirname, "..", "..", "..", "asst");
        this.service = new storage_service_1.StorageService(this.folder, this.limits);
    }
    return StorageModule;
}());
exports.StorageModule = StorageModule;
//# sourceMappingURL=storage.module.js.map
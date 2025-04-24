"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileModule = void 0;
var file_service_1 = require("./file.service");
var file_entity_1 = require("./entities/file.entity");
var file_controller_1 = require("./file.controller");
var storage_module_1 = require("../../libs/storage/storage.module");
var FileModule = /** @class */ (function () {
    function FileModule(datastore) {
        this.repo = datastore.getRepository(file_entity_1.File);
        this.storage = new storage_module_1.StorageModule();
        this.service = new file_service_1.FileService(this.repo, this.storage.service);
        this.controller = new file_controller_1.FileController();
    }
    return FileModule;
}());
exports.FileModule = FileModule;
//# sourceMappingURL=file.module.js.map
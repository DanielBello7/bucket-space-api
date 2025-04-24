"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var uuid_1 = require("uuid");
var StorageService = /** @class */ (function () {
    function StorageService(folder, limits) {
        this.folder = folder;
        this.limits = limits;
    }
    /** use this function to save files externally */
    StorageService.prototype.save = function (files) {
        var _this = this;
        if (this.isMaxed()) {
            throw new Error("storage maxed out");
        }
        return files.map(function (file) { return _this.upload(file); });
    };
    StorageService.prototype.upload = function (file) {
        var id = (0, uuid_1.v4)();
        if (!fs_1.default.existsSync(this.folder)) {
            fs_1.default.mkdirSync(this.folder);
        }
        var extension = file.mimetype.split("/")[1];
        var result = "".concat(id, ".").concat(extension);
        var location = path_1.default.join(this.folder, result);
        fs_1.default.writeFileSync(location, file.buffer);
        return {
            location: location,
            url: "http://localhost:3000/files/".concat(result),
            result: result,
            id: id,
        };
    };
    StorageService.prototype.getFolderSizeSync = function (folderPath) {
        var total = 0;
        var files = fs_1.default.readdirSync(folderPath);
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var filePath = path_1.default.join(folderPath, file);
            var stats = fs_1.default.statSync(filePath);
            if (stats.isFile()) {
                total += stats.size;
            }
            else if (stats.isDirectory()) {
                total += this.getFolderSizeSync(filePath);
            }
        }
        return total;
    };
    StorageService.prototype.isMaxed = function () {
        var size = this.getFolderSizeSync(this.folder);
        /** 1024bytes = 1KB, 104,857,600bytes = 100MB */
        // if (size > 104857600) return true;
        if (size > this.limits)
            return true;
        return false;
    };
    StorageService.prototype.find = function (id) {
        var location = path_1.default.join(this.folder, id);
        if (!fs_1.default.existsSync(location)) {
            throw new Error("file missing on disk");
        }
        return fs_1.default.readFileSync(location);
    };
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map
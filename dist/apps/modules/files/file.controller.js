"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var FileController = /** @class */ (function () {
    function FileController() {
    }
    FileController.prototype.get = function () {
        return express_1.default.static(path_1.default.join(__dirname, "..", "..", "..", "asst"));
    };
    return FileController;
}());
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map
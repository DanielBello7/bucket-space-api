"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var file_module_1 = require("./file.module");
var datasource_1 = require("../../datasource");
var router = express_1.default.Router();
var module = new file_module_1.FileModule(datasource_1.database);
router.use(module.controller.get());
exports.default = router;
//# sourceMappingURL=file.route.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parse_body_pipe_pipes_1 = require("../../middlewares/pipes/parse-body-pipe.pipes");
var uuid_params_pipe_1 = require("./pipes/uuid-params.pipe");
var create_account_dto_1 = require("./dto/create-account.dto");
var datasource_1 = require("../../datasource");
var accounts_controller_1 = require("./accounts.controller");
var account_entity_1 = require("./entities/account.entity");
var accounts_service_1 = require("./accounts.service");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var repo = datasource_1.database.getRepository(account_entity_1.Account);
var service = new accounts_service_1.AccountService(repo);
var controller = new accounts_controller_1.AccountController(service);
router.post('/signup/', (0, parse_body_pipe_pipes_1.parseBodyPipe)(create_account_dto_1.CreateAccountDto), controller.create);
router.patch('/:id/', (0, uuid_params_pipe_1.uuidParamPipe)('id'), controller.update);
router.get('/', controller.get);
router.get('/:id/', (0, uuid_params_pipe_1.uuidParamPipe)('id'), controller.find);
router.delete('/:id/', (0, uuid_params_pipe_1.uuidParamPipe)('id'), controller.remove);
exports.default = router;
//# sourceMappingURL=accounts.route.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipModule = void 0;
var relationship_entity_1 = require("./entities/relationship.entity");
var relationships_service_1 = require("./relationships.service");
var relationships_controller_1 = require("./relationships.controller");
var RelationshipModule = /** @class */ (function () {
    function RelationshipModule(datastore) {
        this.repo = datastore.getRepository(relationship_entity_1.Relationship);
        this.service = new relationships_service_1.RelationshipService(this.repo);
        this.controller = new relationships_controller_1.RelationshipController(this.service);
    }
    return RelationshipModule;
}());
exports.RelationshipModule = RelationshipModule;
//# sourceMappingURL=relationships.module.js.map
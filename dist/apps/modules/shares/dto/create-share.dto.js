"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShareDto = void 0;
var class_transformer_1 = require("class-transformer");
var share_enum_1 = require("../enums/share.enum");
var class_validator_1 = require("class-validator");
var CreateShareDto = /** @class */ (function () {
    function CreateShareDto() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", String)
    ], CreateShareDto.prototype, "post", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", String)
    ], CreateShareDto.prototype, "account", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEnum)(share_enum_1.SHARE_ENUM),
        __metadata("design:type", String)
    ], CreateShareDto.prototype, "to", void 0);
    return CreateShareDto;
}());
exports.CreateShareDto = CreateShareDto;
//# sourceMappingURL=create-share.dto.js.map
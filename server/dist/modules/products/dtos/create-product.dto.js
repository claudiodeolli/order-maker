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
exports.CreateProductDto = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const is_identifier_unique_validator_1 = require("../../../common/validators/is-identifier-unique.validator");
const is_price_format_validator_1 = require("../../../common/validators/is-price-format.validator");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Max)(9999999999),
    (0, class_validator_1.Validate)(is_identifier_unique_validator_1.IsIdentifierUnique),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.Validate)(is_price_format_validator_1.IsOnPriceFormat),
    __metadata("design:type", String)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.Status),
    __metadata("design:type", String)
], CreateProductDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateProductDto.prototype, "user", void 0);
//# sourceMappingURL=create-product.dto.js.map
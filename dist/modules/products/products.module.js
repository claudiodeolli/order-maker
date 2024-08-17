"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductssModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("./controller/products.controller");
const products_service_1 = require("./services/products.service");
const prisma_service_1 = require("../../common/database/prisma.service");
const products_repository_1 = require("./repositories/products.repository");
const is_identifier_unique_validator_1 = require("../../common/validators/is-identifier-unique.validator");
const is_price_format_validator_1 = require("../../common/validators/is-price-format.validator");
let ProductssModule = class ProductssModule {
};
exports.ProductssModule = ProductssModule;
exports.ProductssModule = ProductssModule = __decorate([
    (0, common_1.Module)({
        controllers: [products_controller_1.ProductsController],
        providers: [
            prisma_service_1.PrismaService,
            products_service_1.ProductService,
            products_repository_1.ProductRepositoryService,
            is_identifier_unique_validator_1.IsIdentifierUnique,
            is_price_format_validator_1.IsOnPriceFormat,
        ],
        exports: [is_identifier_unique_validator_1.IsIdentifierUnique],
    })
], ProductssModule);
//# sourceMappingURL=products.module.js.map
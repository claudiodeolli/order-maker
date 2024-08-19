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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const create_product_dto_1 = require("../dtos/create-product.dto");
const update_product_status_bulk_dto_1 = require("../dtos/update-product-status-bulk.dto");
const products_service_1 = require("../services/products.service");
const update_product_status_dto_1 = require("../dtos/update-product-status.dto");
const update_product_dto_1 = require("../dtos/update-product.dto");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProductById(id) {
        return this.productService.product({ id });
    }
    async getProducts(params) {
        const { take, skip, cursor, where, orderBy } = params;
        return this.productService.products({
            skip: skip ? Number(skip) : 0,
            take: take ? Number(take) : 10,
            cursor,
            where,
            orderBy,
        });
    }
    async createProduct(data) {
        return this.productService.createProduct(data);
    }
    async updateProduct(id, data) {
        return this.productService.updateProduct({ where: { id }, data });
    }
    async updateProductsMass(dto) {
        return this.productService.updateProductsMass(dto);
    }
    async updateProductStatus(id, updateProductStatusDto) {
        return this.productService.updateProductStatus(id, updateProductStatusDto.status);
    }
    async getFilteredProducts(searchString) {
        return this.productService.products({
            where: {
                name: {
                    contains: searchString,
                },
            },
        });
    }
    async deleteProduct(id) {
        return this.productService.deleteProduct({ id });
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductById", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)('product'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Post)('products/update-mass'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_status_bulk_dto_1.UpdateProductsStatusDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProductsMass", null);
__decorate([
    (0, common_1.Post)('product/:id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_status_dto_1.UpdateProductStatusDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProductStatus", null);
__decorate([
    (0, common_1.Get)('filtered-products/:searchString'),
    __param(0, (0, common_1.Param)('searchString')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getFilteredProducts", null);
__decorate([
    (0, common_1.Delete)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map
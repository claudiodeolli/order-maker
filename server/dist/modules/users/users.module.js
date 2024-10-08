"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/database/prisma.service");
const users_controller_1 = require("./controller/users.controller");
const users_service_1 = require("./services/users.service");
const is_email_unique_validator_1 = require("../../common/validators/is-email-unique.validator");
const users_repository_1 = require("./repositories/users.repository");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [
            prisma_service_1.PrismaService,
            users_service_1.UsersService,
            users_repository_1.UsersRepositoryService,
            is_email_unique_validator_1.IsEmailUnique,
        ],
        exports: [is_email_unique_validator_1.IsEmailUnique],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map
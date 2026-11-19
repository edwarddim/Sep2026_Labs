"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const app_myservice_1 = require("./app.myservice");
const post_controller_1 = require("./posts/post.controller");
const post_controller_copy_1 = require("./posts/post.controller.copy");
const posts_service_1 = require("./posts/posts.service");
const typeorm_1 = require("@nestjs/typeorm");
const login_controller_1 = require("./login/login.controller");
const login_service_1 = require("./login/login.service");
const login_entity_1 = require("./login/login.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                autoLoadEntities: true,
                logging: true,
                entities: [login_entity_1.LoginEntity]
            }),
            typeorm_1.TypeOrmModule.forFeature([login_entity_1.LoginEntity])
        ],
        controllers: [app_controller_1.AppController, post_controller_1.PostController, post_controller_copy_1.PostControllerDto, login_controller_1.LoginController],
        providers: [app_service_1.AppService, app_myservice_1.MyService, posts_service_1.PostsService, login_service_1.LoginService]
    })
], AppModule);

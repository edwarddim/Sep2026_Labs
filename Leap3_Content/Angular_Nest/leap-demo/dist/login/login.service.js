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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const login_entity_1 = require("./login.entity");
let LoginService = class LoginService {
    //   private readonly users = new Map<string, StoredUser>([
    //     ["dave", { password: "mission123", refreshToken: null }],
    //   ]);
    constructor(repo) {
        this.repo = repo;
    }
    async login(username, password) {
        const user = await this.repo.findOneBy({ username });
        console.log('login service', user);
        if (!user || user.password !== password) {
            throw new common_1.UnauthorizedException("invalid username or password");
        }
        const accessToken = this.issueStubToken("access", username);
        // const refreshToken = this.issueStubToken("refresh", username);
        // user.refreshToken = refreshToken;
        return { message: 'Successful', token: accessToken };
    }
    //   refresh(refreshToken: string): { accessToken: string } {
    //     const entry = this.findByRefreshToken(refreshToken);
    //     if (!entry) {
    //       throw new UnauthorizedException("invalid or expired refresh token");
    //     }
    //     const [username] = entry;
    //     return { accessToken: this.issueStubToken("access", username) };
    //   }
    //   logout(refreshToken: string): { loggedOut: true } {
    //     const entry = this.findByRefreshToken(refreshToken);
    //     if (!entry) {
    //       throw new UnauthorizedException("invalid or expired refresh token");
    //     }
    //     const [, user] = entry;
    //     user.refreshToken = null;
    //     return { loggedOut: true };
    //   }
    //   private findByRefreshToken(refreshToken: string): [string, StoredUser] | undefined {
    //     return [...this.users.entries()].find(([, u]) => u.refreshToken === refreshToken);
    //   }
    issueStubToken(kind, username) {
        return `stub-${kind}-token-for-${username}-${Math.random().toString(36).slice(2, 10)}`;
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(login_entity_1.LoginEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoginService);

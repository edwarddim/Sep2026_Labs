import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginDto } from "./login.dto";
import { Repository } from "typeorm";
import { LoginEntity } from "./login.entity";

interface StoredUser {
  password: string;
  refreshToken: string | null;
}

@Injectable()
export class LoginService {
//   private readonly users = new Map<string, StoredUser>([
//     ["dave", { password: "mission123", refreshToken: null }],
//   ]);

  
constructor(
    @InjectRepository(LoginEntity) private readonly repo :Repository<LoginEntity>
){}

  async login(username: string, password: string): Promise<{ message: string;token:string }> {
    const user = await this.repo.findOneBy({username});
    console.log('login service', user);
    
    if (!user || user.password !== password) {
      throw new UnauthorizedException("invalid username or password");
    }
 const accessToken = this.issueStubToken("access", username);
    // const refreshToken = this.issueStubToken("refresh", username);
    // user.refreshToken = refreshToken;
    return { message:'Successful' , token:accessToken};
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

  private issueStubToken(kind: "access" | "refresh", username: string): string {
    return `stub-${kind}-token-for-${username}-${Math.random().toString(36).slice(2, 10)}`;
  }
}
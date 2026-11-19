    import { Body, Controller, Post, HttpCode } from "@nestjs/common";
    import { LoginService } from "./login.service";
    import { LoginDto } from "./login.dto";

    @Controller()
    export class LoginController{

        constructor(private readonly authService: LoginService) {}

        @Post("login")
        @HttpCode(200)
        async login(@Body() body: LoginDto) {
        // return body;
            const resp = await this.authService.login(body.username, body.password);
            return resp;
        }
    }
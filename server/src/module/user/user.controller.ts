import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { AuthService } from "../auth/auth.service";

@Controller()
export class UserController {
    constructor(
      private readonly userService: UserService,
      private readonly authService: AuthService
      ) {}

    /**
     * Register Controller.
     * @param {RegisterUserDto} credential
     */
    @Post("register")
    register (@Body() credential: RegisterUserDto) {
      this.userService.register(credential);
    }
  
    /**
     * Login Controller.
     * @param {LoginUserDto} credentials 
     */
    @Post()
    login (@Body() credentials: LoginUserDto) {
      this.userService.login(credentials.username, credentials.password);
    }


}
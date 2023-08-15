import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("")
export class UserController {
    constructor(private readonly userService: UserService) {}

    /**
     * Register Controller.
     * @param {RegisterUserDto} credential
     */
    @Post()
    Register (@Body() credential: RegisterUserDto) {
      this.userService.register(credential.username, credential.email, credential.password);
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
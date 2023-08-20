import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.stratagy";


@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: "SECRET",
        signOptions: {expiresIn: '24h'}
    })],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
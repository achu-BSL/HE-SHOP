import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { User } from "@prisma/client";


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService, 
        private readonly prisma: PrismaService
        ) {}

    async validateUser (username: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {username, password},
            select: {
                password: false
            }
        })

        if(user) return user;

        return null;
    }

    async login (user: Partial<User>) {
        const payload = {name: user.username, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload) 
        }
    }

}
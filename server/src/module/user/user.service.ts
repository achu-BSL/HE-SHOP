import { BadRequestException, Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "../../../src/prisma.service";


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  /**
   * Register new user
   * 
   * @param username 
   * @param email 
   * @param password 
   */
  async register (data: Prisma.UserCreateInput): Promise<User> {
    const isExist = await this.prisma.user.findFirst({
      where: {username: data.username}
    })
    if(isExist) throw new BadRequestException();
    const user = await this.prisma.user.create({data})
    return user;
  }

  /**
   * Verify and Login user by username and password.
   * 
   * @param username - The username for validate with password.
   * @param password - The user password for verify user.
   * @returns 
   */
  async login (username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {username, password}
    })
    if(!user) throw new BadRequestException();
    return user;
  }
}
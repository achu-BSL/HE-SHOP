import { Injectable } from "@nestjs/common";


@Injectable()
export class UserService {

  /**
   * Register new user
   * 
   * @param username 
   * @param email 
   * @param password 
   */
  register (username: string, email: string, password: string) {
    //? Create user Logic
    return ''
  }

  /**
   * Verify and Login user by username and password.
   * 
   * @param username - The username for validate with password.
   * @param password - The user password for verify user.
   * @returns 
   */
  login (username: string, password: string) {
    return {username, password};
  }
}
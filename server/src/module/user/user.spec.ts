import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { PrismaService } from "../../../src/prisma.service";


describe("UserController", ()=> {
    let userController: UserController;

    const mockUserService = {
        register: jest.fn((dto: RegisterUserDto)=> {
            console.log("Hello from mock register");
            return {
                id: Date.now().toString(),
                ...dto
            };
        })
    }


    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService, PrismaService]
        })
        .overrideProvider(UserService)
        .useValue(mockUserService)
        .compile();

        userController = app.get<UserController>(UserController);
    })


    it("Should return the user", () => {
        const user = {
            username: "Achu",
            email: "achu@test.info",
            password: "password"
        }
        expect(userController.register(user)).toEqual({
            id: expect.any(String),
            ...user
        })
    })
})
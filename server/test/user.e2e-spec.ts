import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from 'supertest';
import { UserModule } from "../src/module/user/user.module";
import { PrismaService } from "../src/prisma.service";

describe('UserController (e2e)', () => {
    let module: INestApplication;


    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [UserModule]
        }).compile();

        module = moduleFixture.createNestApplication();
        await module.init();
    })

    it('/register (POST)', () => {
        return request(module.getHttpServer())
        .post('/register')
        .expect(201)
    })
})
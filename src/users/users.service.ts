import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-dto';

@Injectable()
export class UsersService {

    private readonly users: CreateUserDto[] = [];

    async create(user: CreateUserDto) {
        this.users.push(user);
    }

    async get(): Promise<CreateUserDto[]> {
        return this.users;
    }

    async getByNickname(nickname: string): Promise<CreateUserDto> {
        return this.users.find((x) => x.Nickname === nickname);
    }
}

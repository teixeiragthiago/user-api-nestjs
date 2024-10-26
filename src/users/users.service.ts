import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-dto';

@Injectable()
export class UsersService {

    async create(user: CreateUserDto) {

    }

}

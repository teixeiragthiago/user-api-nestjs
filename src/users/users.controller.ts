import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() user: CreateUserDto) {
        this.usersService.create(user)
    }
    
}

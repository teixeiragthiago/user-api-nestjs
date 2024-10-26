import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() user: CreateUserDto) {
        this.usersService.create(user)
    }
    
    @Get()
    async get(): Promise<CreateUserDto[]> {
        return this.usersService.get()
    }

    @Get(':nickname')
    async getByNickname(@Param('nickname') nickname: string): Promise<CreateUserDto> {
        return this.usersService.getByNickname(nickname)
    }

    @Delete(':nickname')
    remove(@Param('nickname') nickname: string) {
        return "User with nickname #${nickname} removed successfully"
    }
}

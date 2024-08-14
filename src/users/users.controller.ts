import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./interface/user.interface";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async create(@Body() user: CreateUserDto): Promise<User> {
        return this.usersService.create(user)
    }

}

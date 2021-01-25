import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { UsersService } from './users.service';

@UseGuards(AuthGuard(), AdminGuard)
@Controller('users')
export class UsersController {
    constructor(private userServices: UsersService) {}

    @Get()
    @Roles("Admin")
    getAll(@Req() req) {
        console.log(req.user)
        return this.userServices.getAll();
    }
}

import { LoginDto, RegisterDto } from './dto/auth.dto';
import { Controller, Post, ClassSerializerInterceptor, UseInterceptors, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
    
    @Post('/login')
    @UseInterceptors(ClassSerializerInterceptor)
    async login(@Body() user: LoginDto) {
      return this.authService.login(user);
    }


    @Post('/register')
    @UseInterceptors(ClassSerializerInterceptor)
    async register(@Body() user: RegisterDto) {
      return this.authService.register(user);;
    }
}

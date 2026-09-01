import { Controller, UseGuards, Req, Post } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req()request: {user: unknown}) {
        return {usuario: request.user};
    }
}

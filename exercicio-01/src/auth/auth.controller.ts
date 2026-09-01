import { Controller, UseGuards, Req, Post, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { UsuarioAutenticado } from '../usuarios/usuarios.service';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { AuthService } from './auth.service';

type RequisicaoAutenticada = {
    user: UsuarioAutenticado
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req()request: RequisicaoAutenticada) {
        return this.authService.login(request.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('perfil')
    perfil(@Req() request: RequisicaoAutenticada) {
        return request.user;
    }
}

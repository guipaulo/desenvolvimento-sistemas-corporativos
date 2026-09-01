import { Injectable } from '@nestjs/common';
import { UsuariosService, UsuarioAutenticado } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import * as bycript from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService
    ) {}

    async validarUsuario(email:string, senha:string) {
        const usuario = this.usuariosService.buscarPorEmail(email);

        if(!usuario || !usuario.ativo) {
            return null;
        }

        const senhaValida = await bycript.compare(senha,usuario.senhaHash);

        if(!senhaValida) {
            return null;
        };

        const { senhaHash: _senhaHash, ...principal } = usuario;
        return principal;
    }

    login(usuario: UsuarioAutenticado) {
        const payload = {
            sub: usuario.id,
            email: usuario.email,
            papel: usuario.papel,
        };

        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}

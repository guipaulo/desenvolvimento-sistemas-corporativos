import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor';

export type Usuario = {
    id: number;
    nome: string;
    email: string;
    senhaHash: string;
    papel: Papel;
    ativo: boolean;
}

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
    private readonly usuarios: Usuario[] = [
    {
        id: 1,
        nome: 'Ana Lima',
        email: 'ana@empresa.com',
        senhaHash: '$2b$12$3wAL60wGo1h/eIvAU07D4efEEDV4kF.OIJjEFwiT541EzkixSPD3a',
        papel: 'gestor',
        ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash:
        '$2b$12$uByBHUCgyY5ofQFjuN0lfey7ZNz4hi8qy9svlkN08g4KQs1LShena',
      papel: 'solicitante',
      ativo: true,
    },
    ];

    buscarPorEmail(email:string) {
        return this.usuarios.find((usuario) => usuario.email === email);
    }
}

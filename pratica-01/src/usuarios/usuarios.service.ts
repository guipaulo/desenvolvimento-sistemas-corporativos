import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Ana Lima',
      email: 'ana@empresa.com',
      senhaHash:
        '$2b$12$.tXa1XI6bBVM91.zf6nuDuv5hKYDuIkH69yj.QBhJy.DoJYcce6Zy',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash:
        '$2b$12$.tXa1XI6bBVM91.zf6nuDuv5hKYDuIkH69yj.QBhJy.DoJYcce6Zy',
      papel: 'solicitante',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Carla Silva',
      email: 'carla@empresa.com',
      senhaHash: '$2b$12$tYUZZdi6SpES6Lu7lxLT7..uXUPCh6GIlIt956XrwJpcG5eH7ideS',
      papel: 'auditor',
      ativo: true,
    },
    {
      id: 4,
      nome: 'Paulo',
      email: 'paulo@empresa.com',
      senhaHash: '$2b$12$ZveAQLN1bDJhEfxq8Wf3..ZTclsGA9krUzRg1IlKNithDqqBr2cOq',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 5,
      nome: 'Araujo',
      email: 'araujo@empresa.com',
      senhaHash: '$2b$12$8UYjsj0b80mKfSeSw8Hx3.Ddvx36xp1bBR5lPnT7J7vw1FRHo2r6u',
      papel: 'auditor',
      ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
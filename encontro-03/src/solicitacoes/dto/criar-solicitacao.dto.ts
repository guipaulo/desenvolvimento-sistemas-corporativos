import { IsString, MaxLength, MinLength, IsIn } from 'class-validator';

export class CriarSolicitacaoDto {
  @IsString()
  @MinLength(5)
  @MaxLength(150)
  titulo!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(30)
  centroCusto!: string;

  @IsString()
  @IsIn(['normal', 'urgente'])
  prioridade!: 'normal' | 'urgente';
}
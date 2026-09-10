import { IsString, MaxLength, MinLength, IsIn } from 'class-validator';

export class FiltrarSolicitacoesDto {
  @IsString()
  titulo?: string;

  @IsString()
  centroCusto?: string;

  @IsString()
  @IsIn(['normal', 'urgente'])
  prioridade?: 'normal' | 'urgente';
}
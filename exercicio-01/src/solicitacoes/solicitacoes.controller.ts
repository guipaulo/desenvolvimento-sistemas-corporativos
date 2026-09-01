import { Controller, Get, Param, Patch, UseGuards, ParseIntPipe } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Roles } from 'src/auth/decorators/roles/roles.decorator';

@Controller('solicitacoes')
export class SolicitacoesController {
    constructor(private readonly solicitacoesService: SolicitacoesService) {}

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe)id: number) {
        return this.solicitacoesService.buscarPorId(id);
    }

    @UseGuards(RolesGuard, JwtAuthGuard)
    @Roles('gestor')
    @Patch(':id/aprovar')
    aprovar(@Param('id', ParseIntPipe) id: number) {
        return this.solicitacoesService.aprovar(id);
    }
}

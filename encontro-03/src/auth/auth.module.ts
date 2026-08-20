import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { PassportModule } from "@nestjs/passport";
import { UsuariosModule } from "../usuarios/usuarios.module";

@Module({
  imports: [UsuariosModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
})
export class AuthModule {}
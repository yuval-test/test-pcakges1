import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { YfghjModuleBase } from "./base/yfghj.module.base";
import { YfghjService } from "./yfghj.service";
import { YfghjController } from "./yfghj.controller";
import { YfghjResolver } from "./yfghj.resolver";

@Module({
  imports: [YfghjModuleBase, forwardRef(() => AuthModule)],
  controllers: [YfghjController],
  providers: [YfghjService, YfghjResolver],
  exports: [YfghjService],
})
export class YfghjModule {}

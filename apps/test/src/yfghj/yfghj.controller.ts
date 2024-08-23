import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { YfghjService } from "./yfghj.service";
import { YfghjControllerBase } from "./base/yfghj.controller.base";

@swagger.ApiTags("yfghjs")
@common.Controller("yfghjs")
export class YfghjController extends YfghjControllerBase {
  constructor(
    protected readonly service: YfghjService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

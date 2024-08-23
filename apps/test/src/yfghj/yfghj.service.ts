import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { YfghjServiceBase } from "./base/yfghj.service.base";

@Injectable()
export class YfghjService extends YfghjServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

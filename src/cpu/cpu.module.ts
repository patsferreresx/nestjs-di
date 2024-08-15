import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule], // 2 importa o powermodule
  providers: [CpuService]
})
export class CpuModule {}

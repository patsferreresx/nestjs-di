import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule],
  providers: [DiskService],
  exports: [DiskService] // 1 export o DiskService
})
export class DiskModule {}

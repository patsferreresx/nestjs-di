import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService] // 1 exporte para outro modulo ter acesso
})
export class PowerModule {}

import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  // 3 chame o powerService 
  constructor(private powerService: PowerService) { }

  // apenas um exemplo simples para utilizar o powerService
  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}

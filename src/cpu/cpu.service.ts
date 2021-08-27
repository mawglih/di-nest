import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
import { number } from 'yargs';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService){}
    compute(a: number, b: number) {
        console.log('Drawing 10 wats of power from Power service');
        this.powerService.supplyPower(10);
        return a + b;
    }
}

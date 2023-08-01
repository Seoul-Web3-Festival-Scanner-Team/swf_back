import { Body, Controller, Post } from '@nestjs/common';
import { ContractService } from './contract.service';

export interface ContractInfoRequest {
  key: string;
  detail: string;
  rentStart: string;
  rentEnd: string;
  contractDate: string;
  rentType: string;
}

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async registerContractInfo(@Body() contractInfoRequest: ContractInfoRequest) {
    const res = await this.contractService.registerContractInfo(
      contractInfoRequest,
    );
    return {
      code: 0,
      data: {
        tx: res,
      },
    };
  }
}

import { Body, Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { ContractInfoRequest } from './contract.controller';
import { JEONSE_CONTRACT_ABI } from './contract.abi';

@Injectable()
export class ContractService {
  private readonly _jeonseContract: any;

  constructor() {
    const provider = new ethers.JsonRpcProvider(
      process.env.CRONOS_TESTNET_NODE_URI,
    );
    const wallet = new ethers.Wallet(
      process.env.SIGNER_WALLET_PRIVATE_KEY,
      provider,
    );
    this._jeonseContract = new ethers.Contract(
      process.env.CRONOS_JEONSE_CONTRACT_ADDRESS,
      JEONSE_CONTRACT_ABI,
      wallet,
    );
  }

  async registerContractInfo(
    @Body() contractInfoRequest: ContractInfoRequest,
  ): Promise<string> {
    try {
      const res = await this._jeonseContract.registerData(
        contractInfoRequest.key,
        contractInfoRequest.detail,
        contractInfoRequest.rentStart,
        contractInfoRequest.rentEnd,
        contractInfoRequest.contractDate,
        contractInfoRequest.rentType,
      );
      return res.hash;
    } catch (error) {
      console.error('ERROR: ', error);
      throw error;
    }
  }
}

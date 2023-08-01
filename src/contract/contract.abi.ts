export const JEONSE_CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'datas',
    outputs: [
      {
        internalType: 'string',
        name: 'detail',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'rentType',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'rentStart',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rentEnd',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'contractDate',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_key',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_detail',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_rentStart',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_rentEnd',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_contractDate',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_rentType',
        type: 'uint8',
      },
    ],
    name: 'registerData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'total',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

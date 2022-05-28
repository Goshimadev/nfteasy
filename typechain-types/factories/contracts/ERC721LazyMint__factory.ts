/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721LazyMint,
  ERC721LazyMintInterface,
} from "../../contracts/ERC721LazyMint";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620022a6380380620022a683398101604081905262000034916200028e565b8151829082906200004d90600090602085019062000131565b5080516200006390600190602084019062000131565b5062000075915060009050336200007d565b50506200034b565b6200008982826200008d565b5050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff16620000895760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055620000ed3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b8280546200013f90620002f8565b90600052602060002090601f016020900481019282620001635760008555620001ae565b82601f106200017e57805160ff1916838001178555620001ae565b82800160010185558215620001ae579182015b82811115620001ae57825182559160200191906001019062000191565b50620001bc929150620001c0565b5090565b5b80821115620001bc5760008155600101620001c1565b600082601f830112620001e957600080fd5b81516001600160401b038082111562000206576200020662000335565b604051601f8301601f19908116603f0116810190828211818310171562000231576200023162000335565b816040528381526020925086838588010111156200024e57600080fd5b600091505b8382101562000272578582018301518183018401529082019062000253565b83821115620002845760008385830101525b9695505050505050565b60008060408385031215620002a257600080fd5b82516001600160401b0380821115620002ba57600080fd5b620002c886838701620001d7565b93506020850151915080821115620002df57600080fd5b50620002ee85828601620001d7565b9150509250929050565b600181811c908216806200030d57607f821691505b602082108114156200032f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611f4b806200035b6000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636352211e116100b8578063a22cb4651161007c578063a22cb46514610292578063b88d4fde146102a5578063c87b56dd146102b8578063d5391393146102cb578063d547741f146102f2578063e985e9c51461030557600080fd5b80636352211e1461024957806370a082311461025c57806391d148541461026f57806395d89b4114610282578063a217fddf1461028a57600080fd5b806323b872dd116100ff57806323b872dd146101cc578063248a9ca3146101df5780632f2ff15d1461021057806336568abe1461022357806342842e0e1461023657600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806310badf4e146101b9575b600080fd5b61014f61014a366004611b85565b610341565b60405190151581526020015b60405180910390f35b61016c610352565b60405161015b9190611ccc565b61018c610187366004611b49565b6103e4565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611a98565b61047e565b005b6101b76101c7366004611ac2565b610594565b6101b76101da366004611944565b61062d565b6102026101ed366004611b49565b60009081526006602052604090206001015490565b60405190815260200161015b565b6101b761021e366004611b62565b61065e565b6101b7610231366004611b62565b610684565b6101b7610244366004611944565b610702565b61018c610257366004611b49565b61071d565b61020261026a3660046118f6565b610794565b61014f61027d366004611b62565b61081b565b61016c610846565b610202600081565b6101b76102a0366004611a5c565b610855565b6101b76102b3366004611980565b610860565b61016c6102c6366004611b49565b610892565b6102027f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101b7610300366004611b62565b61097a565b61014f610313366004611911565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600061034c826109a0565b92915050565b60606000805461036190611e27565b80601f016020809104026020016040519081016040528092919081815260200182805461038d90611e27565b80156103da5780601f106103af576101008083540402835291602001916103da565b820191906000526020600020905b8154815290600101906020018083116103bd57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104625760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104898261071d565b9050806001600160a01b0316836001600160a01b031614156104f75760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610459565b336001600160a01b038216148061051357506105138133610313565b6105855760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610459565b61058f83836109c5565b505050565b6105dd6105a18585610a33565b83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ac692505050565b61061d5760405162461bcd60e51b8152602060048201526011602482015270496e76616c6964207369676e617475726560781b6044820152606401610459565b6106278484610af6565b50505050565b6106373382610b10565b6106535760405162461bcd60e51b815260040161045990611d31565b61058f838383610c07565b60008281526006602052604090206001015461067a8133610da3565b61058f8383610e07565b6001600160a01b03811633146106f45760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610459565b6106fe8282610e8d565b5050565b61058f83838360405180602001604052806000815250610860565b6000818152600260205260408120546001600160a01b03168061034c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610459565b60006001600160a01b0382166107ff5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610459565b506001600160a01b031660009081526003602052604090205490565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60606001805461036190611e27565b6106fe338383610ef4565b61086a3383610b10565b6108865760405162461bcd60e51b815260040161045990611d31565b61062784848484610fc3565b6000818152600260205260409020546060906001600160a01b03166109115760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610459565b600061092860408051602081019091526000815290565b905060008151116109485760405180602001604052806000815250610973565b8061095284610ff6565b604051602001610963929190611beb565b6040516020818303038152906040525b9392505050565b6000828152600660205260409020600101546109968133610da3565b61058f8383610e8d565b60006001600160e01b03198216637965db0b60e01b148061034c575061034c826110f4565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109fa8261071d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006109738284604051602001610a6692919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b60006109737f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a661027d8585611144565b6106fe828260405180602001604052806000815250611168565b6000818152600260205260408120546001600160a01b0316610b895760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610459565b6000610b948361071d565b9050806001600160a01b0316846001600160a01b03161480610bcf5750836001600160a01b0316610bc4846103e4565b6001600160a01b0316145b80610bff57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610c1a8261071d565b6001600160a01b031614610c7e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610459565b6001600160a01b038216610ce05760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610459565b610ceb6000826109c5565b6001600160a01b0383166000908152600360205260408120805460019290610d14908490611dcd565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d42908490611d82565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610dad828261081b565b6106fe57610dc5816001600160a01b0316601461119b565b610dd083602061119b565b604051602001610de1929190611c1a565b60408051601f198184030181529082905262461bcd60e51b825261045991600401611ccc565b610e11828261081b565b6106fe5760008281526006602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610e493390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e97828261081b565b156106fe5760008281526006602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b816001600160a01b0316836001600160a01b03161415610f565760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610459565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610fce848484610c07565b610fda84848484611337565b6106275760405162461bcd60e51b815260040161045990611cdf565b60608161101a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611044578061102e81611e62565b915061103d9050600a83611d9a565b915061101e565b60008167ffffffffffffffff81111561105f5761105f611ee9565b6040519080825280601f01601f191660200182016040528015611089576020820181803683370190505b5090505b8415610bff5761109e600183611dcd565b91506110ab600a86611e7d565b6110b6906030611d82565b60f81b8183815181106110cb576110cb611ed3565b60200101906001600160f81b031916908160001a9053506110ed600a86611d9a565b945061108d565b60006001600160e01b031982166380ac58cd60e01b148061112557506001600160e01b03198216635b5e139f60e01b145b8061034c57506301ffc9a760e01b6001600160e01b031983161461034c565b60008060006111538585611444565b91509150611160816114b4565b509392505050565b6111728383611672565b61117f6000848484611337565b61058f5760405162461bcd60e51b815260040161045990611cdf565b606060006111aa836002611dae565b6111b5906002611d82565b67ffffffffffffffff8111156111cd576111cd611ee9565b6040519080825280601f01601f1916602001820160405280156111f7576020820181803683370190505b509050600360fc1b8160008151811061121257611212611ed3565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061124157611241611ed3565b60200101906001600160f81b031916908160001a9053506000611265846002611dae565b611270906001611d82565b90505b60018111156112e8576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106112a4576112a4611ed3565b1a60f81b8282815181106112ba576112ba611ed3565b60200101906001600160f81b031916908160001a90535060049490941c936112e181611e10565b9050611273565b5083156109735760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610459565b60006001600160a01b0384163b1561143957604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061137b903390899088908890600401611c8f565b602060405180830381600087803b15801561139557600080fd5b505af19250505080156113c5575060408051601f3d908101601f191682019092526113c291810190611ba2565b60015b61141f573d8080156113f3576040519150601f19603f3d011682016040523d82523d6000602084013e6113f8565b606091505b5080516114175760405162461bcd60e51b815260040161045990611cdf565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bff565b506001949350505050565b60008082516041141561147b5760208301516040840151606085015160001a61146f878285856117b4565b945094505050506114ad565b8251604014156114a5576020830151604084015161149a8683836118a1565b9350935050506114ad565b506000905060025b9250929050565b60008160048111156114c8576114c8611ebd565b14156114d15750565b60018160048111156114e5576114e5611ebd565b14156115335760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610459565b600281600481111561154757611547611ebd565b14156115955760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610459565b60038160048111156115a9576115a9611ebd565b14156116025760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610459565b600481600481111561161657611616611ebd565b141561166f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610459565b50565b6001600160a01b0382166116c85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610459565b6000818152600260205260409020546001600160a01b03161561172d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610459565b6001600160a01b0382166000908152600360205260408120805460019290611756908490611d82565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156117eb5750600090506003611898565b8460ff16601b1415801561180357508460ff16601c14155b156118145750600090506004611898565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611868573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661189157600060019250925050611898565b9150600090505b94509492505050565b6000806001600160ff1b038316816118be60ff86901c601b611d82565b90506118cc878288856117b4565b935093505050935093915050565b80356001600160a01b03811681146118f157600080fd5b919050565b60006020828403121561190857600080fd5b610973826118da565b6000806040838503121561192457600080fd5b61192d836118da565b915061193b602084016118da565b90509250929050565b60008060006060848603121561195957600080fd5b611962846118da565b9250611970602085016118da565b9150604084013590509250925092565b6000806000806080858703121561199657600080fd5b61199f856118da565b93506119ad602086016118da565b925060408501359150606085013567ffffffffffffffff808211156119d157600080fd5b818701915087601f8301126119e557600080fd5b8135818111156119f7576119f7611ee9565b604051601f8201601f19908116603f01168101908382118183101715611a1f57611a1f611ee9565b816040528281528a6020848701011115611a3857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611a6f57600080fd5b611a78836118da565b915060208301358015158114611a8d57600080fd5b809150509250929050565b60008060408385031215611aab57600080fd5b611ab4836118da565b946020939093013593505050565b60008060008060608587031215611ad857600080fd5b611ae1856118da565b935060208501359250604085013567ffffffffffffffff80821115611b0557600080fd5b818701915087601f830112611b1957600080fd5b813581811115611b2857600080fd5b886020828501011115611b3a57600080fd5b95989497505060200194505050565b600060208284031215611b5b57600080fd5b5035919050565b60008060408385031215611b7557600080fd5b8235915061193b602084016118da565b600060208284031215611b9757600080fd5b813561097381611eff565b600060208284031215611bb457600080fd5b815161097381611eff565b60008151808452611bd7816020860160208601611de4565b601f01601f19169290920160200192915050565b60008351611bfd818460208801611de4565b835190830190611c11818360208801611de4565b01949350505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611c52816017850160208801611de4565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611c83816028840160208801611de4565b01602801949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611cc290830184611bbf565b9695505050505050565b6020815260006109736020830184611bbf565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611d9557611d95611e91565b500190565b600082611da957611da9611ea7565b500490565b6000816000190483118215151615611dc857611dc8611e91565b500290565b600082821015611ddf57611ddf611e91565b500390565b60005b83811015611dff578181015183820152602001611de7565b838111156106275750506000910152565b600081611e1f57611e1f611e91565b506000190190565b600181811c90821680611e3b57607f821691505b60208210811415611e5c57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611e7657611e76611e91565b5060010190565b600082611e8c57611e8c611ea7565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461166f57600080fdfea2646970667358221220f4ca214666b0268f38f292febfb8e063a20c624b3956263dec0db24fffc1ba2364736f6c63430008060033";

type ERC721LazyMintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721LazyMintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721LazyMint__factory extends ContractFactory {
  constructor(...args: ERC721LazyMintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721LazyMint> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721LazyMint>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721LazyMint {
    return super.attach(address) as ERC721LazyMint;
  }
  override connect(signer: Signer): ERC721LazyMint__factory {
    return super.connect(signer) as ERC721LazyMint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721LazyMintInterface {
    return new utils.Interface(_abi) as ERC721LazyMintInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721LazyMint {
    return new Contract(address, _abi, signerOrProvider) as ERC721LazyMint;
  }
}
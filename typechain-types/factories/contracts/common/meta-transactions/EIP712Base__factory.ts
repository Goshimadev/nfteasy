/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EIP712Base,
  EIP712BaseInterface,
} from "../../../../contracts/common/meta-transactions/EIP712Base";

const _abi = [
  {
    inputs: [],
    name: "ERC712_VERSION",
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
    inputs: [],
    name: "getChainId",
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
    inputs: [],
    name: "getDomainSeperator",
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
];

const _bytecode =
  "0x608060405260008060006101000a81548160ff02191690831515021790555034801561002a57600080fd5b506102498061003a6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f7e59701461004657806320379ee5146100645780633408e47014610082575b600080fd5b61004e6100a0565b60405161005b9190610162565b60405180910390f35b61006c6100d9565b6040516100799190610147565b60405180910390f35b61008a6100e3565b6040516100979190610184565b60405180910390f35b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b6000600154905090565b6000804690508091505090565b6100f9816101bb565b82525050565b600061010a8261019f565b61011481856101aa565b93506101248185602086016101cf565b61012d81610202565b840191505092915050565b610141816101c5565b82525050565b600060208201905061015c60008301846100f0565b92915050565b6000602082019050818103600083015261017c81846100ff565b905092915050565b60006020820190506101996000830184610138565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b6000819050919050565b60005b838110156101ed5780820151818401526020810190506101d2565b838111156101fc576000848401525b50505050565b6000601f19601f830116905091905056fea2646970667358221220821713b1c1788f2e8337cfb44a05869bfab748adcd932b66b25f5a33ac5bc33364736f6c63430008060033";

type EIP712BaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP712BaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP712Base__factory extends ContractFactory {
  constructor(...args: EIP712BaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EIP712Base> {
    return super.deploy(overrides || {}) as Promise<EIP712Base>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EIP712Base {
    return super.attach(address) as EIP712Base;
  }
  override connect(signer: Signer): EIP712Base__factory {
    return super.connect(signer) as EIP712Base__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712BaseInterface {
    return new utils.Interface(_abi) as EIP712BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP712Base {
    return new Contract(address, _abi, signerOrProvider) as EIP712Base;
  }
}

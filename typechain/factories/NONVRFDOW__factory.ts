/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NONVRFDOW, NONVRFDOWInterface } from "../NONVRFDOW";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyClaimedFreeTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "Enter4Numbers",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NumbersMustBeUnique",
    type: "error",
  },
  {
    inputs: [],
    name: "PlayerHasNotPlayed",
    type: "error",
  },
  {
    inputs: [],
    name: "YouLost",
    type: "error",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "bytes32[]",
        name: "compNum",
        type: "bytes32[]",
      },
    ],
    name: "PlayerNumbers",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "compNumber",
        type: "uint256[]",
      },
    ],
    name: "compNumber",
    type: "event",
  },
  {
    inputs: [],
    name: "LeaderBoard",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "playerAddress",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "wins",
            type: "uint96",
          },
        ],
        internalType: "struct NON_VRF_DOW.PlayerScore[]",
        name: "leaderBoard",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "PlayerStruct",
    outputs: [
      {
        internalType: "uint256",
        name: "gamesPlayed",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "gamesLost",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "currentWinStreak",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "maxWinStreak",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "gamesWon",
        type: "uint64",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "checkStreak",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "gamesPlayed",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "gamesLost",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "currentWinStreak",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxWinStreak",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "gamesWon",
            type: "uint64",
          },
        ],
        internalType: "struct NON_VRF_DOW.Player",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "trial",
        type: "uint8",
      },
    ],
    name: "checkTrials",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimFreeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "compNum",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "randNum",
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
    name: "setTNotoUseVRF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setToUseVRF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startGame",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "playerNumbers",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferToCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600f81526020017f44656164206f7220576f756e64656400000000000000000000000000000000008152506040518060400160405280600381526020017f444f570000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620000f9565b508060049080519060200190620000af929190620000f9565b50505033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200020e565b8280546200010790620001a9565b90600052602060002090601f0160209004810192826200012b576000855562000177565b82601f106200014657805160ff191683800117855562000177565b8280016001018555821562000177579182015b828111156200017657825182559160200191906001019062000159565b5b5090506200018691906200018a565b5090565b5b80821115620001a55760008160009055506001016200018b565b5090565b60006002820490506001821680620001c257607f821691505b60208210811415620001d957620001d8620001df565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b613354806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806373fde543116100b8578063bcf50e8b1161007c578063bcf50e8b146103b9578063d65ab5f2146103c3578063dd62ed3e146103e1578063e297038814610411578063f14d21811461042d578063f52a6a411461043757610142565b806373fde543146102ff57806395d89b411461031d5780639ac8c0ef1461033b578063a457c2d714610359578063a9059cbb1461038957610142565b806323b872dd1161010a57806323b872dd146101ff578063313ce5671461022f578063395093511461024d57806355cd16e21461027d5780635c53d3341461029b57806370a08231146102cf57610142565b806306fdde0314610147578063095ea7b3146101655780630b4dab98146101955780630de079b1146101b157806318160ddd146101e1575b600080fd5b61014f610441565b60405161015c91906129eb565b60405180910390f35b61017f600480360381019061017a91906124cb565b6104d3565b60405161018c91906129d0565b60405180910390f35b6101af60048036038101906101aa919061250b565b6104f6565b005b6101cb60048036038101906101c6919061250b565b6105ac565b6040516101d89190612b68565b60405180910390f35b6101e96105d0565b6040516101f69190612b68565b60405180910390f35b61021960048036038101906102149190612478565b6105da565b60405161022691906129d0565b60405180910390f35b610237610609565b6040516102449190612bd6565b60405180910390f35b610267600480360381019061026291906124cb565b610612565b60405161027491906129d0565b60405180910390f35b6102856106bc565b6040516102929190612b4d565b60405180910390f35b6102b560048036038101906102b0919061240b565b6107eb565b6040516102c6959493929190612b83565b60405180910390f35b6102e960048036038101906102e4919061240b565b610871565b6040516102f69190612b68565b60405180910390f35b6103076108b9565b60405161031491906129ae565b60405180910390f35b610325610ab3565b60405161033291906129eb565b60405180910390f35b610343610b45565b6040516103509190612b68565b60405180910390f35b610373600480360381019061036e91906124cb565b610b4b565b60405161038091906129d0565b60405180910390f35b6103a3600480360381019061039e91906124cb565b610c35565b6040516103b091906129d0565b60405180910390f35b6103c1610c58565b005b6103cb610c75565b6040516103d8919061298c565b60405180910390f35b6103fb60048036038101906103f69190612438565b6110d3565b6040516104089190612b68565b60405180910390f35b61042b60048036038101906104269190612538565b61115a565b005b6104356118d5565b005b61043f6119c6565b005b60606003805461045090612dc7565b80601f016020809104026020016040519081016040528092919081815260200182805461047c90612dc7565b80156104c95780601f1061049e576101008083540402835291602001916104c9565b820191906000526020600020905b8154815290600101906020018083116104ac57829003601f168201915b5050505050905090565b6000806104de6119e3565b90506104eb8185856119eb565b600191505092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461057d576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a9600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682611bb6565b50565b600881815481106105bc57600080fd5b906000526020600020016000915090505481565b6000600254905090565b6000806105e56119e3565b90506105f2858285611d16565b6105fd858585611da2565b60019150509392505050565b60006012905090565b60008061061d6119e3565b90506106b1818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546106ac9190612c7f565b6119eb565b600191505092915050565b6106c4612337565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050806040518060a0016040529081600082015481526020016001820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160089054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160109054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020016001820160189054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152505091505090565b600a6020528060005260406000206000915090508060000154908060010160009054906101000a900467ffffffffffffffff16908060010160089054906101000a900467ffffffffffffffff16908060010160109054906101000a900467ffffffffffffffff16908060010160189054906101000a900467ffffffffffffffff16905085565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060098054905067ffffffffffffffff8111156108da576108d9612fbd565b5b60405190808252806020026020018201604052801561091357816020015b61090061238e565b8152602001906001900390816108f85790505b50905060005b600980549050811015610aaf576000600a6000600984815481106109405761093f612f8e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600982815481106109bb576109ba612f8e565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383815181106109f9576109f8612f8e565b5b60200260200101516000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508060010160189054906101000a900467ffffffffffffffff1667ffffffffffffffff16838381518110610a6d57610a6c612f8e565b5b6020026020010151602001906bffffffffffffffffffffffff1690816bffffffffffffffffffffffff1681525050508080610aa790612df9565b915050610919565b5090565b606060048054610ac290612dc7565b80601f0160208091040260200160405190810160405280929190818152602001828054610aee90612dc7565b8015610b3b5780601f10610b1057610100808354040283529160200191610b3b565b820191906000526020600020905b815481529060010190602001808311610b1e57829003601f168201915b5050505050905090565b60065481565b600080610b566119e3565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610c1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1390612b0d565b60405180910390fd5b610c2982868684036119eb565b60019250505092915050565b600080610c406119e3565b9050610c4d818585611da2565b600191505092915050565b6000600760146101000a81548160ff021916908315150217905550565b6060600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610d84576001600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506009339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050674563918244f40000610dd933610871565b1015610e11576040517ff1b7e15e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e2333674563918244f40000612023565b600467ffffffffffffffff811115610e3e57610e3d612fbd565b5b604051908082528060200260200182016040528015610e6c5781602001602082028036833780820191505090505b5091505b60046008805490501015610e8b57610e866121fa565b610e70565b6008600081548110610ea057610e9f612f8e565b5b9060005260206000200154604051602001610ebb9190612934565b6040516020818303038152906040528051906020012082600081518110610ee557610ee4612f8e565b5b6020026020010181815250506008600181548110610f0657610f05612f8e565b5b9060005260206000200154604051602001610f219190612934565b6040516020818303038152906040528051906020012082600181518110610f4b57610f4a612f8e565b5b6020026020010181815250506008600281548110610f6c57610f6b612f8e565b5b9060005260206000200154604051602001610f879190612934565b6040516020818303038152906040528051906020012082600281518110610fb157610fb0612f8e565b5b6020026020010181815250506008600381548110610fd257610fd1612f8e565b5b9060005260206000200154604051602001610fed9190612934565b604051602081830303815290604052805190602001208260038151811061101757611016612f8e565b5b60200260200101818152505061102b61228d565b6001600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008360000154815260200190815260200160002060006101000a81548160ff0219169083151502179055507f2d420b6adc054c35e933874423a84e095ec2c4f2f7ac7b1f9781d6858a1b7be2826040516110c7919061298c565b60405180910390a15090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060001515600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008360000154815260200190815260200160002060009054906101000a900460ff161515141561123d576040517f1fcd583900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600001600081548092919061125290612df9565b919050555060018260ff1614156113195780600101600881819054906101000a900467ffffffffffffffff168092919061128b90612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff16809291906112da90612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050611314336801158e460913d00000611bb6565b611842565b60028260ff1614156113db5780600101600881819054906101000a900467ffffffffffffffff168092919061134d90612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff168092919061139c90612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550506113d6336801158e460913d00000611bb6565b611841565b60038260ff16141561149d5780600101600881819054906101000a900467ffffffffffffffff168092919061140f90612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff168092919061145e90612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050611498336801158e460913d00000611bb6565b611840565b60048260ff16141561155e5780600101600881819054906101000a900467ffffffffffffffff16809291906114d190612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff168092919061152090612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550506115593367a688906bd8b00000611bb6565b61183f565b60058260ff16141561161f5780600101600881819054906101000a900467ffffffffffffffff168092919061159290612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff16809291906115e190612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505061161a3367a688906bd8b00000611bb6565b61183e565b60068260ff1614156116e05780600101600881819054906101000a900467ffffffffffffffff168092919061165390612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff16809291906116a290612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550506116db33676124fee993bc0000611bb6565b61183d565b60078260ff1614156117a15780600101600881819054906101000a900467ffffffffffffffff168092919061171490612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505080600101601881819054906101000a900467ffffffffffffffff168092919061176390612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505061179c33676124fee993bc0000611bb6565b61183c565b60088260ff16141561183b5760008160010160086101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555080600101600081819054906101000a900467ffffffffffffffff168092919061180190612e42565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505061183a33676124fee993bc0000611bb6565b5b5b5b5b5b5b5b5b8060010160109054906101000a900467ffffffffffffffff1667ffffffffffffffff168160010160089054906101000a900467ffffffffffffffff1667ffffffffffffffff16106118d1578060010160089054906101000a900467ffffffffffffffff168160010160106101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505b5050565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611959576040517f53733ff700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506119c43368056bc75e2d63100000611bb6565b565b6001600760146101000a81548160ff021916908315150217905550565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a5290612aed565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ac290612a4d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051611ba99190612b68565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1d90612b2d565b60405180910390fd5b611c32600083836122cb565b8060026000828254611c449190612c7f565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611c999190612c7f565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611cfe9190612b68565b60405180910390a3611d12600083836122d0565b5050565b6000611d2284846110d3565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611d9c5781811015611d8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8590612a6d565b60405180910390fd5b611d9b84848484036119eb565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611e12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e0990612acd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e7990612a0d565b60405180910390fd5b611e8d8383836122cb565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611f13576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f0a90612a8d565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611fa69190612c7f565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161200a9190612b68565b60405180910390a361201d8484846122d0565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612093576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161208a90612aad565b60405180910390fd5b61209f826000836122cb565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612125576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161211c90612a2d565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461217c9190612cd5565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516121e19190612b68565b60405180910390a36121f5836000846122d0565b505050565b60006122046122d5565b90506000805b60088054905081101561225957826008828154811061222c5761222b612f8e565b5b906000526020600020015414156122465760019150612259565b808061225190612df9565b91505061220a565b50806122895760088290806001815401808255809150506001900390600052602060002001600090919091909150555b5050565b5b600060088054905011156122c95760088054806122ae576122ad612f5f565b5b6001900381819060005260206000200160009055905561228e565b565b505050565b505050565b600080600a90506001600560008282546122ef9190612c7f565b9250508190555080426005543360405160200161230e9392919061294f565b6040516020818303038152906040528051906020012060001c6123319190612ea1565b91505090565b6040518060a0016040528060008152602001600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600067ffffffffffffffff168152602001600067ffffffffffffffff1681525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160006bffffffffffffffffffffffff1681525090565b6000813590506123db816132d9565b92915050565b6000813590506123f0816132f0565b92915050565b60008135905061240581613307565b92915050565b60006020828403121561242157612420612fec565b5b600061242f848285016123cc565b91505092915050565b6000806040838503121561244f5761244e612fec565b5b600061245d858286016123cc565b925050602061246e858286016123cc565b9150509250929050565b60008060006060848603121561249157612490612fec565b5b600061249f868287016123cc565b93505060206124b0868287016123cc565b92505060406124c1868287016123e1565b9150509250925092565b600080604083850312156124e2576124e1612fec565b5b60006124f0858286016123cc565b9250506020612501858286016123e1565b9150509250929050565b60006020828403121561252157612520612fec565b5b600061252f848285016123e1565b91505092915050565b60006020828403121561254e5761254d612fec565b5b600061255c848285016123f6565b91505092915050565b60006125718383612686565b60208301905092915050565b6000612589838361282c565b60408301905092915050565b61259e81612d09565b82525050565b6125b56125b082612d09565b612e73565b82525050565b60006125c682612c11565b6125d08185612c4c565b93506125db83612bf1565b8060005b8381101561260c5781516125f38882612565565b97506125fe83612c32565b9250506001810190506125df565b5085935050505092915050565b600061262482612c1c565b61262e8185612c5d565b935061263983612c01565b8060005b8381101561266a578151612651888261257d565b975061265c83612c3f565b92505060018101905061263d565b5085935050505092915050565b61268081612d1b565b82525050565b61268f81612d27565b82525050565b60006126a082612c27565b6126aa8185612c6e565b93506126ba818560208601612d94565b6126c381612ff1565b840191505092915050565b60006126db602383612c6e565b91506126e68261300f565b604082019050919050565b60006126fe602283612c6e565b91506127098261305e565b604082019050919050565b6000612721602283612c6e565b915061272c826130ad565b604082019050919050565b6000612744601d83612c6e565b915061274f826130fc565b602082019050919050565b6000612767602683612c6e565b915061277282613125565b604082019050919050565b600061278a602183612c6e565b915061279582613174565b604082019050919050565b60006127ad602583612c6e565b91506127b8826131c3565b604082019050919050565b60006127d0602483612c6e565b91506127db82613212565b604082019050919050565b60006127f3602583612c6e565b91506127fe82613261565b604082019050919050565b6000612816601f83612c6e565b9150612821826132b0565b602082019050919050565b6040820160008201516128426000850182612595565b5060208201516128556020850182612925565b50505050565b60a08201600082015161287160008501826128c3565b50602082015161288460208501826128f8565b50604082015161289760408501826128f8565b5060608201516128aa60608501826128f8565b5060808201516128bd60808501826128f8565b50505050565b6128cc81612d51565b82525050565b6128db81612d51565b82525050565b6128f26128ed82612d51565b612e97565b82525050565b61290181612d5b565b82525050565b61291081612d5b565b82525050565b61291f81612d6f565b82525050565b61292e81612d7c565b82525050565b600061294082846128e1565b60208201915081905092915050565b600061295b82866128e1565b60208201915061296b82856128e1565b60208201915061297b82846125a4565b601482019150819050949350505050565b600060208201905081810360008301526129a681846125bb565b905092915050565b600060208201905081810360008301526129c88184612619565b905092915050565b60006020820190506129e56000830184612677565b92915050565b60006020820190508181036000830152612a058184612695565b905092915050565b60006020820190508181036000830152612a26816126ce565b9050919050565b60006020820190508181036000830152612a46816126f1565b9050919050565b60006020820190508181036000830152612a6681612714565b9050919050565b60006020820190508181036000830152612a8681612737565b9050919050565b60006020820190508181036000830152612aa68161275a565b9050919050565b60006020820190508181036000830152612ac68161277d565b9050919050565b60006020820190508181036000830152612ae6816127a0565b9050919050565b60006020820190508181036000830152612b06816127c3565b9050919050565b60006020820190508181036000830152612b26816127e6565b9050919050565b60006020820190508181036000830152612b4681612809565b9050919050565b600060a082019050612b62600083018461285b565b92915050565b6000602082019050612b7d60008301846128d2565b92915050565b600060a082019050612b9860008301886128d2565b612ba56020830187612907565b612bb26040830186612907565b612bbf6060830185612907565b612bcc6080830184612907565b9695505050505050565b6000602082019050612beb6000830184612916565b92915050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000612c8a82612d51565b9150612c9583612d51565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612cca57612cc9612ed2565b5b828201905092915050565b6000612ce082612d51565b9150612ceb83612d51565b925082821015612cfe57612cfd612ed2565b5b828203905092915050565b6000612d1482612d31565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600060ff82169050919050565b60006bffffffffffffffffffffffff82169050919050565b60005b83811015612db2578082015181840152602081019050612d97565b83811115612dc1576000848401525b50505050565b60006002820490506001821680612ddf57607f821691505b60208210811415612df357612df2612f30565b5b50919050565b6000612e0482612d51565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e3757612e36612ed2565b5b600182019050919050565b6000612e4d82612d5b565b915067ffffffffffffffff821415612e6857612e67612ed2565b5b600182019050919050565b6000612e7e82612e85565b9050919050565b6000612e9082613002565b9050919050565b6000819050919050565b6000612eac82612d51565b9150612eb783612d51565b925082612ec757612ec6612f01565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6132e281612d09565b81146132ed57600080fd5b50565b6132f981612d51565b811461330457600080fd5b50565b61331081612d6f565b811461331b57600080fd5b5056fea264697066735822122029559aae04c36a760424caef81cacc47216bb5719fc1e514071bec3c8161d8c264736f6c63430008070033";

export class NONVRFDOW__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NONVRFDOW> {
    return super.deploy(overrides || {}) as Promise<NONVRFDOW>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NONVRFDOW {
    return super.attach(address) as NONVRFDOW;
  }
  connect(signer: Signer): NONVRFDOW__factory {
    return super.connect(signer) as NONVRFDOW__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NONVRFDOWInterface {
    return new utils.Interface(_abi) as NONVRFDOWInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NONVRFDOW {
    return new Contract(address, _abi, signerOrProvider) as NONVRFDOW;
  }
}

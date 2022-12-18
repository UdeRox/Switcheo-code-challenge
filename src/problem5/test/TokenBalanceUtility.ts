import {  ethers } from "hardhat";
import { expect } from "chai";
// const { deployments } = require('hardhat');
// const Token = require('../path/to/Token.json');
// import { MyERC20Token } from "../typechain-types/contracts/MyERC20Token";
// const MyERC20Token = require('../artifacts/contracts/MyERC20Token.sol/MyERC20Token.json');

const ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_tokensAddresses",
        type: "address[]",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct TokenBalanceUtility.Results[]",
        name: "",
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
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "tokenBalance",
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
];
let TokenUtil, token, owner, add1, deployer: any, myERC20Token: any;

describe("TokeBalanceUtility", () => {
  beforeEach(async () => {
    TokenUtil = await ethers.getContractFactory("TokenBalanceUtility");
    token = await TokenUtil.deploy();
    [owner, add1, deployer] = await ethers.getSigners();
  });

  describe("getBalance", () => {
    it("Get Balances for given address with tokens", async () => {
      const balance = await deployer.getBalance();
      console.log("Deployer's amount : ", balance.toString());
    });
  });
});

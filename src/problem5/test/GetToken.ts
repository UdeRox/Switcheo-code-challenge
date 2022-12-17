const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "_tokensAddresses",
        "type": "address[]"
      }
    ],
    "name": "getBalances",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "internalType": "struct TokenBalanceUtility.TokenBalance[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_walletAddress",
        "type": "address"
      }
    ],
    "name": "tokenBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const { ethers } = require("ethers");

const ADDR = "0x8a791620dd6260079bf849dc5567adc3f2fdc318"; // your contract address
// const ABI = "";    // your contract ABI

const ADDRESS = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"; // some wallet address with token balance
const TOKENS = [
  "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6",
"0xa513e6e4b8f2a923d98304ec87f64353c4d5c853"];

// you can use your own RPC provider url (no need to deploy to mainnet)
const rpcURL = "http://127.0.0.1:8545";
// const provider = ethers.providers.getDefaultProvider();
const provider = new ethers.providers.JsonRpcProvider(rpcURL);
const testGetToken = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  // const balances = await contract.greet("Test Output");
  const balances = await contract.getBalances(ADDRESS, TOKENS);
  // console.log("Contract value: ", balances);
 
  //   const balances = await provider.getBalance(ADDR);
  //   console.log(`${ADDR} ${ethers.utils.formatEther(balances)}`);
  return balances;
};

testGetToken().then(console.log);

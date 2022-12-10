import { ethers } from "ethers";

const rpcURL = "https://bsc-dataseed.binance.org" 
const provider = new ethers.providers.JsonRpcProvider(rpcURL);
const walletAddresses = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const main = (): void => {
  walletAddresses.map(async (address) => {
    const balance = await provider.getBalance(address);
    console.log(`${address} ${ethers.utils.formatEther(balance)}`);
  });
};

main();

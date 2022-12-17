import { ethers } from "ethers";

const rpcURL = "http://127.0.0.1:8545" 
const provider = new ethers.providers.JsonRpcProvider(rpcURL);

const address = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'
const addressFrom = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
const main = async () =>{
    const balance = await provider.getBalance(address);
    console.log(`${address} ${ethers.utils.formatEther(balance)}`);
    console.log(`From Address : ${address} ${ethers.utils.formatEther(balance)}`);

}


main();
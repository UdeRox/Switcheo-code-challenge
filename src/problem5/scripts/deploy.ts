import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const Lock = await ethers.getContractFactory("Token");
  // const Lock = await ethers.getContractFactory("MyERC20Token");
  // const Lock = await ethers.getContractFactory("My2ERC20Token");
  const Lock = await ethers.getContractFactory("TokenBalanceUtility");
  // const lock = await Lock.deploy(unlockTim÷e, { value: lockedAmount });
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

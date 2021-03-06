import { ethers } from "hardhat";

async function main() {
  const Greeter = await ethers.getContractFactory("NON_VRF_DOW");
  const greeter = await Greeter.deploy();

  await greeter.deployed();

  console.log("DOW deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

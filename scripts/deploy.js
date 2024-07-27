const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello I'm Jeremy from Mekong Labs!!"]);
  await contract.waitForDeployment();
  console.log(`Jeremy contract deployed to ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

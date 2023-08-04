
const hre = require("hardhat");

async function main() {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

main().
  then(()=>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

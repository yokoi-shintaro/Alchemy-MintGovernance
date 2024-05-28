const { ethers } = require("hardhat");

async function main() {
  const [owner, otherAccount] = await ethers.getSigners();

  console.log('hoge1');

  const transactionCount = await owner.getTransactionCount();

  console.log('hoge2');

  // gets the address of the token before it is deployed
  const futureAddress = ethers.utils.getContractAddress({
    from: owner.address,
    nonce: transactionCount + 1
  });

  console.log('hoge3');

  const MyGovernor = await ethers.getContractFactory("MyGovernor");
  const governor = await MyGovernor.deploy(futureAddress);

  console.log('hoge4');

  const MyToken = await ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(governor.address);

  console.log(
    `Governor deployed to ${governor.address}`,
    `Token deployed to ${token.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

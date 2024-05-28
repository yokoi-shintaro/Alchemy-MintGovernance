const { ethers } = require("hardhat");

async function main() {
    // Hardhatのプロバイダとウォレットを取得
    const [deployer] = await ethers.getSigners();
  
    // ウォレットアドレスの表示
    console.log(`Address: ${deployer.address}`);
  
    // 残高の取得
    const balance = await deployer.getBalance();
    
    // 残高をETH形式にフォーマットして表示
    console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  
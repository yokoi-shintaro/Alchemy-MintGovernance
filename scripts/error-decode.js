const { ethers } = require("ethers");

async function decodeRawTransaction(rawTx) {
  try {
    // Remove the '0x' prefix if it exists
    if (rawTx.startsWith("0x")) {
      rawTx = rawTx.slice(2);
    }

    // Parse the transaction
    const tx = ethers.utils.parseTransaction(`0x${rawTx}`);

    console.log("Decoded Transaction:");
    console.log(`Nonce: ${tx.nonce}`);
    console.log(`Gas Price: ${ethers.utils.formatUnits(tx.gasPrice, 'gwei')} Gwei`);
    console.log(`Gas Limit: ${tx.gasLimit.toString()}`);
    console.log(`To: ${tx.to}`);
    console.log(`Value: ${ethers.utils.formatEther(tx.value)} ETH`);
    console.log(`Data: ${tx.data}`);
    console.log(`ChainId: ${tx.chainId}`);
    console.log(`From: ${tx.from}`);
    console.log(`r: ${tx.r}`);
    console.log(`s: ${tx.s}`);
    console.log(`v: ${tx.v}`);
    console.log(`Hash: ${tx.hash}`);
  } catch (error) {
    console.error("Failed to decode raw transaction:", error);
  }
}

const rawTx = "0x02f9733b83aa36a7808459682f0085021c8d418883543ff38080b972de6101606040523480156200001257600080fd5b50604051620072be380380620072be833981810160405281019062000038919062000ba1565b60048160018060006040518060400160405280600a81526020017f4d79476f7665726e6f72000000000000000000000000000000000000000000008152508062000087620001d160201b60201c565b60008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a7";

decodeRawTransaction(rawTx);

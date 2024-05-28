require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.ALCHEMY_RPC_URL_SEPOLIA,
      accounts: [process.env.SEPOLIA_TESTNET_PRIVATE_KEY]
    }
  },
};

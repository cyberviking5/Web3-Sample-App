require("@nomiclabs/hardhat-waffle")
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL =process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x"

module.exports = {
  solidity: "0.8.19",
  networks:
  {
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/xtBUsnwWyIhUdX61zMVw2sESzqSrJpiB',
      accounts:['61c7566b5f4a2ed1170c55ac78a50ec133ebaa0f1f71c5ce0b505f8fc013dba7'],
    }
  }
};

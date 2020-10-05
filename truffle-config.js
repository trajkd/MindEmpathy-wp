require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`)
      },
      gasPrice: 100000000000,
      network_id: 4
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 5
    }
  }
};

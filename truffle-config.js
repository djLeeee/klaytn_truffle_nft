const HDWalletProvider = require('truffle-hdwallet-provider-klaytn');
const privateKey = '개인키를입력하세요';

module.exports = {
   networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    testnet: {
     provider: () => new HDWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651"),
     network_id: '1001', //Klaytn baobab testnet's network id
     gas: '8500000',
     gasPrice: null
   },
   mainnet: {
     provider: () => new HDWalletProvider(privateKey, "https://your.cypress.en.url:8651"),
     network_id: '8217', //Klaytn mainnet's network id
     gas: '8500000',
     gasPrice: null
   }
 },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};

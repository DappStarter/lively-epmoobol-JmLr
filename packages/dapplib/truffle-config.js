require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name razor script pupil hunt beach swallow giant'; 
let testAccounts = [
"0x6338dcd243ee66a3d98641172b9982b0b15c15a8454a43ff1e4e87a0ab70449c",
"0x91babc84be6a038b2b9d5ace43ecdfc8091531fde6a41661f97cacf80bb38d18",
"0x09235f748694d85dbd894dd893778999f77bf613f303bc3003f09d05790bbd0b",
"0xc9221ff79658a9256f14dae879c69b086c0ea639622376590c5444f496b258fc",
"0xeff5d74f0d418dd0ff035f41685978ba4668b8d5972f194b8254adb1db9f8794",
"0x19836bad16cc3b9e03c2435f67be129193281a37f21b386922f92fc9b1139e9d",
"0x3e09ff661aa8ff7f0009d0d1bdfb4db96cff229474c6c0904a070603e02db295",
"0xca5b847f1ab3da6cb6e46130ca86d08564b2146a71084df5e118436b4985ecaa",
"0x748f8488c9a340897cddf61e75ec22232fabbe120df8ed907c94e54287e4280d",
"0xba3d2ce4d736e8ee67cbebdc3f685bf183aed82662626609fe1753e4270cc700"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


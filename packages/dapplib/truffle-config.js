require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note spike proof grace lock swap giggle'; 
let testAccounts = [
"0xc7f04bad1e212489a0e7808d63cfdb2dc4304c57931c596dc58a27a2b4ac205c",
"0xf377e1ae62ce2f4b5bfb633f2a8d681be021e5b1e8fda17adf304f594cbd9d6f",
"0x7c53465e7c9c85634f9dcce2e4b851a6f518c64215932cdd05f31fe416630055",
"0xfe1223cd0c6225bc3c041245090534db9ef41c03e194d8ccc91ece8d9c04cb91",
"0x04dbac0313ca43dd5cc8b0c0d9707554077cc42e9015a0f1062de9c5cd018621",
"0x9fdffffefdc859e3e48e4675adeb5716e42722ccd7923d0417636d9c73eb1fa8",
"0x4381790b88cdf073aced34e3eb26c8d3d70af042ad4750d48c603c5d54015d24",
"0xbadf8570c37f0806d871934c02cf7a887071c140833c15a647a27d283a78d1c6",
"0xd8bccab7ceb70ebd4b8050c71ce37c846b7690a667ae64375536c11ab777982a",
"0x45f584a17ecd07d8dbedf663d74ae6435c7fdc4240b0a95590e26b5904d3b2a4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


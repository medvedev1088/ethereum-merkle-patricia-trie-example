var Trie = require('merkle-patricia-tree');
var rlp = require('rlp');
var levelup = require('levelup');
var leveldown = require('leveldown');
var db = levelup(leveldown('/your_home_dir/Library/Ethereum/rinkeby/geth/chaindata'));

// the block state root, rinkeby, block number 1775804
// the block state root can be obtained by invoking web3.eth.getBlock(<blockNumber>) in `stateRoot` field
var root = '0xe4a6ff741ec2e0d0cd274a745756028df27312161bdb4557b6da434349f716a9';
var trie = new Trie(db, root);

trie.checkRoot(root, function (err, val) {
  console.log('Root exists:', val);
});

var stream = trie.createReadStream();

stream.on('data', function (data) {
  console.log('key:' + data.key.toString('hex'));

  // values are rlp encoded
  var decodedVal = rlp.decode(data.value);
  console.log(decodedVal);
});

stream.on('end', function (val) {
  console.log('done reading!');
});


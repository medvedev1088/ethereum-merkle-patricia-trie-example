var Trie = require('merkle-patricia-tree');
var rlp = require('rlp');
var levelup = require('levelup');
var leveldown = require('leveldown');
var db = levelup(leveldown('/your_home_dir/Library/Ethereum/rinkeby/geth/chaindata'));
var keccak256 = require('js-sha3').keccak256;

// the block state root, rinkeby, block number 1775804
// the block state root can be obtained by invoking web3.eth.getBlock(<blockNumber>) in `stateRoot` field
var root = '0xe4a6ff741ec2e0d0cd274a745756028df27312161bdb4557b6da434349f716a9';
var trie = new Trie(db, root);

trie.checkRoot(root, function (err, val) {
  console.log('Root exists:', val);
});

var address = '398A7A69f3c59181A1ffe34bed11DCb5DF863A8a';
var addressHash = keccak256(new Buffer(address, 'hex'));

trie.get('0x' + addressHash, function (err, val) {
  var decodedVal = rlp.decode(val);
  console.log('Account data:', address, decodedVal);

  if (!decodedVal || decodedVal.length < 4) {
    console.log('The value for the address must be an array of 4 elements');
    return;
  }

  // 3rd element in the array is storage root, 1st - nonce, 2nd - balance, 4th - codeHash
  var storageRoot = decodedVal[2];
  console.log('Storage root:', storageRoot);

  trie.root = storageRoot;

  trie.checkRoot(storageRoot, function (err, val) {
    console.log('Storage root exists:', val);
  });

  // Read storage slot with index 0

  var slotZeroHash = keccak256(new Buffer('0000000000000000000000000000000000000000000000000000000000000000', 'hex'));
  trie.get('0x' + slotZeroHash, function (err, val) {
    var decodedVal = rlp.decode(val);
    console.log('Value at slot 0 - key:', slotZeroHash);
    console.log(decodedVal);
  });

  // Read all entries from contract storage

  var stream = trie.createReadStream();

  stream.on('data', function (data) {
    console.log('key:', data.key.toString('hex'));

    // values are rlp encoded
    var decodedVal = rlp.decode(data.value);
    console.log(decodedVal);
  });

  stream.on('end', function (val) {
    console.log('done reading!');
  });
});




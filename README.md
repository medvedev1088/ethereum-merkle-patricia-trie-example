# Example showing how to read Patricia Merkle Trie of an ethereum block

You need to change the path to your Ethereum chaindata store, and the block state root in example.js

Run:

```
> npm install
> node example.js
```

Example output:

```
Root exists: true
key:000104f8b6aa6b1035516117a98bf1c06873dc9016950e4befd79a7c533cd074
[ <Buffer 01>,
  <Buffer >,
  <Buffer 56 e8 1f 17 1b cc 55 a6 ff 83 45 e6 92 c0 f8 6e 5b 48 e0 1b 99 6c ad c0 01 62 2f b5 e3 63 b4 21>,
  <Buffer d1 d2 9e e7 4a 6d 03 24 41 89 dd b3 92 39 ad c2 a5 f7 7b a9 1a 8d f4 59 f1 7a 17 2d bd 96 21 3d> ]
key:00016a7e1a013fb93d632850f6af2dab61fe8db06a47f11a4e99170fa8bb5996
[ <Buffer 01>,
  <Buffer >,
  <Buffer 56 e8 1f 17 1b cc 55 a6 ff 83 45 e6 92 c0 f8 6e 5b 48 e0 1b 99 6c ad c0 01 62 2f b5 e3 63 b4 21>,
  <Buffer d1 d2 9e e7 4a 6d 03 24 41 89 dd b3 92 39 ad c2 a5 f7 7b a9 1a 8d f4 59 f1 7a 17 2d bd 96 21 3d> ]
...
```

It takes some time to read the database before you can see the keys and values in the trie.
Sometimes crashes with out-of-memory.

---

example-contract-storage.js reads the Patricia trie of a particular contract.
You need to change the path to your Ethereum chaindata store, the block state root and the address.

Example output:

```
Root exists: true
[ <Buffer 01>,
  <Buffer >,
  <Buffer 24 21 83 63 90 de b4 32 ce 0e ac fe 5f 49 be 88 99 17 bf 8a fa 07 72 24 1c 30 9e 61 e0 4a 0d 42>,
  <Buffer 61 60 55 49 c9 7c 3e 7a d6 68 63 3b 72 b2 60 d3 00 5e ab be f3 22 a2 d6 33 2a 49 76 80 89 77 7a> ]
storageRoot <Buffer 24 21 83 63 90 de b4 32 ce 0e ac fe 5f 49 be 88 99 17 bf 8a fa 07 72 24 1c 30 9e 61 e0 4a 0d 42>
Storage root exists: true
Value at slot 0:  <Buffer 40 9f 9c d8 52 a3 ba e9 52 5d 2a aa>
key:0205d9ce8b4a26409d40486b0ac7b8dc356714e840016b19cc5c0f2c8adbcd74
<Buffer 36 35 c9 ad c5 de a0 00 00>
key:0249d346d51fad5ef0b6fae89b4907e63c831f4f8af088d602baef47cda4eab7
<Buffer 0a 07 64 07 d3 f7 44 00 00>
```
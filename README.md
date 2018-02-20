# Example showing how to read Patricia Merkle Trie of an ethereum block

Change the path to your Ethereum chaindata store in example.js

Run:

```
> npm install
> node example.js
```

Output:

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



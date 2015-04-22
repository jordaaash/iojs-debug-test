# iojs-debug-test

This is a quick test to show the performance degradation of the v8 breakpoint debugger in WebStorm.

## Install and [patch iojs](https://github.com/iojs/io.js/issues/877#issuecomment-95296630) with [n](https://github.com/tj/n) installed:

```
curl https://iojs.org/dist/v1.8.1/iojs-v1.8.1.tar.xz | tar -xz
cd iojs-v1.8.1
curl -O https://gist.githubusercontent.com/indutny/1f798bb3be24b077b872/raw/f0c2df68d3e50af6abd2a9bb856c7702bcb03992/debug.patch
git apply --stat debug.patch
./configure --prefix=/usr/local/n/versions/io/1.8.1
make
make install
n io 1.8.1
git clone https://github.com/jordansexton/iojs-debug-test.git
```

## Debug in WebStorm

1. Open `iojs-debug-test` in WebStorm
2. Create a run configuration to run `/usr/local/bin/node index.js`
3. Run the debugger. Output should be like:
```
/usr/local/bin/node --debug-brk=55065 index.js
Debugger listening on port 55065
HTTP server listening on port 8080
```

## Performance results
| node | version | startup time |
|------|--------:|-------------:|
| node | 0.10.0  | ~3 seconds   |
| node | 0.11.0  | ~3 seconds   |
| node | 0.12.2  | ~9 seconds   |
| iojs | 1.7.1   | ~9 seconds   |
| iojs | *1.8.1  | ~9 seconds   |
_* = patched_



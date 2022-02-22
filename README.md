# Typescript example of error-chain

## Run Typescript source with ts-node

```
npm start
```

## Run generated Javascript with node

```
npm test
```

## Node 16+ output

```
$ nvm use v16.14.0
$ npm test

Message: outer error
Cause Message: inner error
Error: outer error
    at Object.<anonymous> (.../error-cause-test/dist/index.js:9:15)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    ... 4 lines matching cause stack trace ...
    at node:internal/main/run_main_module:17:47 {
  [cause]: Error: inner error
      at Object.<anonymous> (.../error-cause-test/dist/index.js:6:15)
      at Module._compile (node:internal/modules/cjs/loader:1103:14)
      at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
      at Module.load (node:internal/modules/cjs/loader:981:32)
      at Function.Module._load (node:internal/modules/cjs/loader:822:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
      at node:internal/main/run_main_module:17:47
}
```

## Node 14 output

```
$ nvm use v14.19.0
$ npm test

Message: outer error
Cause Message: inner error
Error: outer error
    at new Error (.../error-cause-test/node_modules/error-cause/Error/implementation.js:12:33)
    at Object.<anonymous> (.../error-cause-test/dist/index.js:9:15)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47
```

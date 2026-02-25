import { defineConfig } from "hardhat/config";

export default defineConfig({
  solidity: {
    profiles: {
      default: {
        version: "0.8.26",
        settings: {
          evmVersion: "cancun",
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 44444444,
          },
          metadata: {
            bytecodeHash: "none",
          },
        },
      },
      debug: {
        version: "0.8.26",
        settings: {
          viaIR: false,
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  paths: {
    sources: "./src",
    tests: {
      solidity: "./test",
    },
  },

  test: {
    //! We don't have profiles for tests
    solidity: {
      ffi: true,
      gasLimit: 300_000_000n,
      allowInternalExpectRevert: true,
      fuzz: {
        runs: 1000,
        seed: "0x4444",
      },
      fsPermissions: {
        //! gas snapshots not yet released in HH
        // dangerouslyReadWriteDirectory: ["./snapshots"],
        readDirectory: ["./out", "./test/bin"],
      },
    },
  },
});

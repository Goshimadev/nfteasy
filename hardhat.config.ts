import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [{ version: "0.8.6", settings: {} }],
    },
    networks: {
        hardhat: {
            initialBaseFeePerGas: 0,
        },
        localhost: {},
    }
};

export default config;

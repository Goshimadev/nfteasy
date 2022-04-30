import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";

// tasks
import "./tasks/accounts";
import "./tasks/deployment/deploy";
import "./tasks/operations/mint-token";

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY || "";
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [{ version: "0.8.6", settings: {
            optimizer: {
                enabled: true,
                runs: 200
          },
        } }],
    },
    networks: {
        hardhat: {
            initialBaseFeePerGas: 0,
        },
        localhost: {},
        coverage: {
            url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [RINKEBY_PRIVATE_KEY],
        },
        mainnet: {
            url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [MAINNET_PRIVATE_KEY],
        },
    },
    gasReporter: {
        coinmarketcap: COINMARKETCAP_API_KEY,
        enabled: true,
        currency: "USD",
        gasPrice: 21,
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};

export default config;

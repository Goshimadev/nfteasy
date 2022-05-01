# NFTeasy
NFT smart contracts on Ethereum

### Setup
1. Make sure you have installed [Git](https://git-scm.com/downloads), [Node](https://nodejs.org/dist/latest-v12.x/), [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) and [Hardhat](https://hardhat.org/getting-started/#installation).

2. Clone this repo and change directory into it:

```bash
git clone https://github.com/velopace/nfteasy.git
cd nfteasy
```

3. Install npm packages

```bash
yarn
```

### Compile
```bash
yarn build
```

### Run a local chain and deploy your contract:

localhost network
```bash
npx hardhat node
yarn deploy --network localhost
```
hardhat network
```bash
yarn deploy
```

### Testing
```bash
yarn test
```

### Mint/Batch Mint and Burn token
```bash
npx hardhat mint-token --network rinkeby|mainnet|localhost --metadata-uri ar://8_NZWr4K9d6N8k4TDbMzLAkW6cNQnSQMLeoShc8komM

npx hardhat batchmint-token --network rinkeby|mainnet|localhost --metadata-uris ar://8_NZWr4K9d6N8k4TDbMzLAkW6cNQnSQMLeoShc8komM,ar://8_NZWr4K9d6N8k4TDbMzLAkW6cNQnSQMLeoShc8komM,ar://8_NZWr4K9d6N8k4TDbMzLAkW6cNQnSQMLeoShc8komM,ar://8_NZWr4K9d6N8k4TDbMzLAkW6cNQnSQMLeoShc8komM,ar://8_NZWr4K9d6N8k4TDbMzLAkW6cNQnSQMLeoShc8komM

npx hardhat burn-token --token-id 0
```

### Lint
```bash
yarn lint
```
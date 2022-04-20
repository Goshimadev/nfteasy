import { Signer } from "ethers";
import { task } from "hardhat/config";

import { TASK_ACCOUNT } from "./task-names";

task(TASK_ACCOUNT, "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts: Signer[] = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

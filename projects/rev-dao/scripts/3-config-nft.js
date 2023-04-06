import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x5b56bEADE895b178A470B101a002802284B9C7Fe", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Spinning Top Totem",
        description: "This NFT will give you access to RevDAO!",
        image: readFileSync("totem.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

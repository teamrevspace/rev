import React, { useMemo } from 'react';
import { useAddress, ConnectWallet, useContract, useNFTBalance, Web3Button } from '@thirdweb-dev/react';

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();

  // Initialize our Edition Drop contract
  const editionDropAddress = "0x5b56bEADE895b178A470B101a002802284B9C7Fe"
  const { contract: editionDrop } = useContract(editionDropAddress, "edition-drop");
  // Hook to check if the user has our NFT
  const { data: nftBalance } = useNFTBalance(editionDrop, address, "0")

  const hasClaimedNFT = useMemo(() => {
    return nftBalance && nftBalance.gt(0)
  }, [nftBalance])

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to RevDAO</h1>
        <div className="btn-hero">
          <ConnectWallet />
        </div>
      </div>
    );
  }

  if (hasClaimedNFT) {
    return (
      <div className="member-page">
        <h1>RevDAO Member Page</h1>
        <h3>Thanks for being a member!</h3>
      </div>
    );
  };

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="mint-nft">
      <h1>Mint your free RevDAO Membership NFT</h1>
      <div className="btn-hero">
        <Web3Button 
          contractAddress={editionDropAddress}
          action={(contract) => {
            contract.erc1155.claim(0, 1)
          }}
          onSuccess={() => {
            const editionAddress = editionDrop?.getAddress() || '';
            console.log("🌊 Successfully Minted!" + editionAddress === '' ?? `Check it out on OpenSea: https://testnets.opensea.io/assets/${editionAddress}/0`);
          }}
          onError={(error) => {
            console.error("Failed to mint NFT", error);
          }}
        >
          Mint your NFT
        </Web3Button>
      </div>
    </div>
  )
}

export default App;

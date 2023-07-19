import { Flex } from "@chakra-ui/react";
import { IDKitWidget, internal, solidityEncode } from "@worldcoin/idkit";
import type { NextPage } from "next";

const Sita: NextPage = () => {
  async function onSuccess(response) {
    console.log("response", response);

    console.log("enter the concert");
    // setNullifierHash(response.nullifier_hash);
  }

  return (
    <>
      <Flex className="flex items-center flex-col flex-grow pt-10">
        <h1>Settings</h1>

        <div>
          <IDKitWidget
            app_id="app_staging_24e942c5a9e13eaba62ff6917dfaab6b" // obtained from the Developer Portal
            action="human" // this is your action identifier from the Developer Portal (can also be created on the fly)
            onSuccess={onSuccess}
            credential_types={["orb"]} // the credentials you want to accept
            // walletConnectProjectId="get_this_from_walletconnect_portal" // optional, obtain from WalletConnect Portal
            enableTelemetry
          >
            {({ open }) => <button onClick={open}>Verify as a human</button>}
          </IDKitWidget>
        </div>
      </Flex>
    </>
  );
};

export default Sita;

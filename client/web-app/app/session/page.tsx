import { getSession } from "../actions/authActions";
import React from "react";
import Heading from "../components/Heading";
import { getTokenWorkaround } from "../actions/auctionActions";

export default async function Session() {
  const session = await getSession();
  const token = await getTokenWorkaround();

  return (
    <div>
      <Heading
        title="Session dashboard"
        subtitle="Details for the user session"
      />
      <div className="bg-blue-200 border-2 border-blue-500">
        <h3 className="text-lg">Session data</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <div className="bg-green-200 border-2 border-blue-500">
        <h3 className="text-lg">Token data</h3>
        <pre className="overflow-auto">{JSON.stringify(token, null, 2)}</pre>
      </div>
    </div>
  );
}
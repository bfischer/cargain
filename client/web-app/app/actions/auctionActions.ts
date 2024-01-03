"use server";

import { Auction, PagedResult } from "@/types";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { headers, cookies } from "next/headers";

export async function getData(query: string): Promise<PagedResult<Auction>> {
  const response = await fetch(`http://localhost:6001/search${query}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function getTokenWorkaround() {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  } as NextApiRequest;

  return await getToken({ req });
}

export async function updateAuctionTest() {
  const data = {
    mileage: Math.floor(Math.random() * 100000) + 1,
  };

  const token = await getTokenWorkaround();

  const rest = await fetch("http://localhost:6001/auction", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: "",
  });
}

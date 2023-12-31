import { NextResponse } from "next/server";

const publicApi: string =
  "https://publicapi.battlebit.cloud/Servers/GetServerList";

export async function POST() {
  const response = await fetch(publicApi, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok)
    return NextResponse.json({
      status: 500,
      message: "Failed to retrieve from BattleBit API",
    });

  const result = await response.json();

  return NextResponse.json({ status: 200, response: result });
}

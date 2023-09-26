import { NextResponse } from "next/server";

const publicApi: string =
  "https://publicapi.battlebit.cloud/Servers/GetServerList";

export async function GET() {
  const response = await fetch(publicApi, {cache: "no-cache"});
  if (!response.ok)
    return NextResponse.json({
      status: 500,
      message: "Failed to retrieve from BattleBit API",
    });

  const result = await response.json();

  return NextResponse.json({ status: 200, response: result });
}


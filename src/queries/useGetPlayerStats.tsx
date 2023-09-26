import { useQuery } from "@tanstack/react-query";

const API_ROUTE = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

async function getPlayerStats() {
  try {
    const response = await fetch(`${API_ROUTE}/api/bbplayerstats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed API call");

    const data = (await response.json()).response;

    let overall: any = {};
    let players: any = {};
    let playerNames: string[] = [];

    data.forEach((e: any) => {
      const key = Object.keys(e)[0];
      const values: any = Object.values(e)[0];
      const newValues: any[] = [];
      let rank = 1;

      values.forEach((value: any) => {
        const name = key === "TopClans" ? value.Clan : value.Name;
        const playerObj = { ...value, rank };
        let newPlayer = players[name.toLowerCase()] ?? { name: name };
        newPlayer[key] = playerObj;
        players[name.toLowerCase()] = newPlayer;
        newValues.push(playerObj);
        if (!playerNames.includes(name)) playerNames.push(name);
        rank++;
      });
      overall[key] = newValues;
    });
    return {
      playerNames: playerNames,
      overall,
      players,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default function useGetPlayerStats() {
  return useQuery(["playerStats"], () => getPlayerStats(), {
    staleTime: 0,
  });
}

import { useQuery } from "@tanstack/react-query";

const API_ROUTE = process.env.NEXT_PUBLIC_API || "http://localhost:3000";

async function getServerList() {
  try {
    const response = await fetch(`${API_ROUTE}/api/bbserverlist`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed API call");
    const data = (await response.json()).response;
    let totalActivePlayers = 0;
    let regionData: any = {};
    let gameModeData: any = {};

    data.forEach((server: any) => {
      const activePlayers = server.Players + server.QueuePlayers;

      let newRegion = regionData[server.Region] ?? {};
      newRegion["activePlayers"] = newRegion["activePlayers"]
        ? (newRegion["activePlayers"] += activePlayers)
        : activePlayers;
      regionData[server.Region] = newRegion;

      let newGameMode = gameModeData[server.Gamemode] ?? {};
      newGameMode["activePlayers"] = newGameMode["activePlayers"]
        ? (newGameMode["activePlayers"] += activePlayers)
        : activePlayers;
      gameModeData[server.Gamemode] = newGameMode;

      totalActivePlayers += activePlayers;
    });

    return {
      totalActivePlayers,
      regionData,
      gameModeData,
      data,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default function useGetServerList() {
  return useQuery(["serverList"], () => getServerList());
}

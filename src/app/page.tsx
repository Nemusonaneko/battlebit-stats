"use client";

import GameStatsPage from "@/components/GameStatsPage";
import OverallStatsPage from "@/components/OverallStatsPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGetPlayerStats from "@/queries/useGetPlayerStats";
import useGetServerList from "@/queries/useGetServerList";

export default function Home() {
  const { data: playerData } = useGetPlayerStats();
  const { data: serverData } = useGetServerList();
  console.log(serverData);
  return (
    <main>
      <Tabs defaultValue="player">
        <div className="w-full bg-[#3A506B]">
          <div className="flex gap-4 p-2 items-center">
            <h1 className="font-bold text-3xl">Battlebit Stats</h1>
            <TabsList>
              <TabsTrigger value="player">Players</TabsTrigger>
              <TabsTrigger value="game">Game</TabsTrigger>
              <TabsTrigger value="server">Servers</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="player">
          <OverallStatsPage data={playerData} />
        </TabsContent>
        <TabsContent value="game">
          <GameStatsPage data={serverData} />
        </TabsContent>
        <TabsContent value="server"></TabsContent>
      </Tabs>
    </main>
  );
}

"use client";

import GameStatsPage from "@/components/GameStatsPage";
import OverallStatsPage from "@/components/OverallStatsPage";
import ServerListPage from "@/components/ServerListPage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
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
          <OverallStatsPage />
        </TabsContent>
        <TabsContent value="game">
          <GameStatsPage />
        </TabsContent>
        <TabsContent value="server">
          <ServerListPage />
        </TabsContent>
      </Tabs>
    </main>
  );
}

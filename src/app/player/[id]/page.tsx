"use client";

import useGetPlayerStats from "@/queries/useGetPlayerStats";
import { useMemo } from "react";
import Loading from "@/components/Loading";
import PlayerCard from "@/components/Cards/PlayerCard";

export default function Page({ params }: { params: { id: string } }) {
  const name = decodeURIComponent(params.id).toLowerCase();
  const { data } = useGetPlayerStats();

  const playerData = useMemo(() => {
    if (!data) return {};
    return data.players[name] ?? {};
  }, [data, name]);

  return (
    <div className="p-4 gap-4 flex flex-col">
      <h1 className="font-bold text-4xl">Battlebit Stats</h1>

      {data && playerData ? (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">{`Data for: ${
            playerData["TopClans"]
              ? `[${playerData["TopClans"].Tag}] ${playerData.name}`
              : playerData.name
          }`}</h2>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {playerData["TopClans"] && (
              <PlayerCard
                title="Clans"
                data={playerData["TopClans"]}
                label="XP"
              />
            )}
            {playerData["MostKills"] && (
              <PlayerCard
                title="Kills"
                data={playerData["MostKills"]}
                label="kills"
              />
            )}
            {playerData["MostXP"] && (
              <PlayerCard title="XP" data={playerData["MostXP"]} label="XP" />
            )}
            {playerData["MostLongestKill"] && (
              <PlayerCard
                title="Longest Kill"
                data={playerData["MostLongestKill"]}
                label="meters"
              />
            )}
            {playerData["MostHeals"] && (
              <PlayerCard
                title="Heals"
                data={playerData["MostHeals"]}
                label="HP"
              />
            )}
            {playerData["Revives"] && (
              <PlayerCard
                title="Revives"
                data={playerData["Revives"]}
                label="revives"
              />
            )}
            {playerData["MostObjectivesComplete"] && (
              <PlayerCard
                title="Objectives"
                data={playerData["MostObjectivesComplete"]}
                label="objectives"
              />
            )}
            {playerData["MostRoadkills"] && (
              <PlayerCard
                title="Roadkills"
                data={playerData["MostRoadkills"]}
                label="kills"
              />
            )}
            {playerData["MostVehiclesDestroyed"] && (
              <PlayerCard
                title="Vehicles Destroyed"
                data={playerData["MostVehiclesDestroyed"]}
                label="destroyed"
              />
            )}
            {playerData["MostVehicleRepairs"] && (
              <PlayerCard
                title="Vehicles Repaired"
                data={playerData["MostVehicleRepairs"]}
                label="HP"
              />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

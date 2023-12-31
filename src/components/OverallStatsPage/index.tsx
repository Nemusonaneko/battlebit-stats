"use client";

import Loading from "../Loading";
import {
  clanColumns,
  clanSortedByXpColumns,
  healColumns,
  killColumns,
  longestKillColumns,
  objectivesCompleteColumns,
  revivesColumns,
  roadkillColumns,
  vehicleRepairsColumns,
  vehiclesDestroyedColumns,
  xpColumns,
} from "../Table/OverallData/columns";
import OverallDataTableCard from "../Cards/OverallDataTableCard";
import useGetPlayerStats from "@/queries/useGetPlayerStats";

export default function OverallStatsPage() {
  const { data } = useGetPlayerStats();
  return (
    <div className="p-4">
      {data ? (
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">{`Tracking ${Number(
            data.playerNames.length
          ).toLocaleString("en-US")} players`}</h1>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {data.overall["MostKills"] && (
              <OverallDataTableCard
                title="Kills"
                columns={killColumns}
                data={data.overall["MostKills"]}
              />
            )}
            {data.overall["MostXP"] && (
              <OverallDataTableCard
                title="XP"
                columns={xpColumns}
                data={data.overall["MostXP"]}
              />
            )}
            {data.overall["TopClansSortedByXp"] && (
              <OverallDataTableCard
                title="Clans Sorted by XP"
                columns={clanSortedByXpColumns}
                data={data.overall["TopClansSortedByXp"]}
              />
            )}
            {data.overall["TopClans"] && (
              <OverallDataTableCard
                title="Clans Sorted by XP/Member"
                columns={clanColumns}
                data={data.overall["TopClans"]}
              />
            )}
            {data.overall["MostRevives"] && (
              <OverallDataTableCard
                title="Revives"
                columns={revivesColumns}
                data={data.overall["MostRevives"]}
              />
            )}
            {data.overall["MostHeals"] && (
              <OverallDataTableCard
                title="Heals"
                columns={healColumns}
                data={data.overall["MostHeals"]}
              />
            )}
            {data.overall["MostLongestKill"] && (
              <OverallDataTableCard
                title="Longest Kill"
                columns={longestKillColumns}
                data={data.overall["MostLongestKill"]}
              />
            )}
            {data.overall["MostObjectivesComplete"] && (
              <OverallDataTableCard
                title="Objectives"
                columns={objectivesCompleteColumns}
                data={data.overall["MostObjectivesComplete"]}
              />
            )}
            {data.overall["MostRoadkills"] && (
              <OverallDataTableCard
                title="Roadkills"
                columns={roadkillColumns}
                data={data.overall["MostRoadkills"]}
              />
            )}
            {data.overall["MostVehiclesDestroyed"] && (
              <OverallDataTableCard
                title="Vehicles Destroyed"
                columns={vehiclesDestroyedColumns}
                data={data.overall["MostVehiclesDestroyed"]}
              />
            )}
            {data.overall["MostVehicleRepairs"] && (
              <OverallDataTableCard
                title="Vehicle Repairs"
                columns={vehicleRepairsColumns}
                data={data.overall["MostVehicleRepairs"]}
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

"use client";

import useGetPlayerStats from "@/queries/useGetPlayerStats";
import { useMemo } from "react";
import { catEatMembers } from "./members";
import Loading from "@/components/Loading";
import OverallDataTableCard from "@/components/Cards/OverallDataTableCard";
import {
  healColumns,
  killColumns,
  longestKillColumns,
  objectivesCompleteColumns,
  revivesColumns,
  roadkillColumns,
  vehicleRepairsColumns,
  vehiclesDestroyedColumns,
  xpColumns,
} from "./columns";
import Image from "next/image";
import catEat from "../../../public/catEat.gif";

export default function CatEatLeaderboard() {
  const { data } = useGetPlayerStats();

  const sortedData = useMemo(() => {
    if (!data?.overall) return null;
    const ogData = data.overall;
    let final: any = {};
    Object.keys(ogData).forEach((key: string) => {
      let arr: any[] = [];
      let catEatRank = 1;
      ogData[key].forEach((x: any) => {
        if (catEatMembers.includes(x.Name)) {
          arr.push({ ...x, catEatRank });
          catEatRank++;
        }
      });
      final[key] = arr;
    });
    return final;
  }, [data]);

  const catEatRankAndXP = useMemo(() => {
    if (!data?.overall) {
      return {
        rank: 0,
        xp: 0,
        players: 0,
      };
    }

    const filtered = data.overall["TopClans"].filter(
      (x: any) => x.Clan === "catEat"
    )[0];

    const totalXpRank = data.overall["TopClansSortedByXp"].filter(
      (x: any) => x.Clan === "catEat"
    )[0]?.rank;
    return {
      totalXpRank,
      rank: filtered.rank,
      players: filtered.MaxPlayers,
      xp: filtered.XP,
    };
  }, [data]);

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-2 items-baseline">
        <Image src={catEat} alt="catEat" />
        <h1 className="font-bold text-4xl">catEat</h1>
      </div>
      <div>
        {sortedData ? (
          <div className="flex flex-col gap-2">
            <div>
              <p>{`Rank sorted by Total XP: #${catEatRankAndXP.totalXpRank}`}</p>
              <p>{`Rank sorted by XP/Member: #${catEatRankAndXP.rank}`}</p>
              {`Total XP: ${Number(catEatRankAndXP.xp).toLocaleString(
                "en-US"
              )} XP`}
              <p>
                {`XP Per Member: ${Number(
                  Number(catEatRankAndXP.xp / catEatRankAndXP.players).toFixed(
                    0
                  )
                ).toLocaleString("en-US")} XP`}
              </p>
            </div>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              {sortedData["MostKills"] &&
                sortedData["MostKills"].length > 0 && (
                  <OverallDataTableCard
                    title="Kills"
                    columns={killColumns}
                    data={sortedData["MostKills"]}
                  />
                )}
              {sortedData["MostXP"] && sortedData["MostXP"].length > 0 && (
                <OverallDataTableCard
                  title="XP"
                  columns={xpColumns}
                  data={sortedData["MostXP"]}
                />
              )}
              {sortedData["MostLongestKill"] &&
                sortedData["MostLongestKill"].length > 0 && (
                  <OverallDataTableCard
                    title="Longest Kill"
                    columns={longestKillColumns}
                    data={sortedData["MostLongestKill"]}
                  />
                )}
              {sortedData["MostHeals"] &&
                sortedData["MostHeals"].length > 0 && (
                  <OverallDataTableCard
                    title="Heals"
                    columns={healColumns}
                    data={sortedData["MostHeals"]}
                  />
                )}
              {sortedData["MostRevives"] &&
                sortedData["MostRevives"].length > 0 && (
                  <OverallDataTableCard
                    title="Revives"
                    columns={revivesColumns}
                    data={sortedData["MostRevives"]}
                  />
                )}
              {sortedData["MostObjectivesComplete"] &&
                sortedData["MostObjectivesComplete"].length > 0 && (
                  <OverallDataTableCard
                    title="Objectives"
                    columns={objectivesCompleteColumns}
                    data={sortedData["MostObjectivesComplete"]}
                  />
                )}
              {sortedData["MostRoadkills"] &&
                sortedData["MostRoadkills"].length > 0 && (
                  <OverallDataTableCard
                    title="Roadkills"
                    columns={roadkillColumns}
                    data={sortedData["MostRoadkills"]}
                  />
                )}
              {sortedData["MostVehiclesDestroyed"] &&
                sortedData["MostVehiclesDestroyed"].length > 0 && (
                  <OverallDataTableCard
                    title="Vehicles Destroyed"
                    columns={vehiclesDestroyedColumns}
                    data={sortedData["MostVehiclesDestroyed"]}
                  />
                )}
              {sortedData["MostVehicleRepairs"] &&
                sortedData["MostVehicleRepairs"].length > 0 && (
                  <OverallDataTableCard
                    title="Vehicle Repairs"
                    columns={vehicleRepairsColumns}
                    data={sortedData["MostVehicleRepairs"]}
                  />
                )}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

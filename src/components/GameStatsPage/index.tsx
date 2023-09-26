import useGetServerList from "@/queries/useGetServerList";
import RegionCard from "../Cards/RegionCard";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function GameStatsPage() {
<<<<<<< HEAD
  const { data, refetch } = useGetServerList();
  const [currData, setCurrData] = useState<any>(null);
=======
  const { data } = useGetServerList();
>>>>>>> parent of f4a7ef7 (refetch?)
  const queryClient = useQueryClient();
  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.invalidateQueries();
    }, 1000);
    return () => clearInterval(interval);
  }, [queryClient]);

  useEffect(() => {
    setCurrData(data);
  }, [data]);

  return (
    <div className="p-4">
      {currData ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl">Total Active Players:</h1>
            <h2 className="text-3xl">
              {Number(currData.totalActivePlayers).toLocaleString("en-US")}
            </h2>
          </div>
          {currData.regionData && (
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-3xl">Regions:</h1>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center">
                {Object.keys(currData.regionData)
                  .sort()
                  .map((region: string, i: number) => (
                    <RegionCard
                      key={i}
                      title={region}
                      players={currData.regionData[region].activePlayers}
                    />
                  ))}
              </div>
            </div>
          )}
          {currData.gameModeData && (
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-3xl">Game Modes:</h1>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
                {Object.keys(currData.gameModeData)
                  .sort()
                  .map(
                    (mode: string, i: number) =>
                      currData.gameModeData[mode].activePlayers > 0 && (
                        <RegionCard
                          key={i}
                          title={mode}
                          players={currData.gameModeData[mode].activePlayers}
                        />
                      )
                  )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

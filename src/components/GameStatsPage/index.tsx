import RegionCard from "../Cards/RegionCard";
import Loading from "../Loading";

export default function GameStatsPage({ data }: { data: any }) {
  return (
    <div className="p-4">
      {data ? (
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl">Total Active Players:</h1>
            <h2 className="text-2xl">
              {Number(data.totalActivePlayers).toLocaleString("en-US")}
            </h2>
          </div>
          {data.regionData && (
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-3xl">Regions:</h1>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
                {Object.keys(data.regionData)
                  .sort()
                  .map((region: string, i: number) => (
                    <RegionCard
                      key={i}
                      title={region}
                      players={data.regionData[region].activePlayers}
                    />
                  ))}
              </div>
            </div>
          )}
          {data.gameModeData && (
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-3xl">Game Mode:</h1>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
                {Object.keys(data.gameModeData)
                  .map((mode: string, i: number) =>
                    data.gameModeData[mode].activePlayers ? (
                      <RegionCard
                        key={i}
                        title={mode}
                        players={data.gameModeData[mode].activePlayers}
                      />
                    ) : (
                      <></>
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

import { Card, CardContent, CardHeader } from "@/components/ui/card";

type RegionCardTypes = {
  title: string;
  players: number;
};

const translations: { [key: string]: string } = {
  America_Central: "America",
  Asia_Central: "Asia",
  Australia_Central: "Australia",
  Brazil_Central: "Brazil",
  Europe_Central: "Europe",
  Japan_Central: "Japan",
  TDM: "Team Deathmatch",
  INFCONQ: "Infantry Conquest",
  DOMI: "Domination",
  CONQ: "Conquest",
  FRONTLINE: "Frontline",
  RUSH: "Rush",
  CaptureTheFlag: "Capture The Flag",
  ELI: "Elimination",
};

export function translateTitle(title: string) {
  return translations[title] ?? title;
}

export default function RegionCard({ title, players }: RegionCardTypes) {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader className="font-bold text-2xl">
        {translateTitle(title)}
      </CardHeader>
      <CardContent>
        <p className="border p-2 rounded">{`${players} players`}</p>
      </CardContent>
    </Card>
  );
}

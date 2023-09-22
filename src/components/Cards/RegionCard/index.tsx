import { Card, CardContent, CardHeader } from "@/components/ui/card";

type RegionCardTypes = {
  title: string;
  players: number;
};

export default function RegionCard({ title, players }: RegionCardTypes) {
  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader className="font-bold text-2xl">{title}</CardHeader>
      <CardContent>
        <p className="border p-2 rounded">{`${players} players`}</p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PlayerCardTypes = {
  title: string;
  label: string;
  data: any;
};

export default function PlayerCard({ title, data, label }: PlayerCardTypes) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <p className="border p-2 rounded">{`Rank: ${data.rank}`}</p>
          <p className="border p-2 rounded">{`${Number(
            data.Value ?? data.XP
          ).toLocaleString("en-US")} ${label}`}</p>
        </div>
      </CardContent>
    </Card>
  );
}

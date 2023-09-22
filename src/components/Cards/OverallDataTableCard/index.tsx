import OverallDataTable from "@/components/Table/OverallData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TableCardTypes = {
  title: string;
  columns: any[];
  data: any[];
};

export default function OverallDataTableCard({
  title,
  columns,
  data,
}: TableCardTypes) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <OverallDataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}

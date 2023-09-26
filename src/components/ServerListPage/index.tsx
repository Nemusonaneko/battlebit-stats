import useGetServerList from "@/queries/useGetServerList";
import Loading from "../Loading";
import ServerListTable from "../Table/ServerList";
import { serverListColumns } from "../Table/ServerList/columns";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function ServerListPage() {
<<<<<<< HEAD
  const { data, refetch } = useGetServerList();
  const [currData, setCurrData] = useState<any>(null);
=======
  const { data } = useGetServerList();
>>>>>>> parent of f4a7ef7 (refetch?)
  const queryClient = useQueryClient();

  useEffect(() => {
    setCurrData(data);
  }, [data]);

  return (
    <div className="p-4">
      {currData ? (
        <Card>
          <CardTitle className="p-4 flex items-center gap-2">
            <h4 className="font-bold text-2xl">Server List</h4>
            <Button
              className="text-xs hover:bg-gray-500"
              onClick={() => queryClient.invalidateQueries()}
            >
              Refresh
            </Button>
          </CardTitle>
          <CardContent>
            <ServerListTable data={currData.data} columns={serverListColumns} />
          </CardContent>
        </Card>
      ) : (
        <Loading />
      )}
    </div>
  );
}

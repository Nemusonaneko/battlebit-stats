import useGetServerList from "@/queries/useGetServerList";
import Loading from "../Loading";
import ServerListTable from "../Table/ServerList";
import { serverListColumns } from "../Table/ServerList/columns";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useQueryClient } from "@tanstack/react-query";

export default function ServerListPage() {
  const { data, refetch } = useGetServerList();
  const queryClient = useQueryClient();

  return (
    <div className="p-4">
      {data ? (
        <Card>
          <CardTitle className="p-4 flex items-center gap-2">
            <h4 className="font-bold text-2xl">Server List</h4>
            <Button
              className="text-xs hover:bg-gray-500"
              onClick={() => {
                queryClient.invalidateQueries();
                refetch();
              }}
            >
              Refresh
            </Button>
          </CardTitle>
          <CardContent>
            <ServerListTable data={data.data} columns={serverListColumns} />
          </CardContent>
        </Card>
      ) : (
        <Loading />
      )}
    </div>
  );
}

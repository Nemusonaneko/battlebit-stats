import useGetServerList from "@/queries/useGetServerList";
import Loading from "../Loading";
import ServerListTable from "../Table/ServerList";
import { serverListColumns } from "../Table/ServerList/columns";
import { Card, CardContent, CardTitle } from "../ui/card";

export default function ServerListPage() {
  const { data } = useGetServerList();

  return (
    <div className="p-4">
      {data ? (
        <Card>
          <CardTitle className="p-4">
            Server List
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

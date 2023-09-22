import useGetServerList from "@/queries/useGetServerList";
import Loading from "../Loading";
import ServerListTable from "../Table/ServerList";
import { serverListColumns } from "../Table/ServerList/columns";

export default function ServerListPage() {
  const { data } = useGetServerList();

  return (
    <div className="p-4">
      {data ? (
        <ServerListTable data={data.data} columns={serverListColumns} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

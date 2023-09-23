import { translateTitle } from "@/components/Cards/RegionCard";
import { ColumnDef } from "@tanstack/react-table";

export type ServerListColumnTypes = {
  time: string;
  Gamemode: string;
  HasPassword: boolean;
  tick: number;
  official: boolean;
  map: string;
  MaxPlayers: number;
  name: string;
  Players: number;
  QueuePlayers: number;
  region: string;
};

const sizeTranslate: { [key: number]: string } = {
  16: "8 v 8",
  32: "16 v 16",
  64: "32 v 32",
  128: "64 v 64",
  254: "127 v 127",
};

function translateSize(size: number) {
  return sizeTranslate[size] ?? size;
}

export const serverListColumns: ColumnDef<ServerListColumnTypes>[] = [
  {
    id: "Map",
    accessorKey: "Map",
    header: "Map",
  },
  {
    id: "Name",
    accessorKey: "Name",
    header: "Name",
  },
  {
    id: "Gamemode",
    accessorKey: "Gamemode",
    header: "Mode",
    cell: ({ row }) => {
      return <p>{translateTitle(row.original.Gamemode)}</p>;
    },
  },
  {
    id: "MaxPlayers",
    accessorKey: "MaxPlayers",
    header: "Size",
    cell: ({ row }) => {
      return <p>{translateSize(row.original.MaxPlayers)}</p>;
    },
  },
  {
    id: "Region",
    accessorKey: "Region",
    header: "Region",
    cell: ({ row }) => {
      return <p>{translateTitle(row.getValue("Region"))}</p>;
    },
  },
  {
    id: "Hz",
    accessorKey: "Hz",
    header: "Tickrate",
  },
  {
    id: "IsOfficial",
    accessorKey: "IsOfficial",
    header: "Official",
    cell: ({ row }) => {
      return <p>{`${row.getValue("IsOfficial") ? "Yes" : "No"}`}</p>;
    },
  },
  {
    id: "HasPassword",
    accessorKey: "HasPassword",
    header: "Password",
    cell: ({ row }) => {
      return <p>{row.original.HasPassword ? "Yes" : "No"}</p>;
    },
  },
  {
    id: "players",
    accessorKey: "players",
    header: "Players",
    cell: ({ row }) => {
      return (
        <p>{`${row.original.Players}${
          row.original.QueuePlayers > 0 ? `(+${row.original.QueuePlayers})` : ""
        }/${row.original.MaxPlayers}`}</p>
      );
    },
  },
];

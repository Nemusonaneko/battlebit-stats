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
  Region: string;
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

const arrowUpDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
    />
  </svg>
);

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
    accessorFn: (row) => translateTitle(row.Gamemode),
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
    accessorFn: (row) => translateTitle(row.Region),
    cell: ({ row }) => {
      return <p>{translateTitle(row.original.Region)}</p>;
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
    accessorKey: "Players",
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <div className="flex gap-1 items-center">
            <p>Players</p>
            {arrowUpDown}
          </div>
        </button>
      );
    },
    cell: ({ row }) => {
      return (
        <p>{`${row.original.Players}${
          row.original.QueuePlayers > 0 ? `(+${row.original.QueuePlayers})` : ""
        }/${row.original.MaxPlayers}`}</p>
      );
    },
  },
];

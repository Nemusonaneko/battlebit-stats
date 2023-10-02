import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const rankColumn = {
  id: "rank",
  accessorKey: "rank",
  header: "Rank",
  cell: ({ row }: { row: any }) => {
    return <p>{row.index}</p>;
  },
};

const nameColumn = {
  id: "name",
  accessorKey: "Name",
  header: "Name",
  cell: ({ row }: { row: any }) => {
    return (
      <Link
        href={`/player/${encodeURIComponent(String(row.getValue("name")))}`}
        target="_blank"
      >
        {row.getValue("name")}
      </Link>
    );
  },
};

const hpColumn = {
  id: "hp",
  accessorKey: "Value",
  header: "HP",
  cell: ({ row }: { row: any }) => {
    return <p>{`${Number(row.getValue("hp")).toLocaleString("en-US")} HP`}</p>;
  },
};

const killColumn = {
  id: "kills",
  accessorKey: "Value",
  header: "Kills",
  cell: ({ row }: { row: any }) => {
    return (
      <p>{`${Number(row.getValue("kills")).toLocaleString("en-US")} kills`}</p>
    );
  },
};

export const healColumns: ColumnDef<any>[] = [rankColumn, nameColumn, hpColumn];

export const killColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  killColumn,
];

export const longestKillColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  {
    id: "Value",
    accessorKey: "Value",
    header: "Meters",
    cell: ({ row }) => {
      return (
        <p>{`${Number(row.getValue("Value")).toLocaleString(
          "en-US"
        )} meters`}</p>
      );
    },
  },
];

export const objectivesCompleteColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  {
    id: "Value",
    accessorKey: "Value",
    header: "Objectives",
    cell: ({ row }) => {
      return (
        <p>{`${Number(row.getValue("Value")).toLocaleString(
          "en-US"
        )} objectives`}</p>
      );
    },
  },
];

export const revivesColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  {
    id: "Value",
    accessorKey: "Value",
    header: "Revives",
    cell: ({ row }) => {
      return (
        <p>{`${Number(row.getValue("Value")).toLocaleString(
          "en-US"
        )} revives`}</p>
      );
    },
  },
];

export const roadkillColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  killColumn,
];

export const vehicleRepairsColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  hpColumn,
];

export const vehiclesDestroyedColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  {
    id: "Value",
    accessorKey: "Value",
    header: "Destroyed",
    cell: ({ row }) => {
      return (
        <p>{`${Number(row.getValue("Value")).toLocaleString(
          "en-US"
        )} destroyed`}</p>
      );
    },
  },
];

export const xpColumns: ColumnDef<any>[] = [
  rankColumn,
  nameColumn,
  {
    id: "Value",
    accessorKey: "Value",
    header: "XP",
    cell: ({ row }) => {
      return (
        <p>{`${Number(row.getValue("Value")).toLocaleString("en-US")} XP`}</p>
      );
    },
  },
];

export const clanColumns: ColumnDef<any>[] = [
  rankColumn,
  {
    id: "Tag",
    accessorKey: "Tag",
  },
  {
    id: "Clan",
    accessorKey: "Clan",
    header: "Clan",
    cell: ({ row }) => {
      return (
        <Link
          href={`/player/${encodeURIComponent(String(row.getValue("Clan")))}`}
          target="_blank"
        >
          <p>{`${row.getValue("Clan")}`}</p>
        </Link>
      );
    },
  },
  {
    id: "MaxPlayers",
    accessorKey: "MaxPlayers",
    header: "Members",
    cell: ({ row }) => {
      return (
        <p>{Number(row.getValue("MaxPlayers")).toLocaleString("en-US")}</p>
      );
    },
  },
  {
    id: "XP",
    accessorKey: "XP",
    header: "XP",
    cell: ({ row }) => {
      return (
        <p>{`${Number(row.getValue("XP")).toLocaleString("en-US")} XP`}</p>
      );
    },
  },
  {
    id: "XP",
    accessorKey: "XP",
    header: "XP/Member",
    cell: ({ row }) => {
      return (
        <p>{`${Number(
          Number(
            Number(row.getValue("XP")) / Number(row.getValue("MaxPlayers"))
          ).toFixed(0)
        ).toLocaleString("en-US")} XP`}</p>
      );
    },
  },
];

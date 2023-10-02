import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const rankColumn = {
  id: "rank",
  accessorKey: "rank",
  header: "Global",
};

const catEatColumn = {
  id: "catEatRank",
  accessorKey: "catEatRank",
  header: "Rank",
  cell: ({ row }: { row: any }) => {
    return <p>{row.index + 1}</p>;
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

export const healColumns: ColumnDef<any>[] = [
  catEatColumn,
  rankColumn,
  nameColumn,
  hpColumn,
];

export const killColumns: ColumnDef<any>[] = [
  catEatColumn,
  rankColumn,
  nameColumn,
  killColumn,
];

export const longestKillColumns: ColumnDef<any>[] = [
  catEatColumn,
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
  catEatColumn,
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
  catEatColumn,
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
  catEatColumn,
  rankColumn,
  nameColumn,
  killColumn,
];

export const vehicleRepairsColumns: ColumnDef<any>[] = [
  catEatColumn,
  rankColumn,
  nameColumn,
  hpColumn,
];

export const vehiclesDestroyedColumns: ColumnDef<any>[] = [
  catEatColumn,
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
  catEatColumn,
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


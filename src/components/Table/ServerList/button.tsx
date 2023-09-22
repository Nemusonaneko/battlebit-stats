import { Column } from "@tanstack/react-table";
import { ServerListColumnTypes } from "./columns";

const arrowupdown = (
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

export default function ButtonWithSort({
  label,
  column,
}: {
  label: string;
  column: Column<ServerListColumnTypes, unknown>;
}) {
  return (
    <button
      className="flex gap-1 items-center"
      onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
    >
      <p>{label}</p>
      {arrowupdown}
    </button>
  );
}

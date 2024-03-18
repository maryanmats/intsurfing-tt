import { HeadCell } from "../types/types";

export const ROWS_PER_PAGE_OPTIONS = [10, 20];

export const HEADER_CELLS: readonly HeadCell[] = [
  {
    id: "_",
    numeric: false,
    disablePadding: true,
    label: " ",
  },

  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "base_experience",
    numeric: true,
    disablePadding: false,
    label: "Experience",
  },
  {
    id: "height",
    numeric: true,
    disablePadding: false,
    label: "Height ",
  },
  {
    id: "weight",
    numeric: true,
    disablePadding: false,
    label: "Weight ",
  },
];

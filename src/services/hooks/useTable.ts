import { useState } from "react";

import { usePokemons } from "./usePokemons";

import { getComparator, stableSort } from "../utils/utils";

import type { Order, PokemonData } from "../../types/types";

export const useTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof PokemonData>("id");

  const { arePokemonsFilled, count, isFetching, pokemonsWithDescription } =
    usePokemons({ order, orderBy, page, rowsPerPage });

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof PokemonData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = stableSort(
    // @ts-ignore
    pokemonsWithDescription,
    getComparator(order, orderBy)
  );

  return {
    arePokemonsFilled,
    count,
    isFetching,
    handleChangePage,
    handleChangeRowsPerPage,
    handleRequestSort,
    page,
    pokemonsWithDescription,
    order,
    orderBy,
    rowsPerPage,
    visibleRows,
  };
};

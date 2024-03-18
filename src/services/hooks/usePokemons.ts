import {
  keepPreviousData,
  useQuery,
  useQueries,
  useIsFetching,
} from "@tanstack/react-query";

import { PokemonsApi } from "../pokemons/pokemons.api";
import { Order, PokemonData } from "../../types/types";

interface IUsePokemonsProps {
  page: number;
  rowsPerPage: number;
  order: Order;
  orderBy: keyof PokemonData;
}

export const usePokemons = ({
  page,
  rowsPerPage,
  order,
  orderBy,
}: IUsePokemonsProps) => {
  const isFetching = useIsFetching();

  const { data: pokemons } = useQuery({
    queryKey: ["getPokemons", page, rowsPerPage, order, orderBy],
    queryFn: () => PokemonsApi.getPokemons(rowsPerPage, page * rowsPerPage),
    placeholderData: keepPreviousData,
  });

  const pokemonByIdQueries = useQueries({
    queries:
      pokemons?.results
        ?.flatMap(({ name }) => name)
        ?.flatMap((pokemonId) => {
          return {
            enabled: Boolean(pokemonId),
            queryKey: [`${"getPokemonsById"} + ${pokemonId}`, pokemonId],
            queryFn: () => PokemonsApi.getPokemonsById(pokemonId),
            initialData: [],
          };
        }) ?? [],
  });

  const pokemonsWithDescription =
    pokemonByIdQueries?.map(({ data }) => data) ?? [];
  const arePokemonsFilled = pokemonsWithDescription?.every((item) =>
    Boolean(item)
  );

  return {
    arePokemonsFilled,
    count: pokemons?.count,
    pokemons,
    pokemonsWithDescription,
    isFetching,
  };
};

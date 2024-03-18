export interface HeadCell {
  disablePadding: boolean;
  id: keyof PokemonData;
  label: string;
  numeric: boolean;
}

export type Order = "asc" | "desc";

export interface PokemonData {
  _: number;
  name: number;
  id: number;
  base_experience: number;
  height: string;
  weight: number;
}

interface IPokemon {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IGetPokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}

export interface IGetPokemonByIdResponse {
  base_experience: number;
  id: number;
  height: number;
  name: string;
  sprites: string[];
  stats: IStat[];
  weight: number;
}

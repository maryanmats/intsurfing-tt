import {
  IGetPokemonByIdResponse,
  IGetPokemonsResponse,
} from "../../types/types";
import { client } from "../client/client";

export const PokemonsApi = {
  getPokemons: async (limit: number, offset: number) => {
    const { data } = await client.get<IGetPokemonsResponse>(
      `pokemon/?limit=${limit}&offset=${offset}`
    );
    return data;
  },
  getPokemonsById: async (id: string) => {
    const { data } = await client.get<IGetPokemonByIdResponse>(`pokemon/${id}`);
    return data;
  },
};

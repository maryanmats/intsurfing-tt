import axios, { AxiosInstance } from "axios";

export const client = init();

function init(): AxiosInstance {
  const client = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

  return client;
}

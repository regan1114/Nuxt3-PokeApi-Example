import allPokemon from "@/public/json/allPokemon.json";
import { PokemonApiResult } from "~/models";

export default eventHandler<{ query: { begin: number; end: number } }>(
  (event) => {
    const query = getQuery(event);
    const result = allPokemon.results.slice(
      query.begin,
      query.end
    ) as PokemonApiResult[];
    return {
      count: allPokemon.count,
      next: "",
      previous: "",
      results: result,
    };
  }
);

export interface PokemonApiInfo {
  count: number;
  next: string;
  previous: string;
  results: PokemonApiResult[];
}

export interface PokemonApiResult {
  id: string;
  name: string;
  url: string;
  cover: string;
}

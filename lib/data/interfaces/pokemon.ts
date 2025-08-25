export interface Pokemon {
    id: number;
    name: string;
    pic: string;
    types: string [];
    HP: number;
    attack: number;
    defense: number;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}


export interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface TypeBadgeProps {
    name: string;
    url: string;
}

export interface PokemonTypeList {
  type: TypeBadgeProps;
}

export interface PokemonSprites {
  front_default: string;
}

export interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    }
    stats: Stat[];
    types: Type[];
}

export interface PokemonShort {
  name: string;
  url: string;
}




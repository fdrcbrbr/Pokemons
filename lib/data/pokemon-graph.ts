
export interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonSprites {
  sprites: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites[];
}

export interface GraphQLResponse<T> {
  errors?: Array<{ message: string }>;
  data?: T;
}


export interface PokemonListResponse {
  pokemons: Pokemon[];
}


export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  operationName: string = ""
): Promise<GraphQLResponse<T>> {
  const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
  });
  return await result.json();
}

export async function fetchPokemonList(): Promise<GraphQLResponse<PokemonListResponse>> {
  const query = `
    query pokemon_list {
      pokemons: pokemon_v2_pokemon {
        id
        name
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
        sprites: pokemon_v2_pokemonsprites(limit: 1) {
          sprites
        }
      }
    }
  `;
  return fetchGraphQL<PokemonListResponse>(query, {}, "pokemon_list");
}



export function generatePokemonCard(pokemon: Pokemon): string {
  const sprites = JSON.parse(pokemon.sprites[0].sprites);
  const imageUrl = sprites.other["official-artwork"].front_default;
  const types = pokemon.types.map((t) => t.type.name).join(", ");

  return `
    <div class="pokemon-card">
      <h3>${pokemon.name} (#${pokemon.id})</h3>
      <img src="${imageUrl}" alt="${pokemon.name}" />
      <p>Type: ${types}</p>
    </div>
  `;
}


async function main() {
  const response = await fetchPokemonList();
  if (response.errors) {
    console.error(response.errors);
    return;
  }

  if (!response.data) {
    console.error("No data");
    return;
  }

  const pokemons = response.data.pokemons;
  const cardsHTML = pokemons.map(generatePokemonCard).join("\n");

  const container = document.getElementById("pokemon-container");
  if (container) {
    container.innerHTML = cardsHTML;
  } else {
    console.error("pokemon-container not found.");
  }
}

main();
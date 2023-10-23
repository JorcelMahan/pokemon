import { GetStaticProps } from 'next';

import { pokeAPI } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

export default function Home({ pokemons }: Props) {
  return (
    <Layout title='List of pokemons'>
      <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokeAPI.get<PokemonListResponse>('pokemon?limit=150');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

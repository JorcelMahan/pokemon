import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Image } from '@nextui-org/react';

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <div
      className='flex flex-col items-center justify-center'
      onClick={onFavoriteClicked}
    >
      <Card
        className='p-10'
        onClick={() => router.push(`/pokemon/${pokemonId}`)}
        isHoverable
        isPressable
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
          alt='pokemon'
        />
      </Card>
    </div>
  );
};

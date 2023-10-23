import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

import { SmallPokemon } from '@/interfaces';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onPokemonClicked = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <div
      className='flex flex-col items-center justify-center'
      onClick={onPokemonClicked}
    >
      <Card
        className='p-10'
        onClick={() => router.push(`/pokemon/${pokemon.id}`)}
        isHoverable
        isPressable
      >
        <CardBody className='p-1'>
          <Image src={pokemon.img} width={'100%'} height={140} alt='pokemon' />
        </CardBody>
        <CardFooter>
          <div className='flex justify-between'>
            <p className='capitalize'>{pokemon.name}</p>
            <p>#{pokemon.id}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

import { Image } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <div className='flex flex-col items-center justify-center self-center h-calc(100vh - 100px'>
      <h2 className='text-white'>You don't have any favorites yet</h2>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        width={250}
        height={250}
        className='opacity-5'
        alt='no favorites'
      />
    </div>
  );
};

import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer } from '@nextui-org/react';

export const Navbar = () => {
  return (
    <header className='flex w-full flex-row items-center justify-start p-0 px-52'>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='icon of the app'
        width={70}
        height={70}
      />
      <NextLink href='/' className='text-black'>
        Pokemon
      </NextLink>

      <Spacer x={1} />

      <NextLink href='/favorites'>Favorites</NextLink>
    </header>
  );
};

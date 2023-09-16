'use client'
import HeadingLink from '@/components/commons/heading-link/heading-link';
import Card from '@/components/commons/card/card';
import ListForm from '@/components/commons/list-form/list-form';
import { useFetch } from '@/utils/use-fetch';

export default function Home() {
    const { data: pokemons, isLoading, isError } = useFetch('/pokemon');

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    console.log(pokemons, 'pokemons');    

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='List Pokemons' />
            <div className='flex flex-col w-full space-y-4'>
                {pokemons?.results.map((pokemon: any, index: number) => (
                    <Card key={index}>
                        <ListForm title={pokemon.name} value={pokemon.url} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

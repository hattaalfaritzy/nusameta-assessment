'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from 'react-query';
import { queryFetch } from '@/utils/query-fetch';
import { Card, HeadingLink, ListForm, Pagination } from '@/components/commons';

export default function Home() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limitPage = 10;

    const extractPokemonId = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 2];
    };

    const fetchPokemons = async ({ queryKey }: any) => {
        const [_, page] = queryKey;
        const offset = (page - 1) * limitPage;
        return queryFetch('pokemons', `/pokemon?limit=${limitPage}&offset=${offset}`, {}, 'GET');
    };

    const handlePageChange = async (page: number) => {
        await fetchPokemons({ queryKey: ['pokemons', page] });
    };

    const { data, isError, isLoading } = useQuery(['pokemons', currentPage], fetchPokemons);

    if (isError) return <p>Error fetching data</p>;

    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='List Pokemons' />
            <div className='flex flex-col w-full space-y-4'>
                {data?.results?.map((pokemon: any, index: number) => {
                    const pokemonId = extractPokemonId(pokemon.url);
                    return (
                        <Card
                            key={index}
                            onClick={() => {
                                router.push(`/pokemon/${pokemonId}`);
                            }}
                        >
                            <ListForm title={pokemon.name} value={pokemon.url} loading={isLoading} />
                        </Card>
                    );
                })}
            </div>
            <span className='text-white text-base capitalize'>{currentPage}</span>
            <Pagination
                total={data?.count ?? 0}
                itemsPerPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                onClickPage={handlePageChange}
            />
        </div>
    );
}

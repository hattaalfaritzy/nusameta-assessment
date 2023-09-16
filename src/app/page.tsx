'use client';
import Card from '@/components/commons/card/card';
import HeadingLink from '@/components/commons/heading-link/heading-link';
import ListForm from '@/components/commons/list-form/list-form';

export default function Home() {
    return (
        <div className='flex flex-col items-center w-full py--default space-y-8'>
            <HeadingLink title='List Pokemons' />
            <div className='flex flex-col w-full space-y-4'>
                <Card>
                    <ListForm title='Pokemon 1' value='Pokemon 1 Value' />
                </Card>
                <Card>
                    <ListForm title='Pokemon 2' value='Pokemon 2 Value' />
                </Card>
                <Card>
                    <ListForm title='Pokemon 3' value='Pokemon 3 Value' />
                </Card>
            </div>
        </div>
    );
}

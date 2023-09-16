'use client';
import HeadingLink from '@/components/commons/heading-link/heading-link';
import ListForm from '@/components/commons/list-form/list-form';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetailPokemon() {
    const { id } = useParams();
    console.log(id, 'id');
    
    const id_detail = parseInt(id.toString(), 10);
    const [detail, setDetail] = useState([]);

    const getData = async (id: number) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setDetail(data?.results);
    };

    useEffect(() => {
        getData(id_detail);
    }, [id_detail]);

    console.log(detail, 'detail');
    return (
        <div className='flex flex-col justify-start items-start w-full py--default space-y-4'>
            {/* <HeadingLink title='Detail Contact' label={`${detail_contact?.contact_by_pk?.first_name} ${detail_contact?.contact_by_pk?.last_name}`} withBack /> */}
            {/* <ListForm title='First Name' value={detail_contact?.contact_by_pk?.first_name} loading={loading} />
            <ListForm title='Last Name' value={detail_contact?.contact_by_pk?.last_name} loading={loading} />
            <ListForm
                title='Phone'
                loading={loading}
                renderValue={detail_contact?.contact_by_pk?.phones?.map((phone, idx) => (
                    <span key={idx} className='text-black text-xs capitalize'>
                        {phone.number}
                    </span>
                ))}
            /> */}
        </div>
    );
}

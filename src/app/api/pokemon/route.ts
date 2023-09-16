import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
    const data = await res.json();
    
    const baseUrl = "https://pokeapi.co/api/v2";
    
    if (data.results) {
        data.results = data.results.map((pokemon: any) => {
            return {
                ...pokemon,
                url: pokemon.url.replace(baseUrl, "")
            };
        });
    }
    if (data.next) {
        data.next = data.next.replace(baseUrl, "");
    }
    if (data.previous) {
        data.previous = data.previous.replace(baseUrl, "");
    }

    return NextResponse.json(data, { status: 200 });
}

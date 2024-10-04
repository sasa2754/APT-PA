"use client"

import { useEffect, useState } from "react";
import { CardApi } from "@/components/cardApi";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Dragãozinho",
//     description: "Aprendizagem next com o dragãozinho",
// };

interface IData {
    id: number,
    name: string,
    image: string,
    gender: string,
    species: string,
    status: string,
    type: string,
}

const FetchPage = () => {
    const [character, setCharacter] = useState<IData[]>([]);

    useEffect(() => {
      const load = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
        const data = await res.json();
        setCharacter(data.results);
      };
      load();
    }, [])
    

    return (
        <div className="flex items-center justify-center h-screen w-screen flex-col text-white p-5">
            <div className="text-white font-karla bg-neutral-800 flex flex-row flex-wrap max-w-screen gap-5 items-center justify-center max-h-screen">
                <br /><br />
                <h1>Fetch Nativo sla oq</h1>
                <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
                    {character.map((item) => {
                        return (
                            <CardApi key={item.id} nome={item.name} genero={item.gender} species={item.species} status={item.status} type={item.type} image={item.image}/>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default FetchPage;
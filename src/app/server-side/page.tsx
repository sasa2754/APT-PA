import { CardApiServer } from "@/components/cardApiServer";
import Link from "next/link";
import { Suspense } from "react"

type IData = {
    results: {
        id: number;
        name: string;
        gender: string;
        species: string;
        status: string;
        type: string;
    }[]
}

const serverSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data : IData = await res.json()
    console.log(data)

    return (
        <>
        <div className="flex items-center justify-center h-screen w-screen flex-col text-white p-5">
            <div className="text-white font-karla flex flex-row flex-wrap max-w-screen gap-5 items-center justify-center max-h-screen">
                <br /><br />
                <h1>Escolha um personagem</h1>
                <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
                    <Suspense fallback={<div>Loading...</div>}>
                        {data.results.map((item) => {
                            return (
                                <div key={item.id}>
                                    <CardApiServer nome={item.name} link={`/person/${item.id}`}/>
                                </div>
                            )
                        })}
                    </Suspense>
                </div>
                
            </div>
        </div>

        </>
    )
}

export default serverSide;
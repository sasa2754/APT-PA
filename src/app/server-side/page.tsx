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
            <h1>AAAAAAAAAAAAAAAAAAAAAAAA</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data.results.map((item) => {
                    return (
                        <div key={item.id}>
                            {/* <h2 className="text-white">{item.name}</h2>
                            <Link className="text-white" href={`/person/${item.id}`}>ABRIR</Link> */}
                            <CardApiServer nome={item.name} link={`/person/${item.id}`}/>
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}

export default serverSide;
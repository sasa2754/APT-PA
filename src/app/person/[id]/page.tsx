import Image from "next/image";

interface IPerson {
    params: {
        id: string,
    }
}

interface IData {
    id: number,
    name: string,
    image: string,
    gender: string,
    species: string,
    status: string,
    type: string,
}

const Person = async ({params: {id}} : IPerson) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data: IData = await res.json()

    return (
        <div>
            <h1>{data.id}</h1>
            <h2>{data.name}</h2>
            <h3>{data.status}</h3>
            <h3>{data.species}</h3>
            <Image src={data.image} width={300} height={300} alt="Imagem" priority></Image>
        </div>
    )
}

export default Person;
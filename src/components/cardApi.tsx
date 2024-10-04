import { ROUTES } from "@/constants/routes";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

interface ICard {
    // imagem: StaticImageData,
    nome: string,
    genero: string,
    species: string,
    status: string,
    type: string,
    image: string,
}

export const CardApi = ({ nome, genero, species, status, type, image} : ICard) => {
    return (
        <div className=" text-black rounded-xl max-w-sm object-cover items-center flex flex-col h-96 w-96 justify-between bg-neutral-50 shadow-xl transition ease-in-out hover:scale-110">
            <div className="flex flex-col items-center">
                <h1>{nome}</h1>
                <h2>{species}</h2>
                <h2>{genero}</h2>
                <h2>{type}</h2>
            </div>
            <Image className="w-48 h-48" src={image} width={100} height={100} alt="imagem da api" priority={true}></Image>

        </div>
    )
}
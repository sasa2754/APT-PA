import { ROUTES } from "@/constants/routes";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

interface ICard {
    // imagem: StaticImageData,
    nome: string,
    link: string

}

export const CardApiServer = ({nome, link} : ICard) => {
    return (
        <Link href={link}>
            <div className=" text-black rounded-xl max-w-sm object-cover items-center flex flex-col p-4 w-96 justify-between bg-neutral-50 shadow-xl transition ease-in-out hover:scale-110">
                <div className="flex flex-col items-center">
                    <h1>{nome}</h1>
                    
                </div>
            </div>
        </Link>
    )
}
import { ROUTES } from "@/constants/routes";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

interface ICard {
    imagem: StaticImageData,
    cor: string,
    corText: string,
    tempo: string,
    titulo: string,
    texto: string,
    read: string,
    views: string,
    comments: string
}

export const Card = ({imagem, cor, corText, tempo, titulo, texto, read, views, comments} : ICard) => {
    return (
        <div className="rounded-xl max-w-sm object-cover flex flex-col h-[500px] justify-between bg-neutral-50 shadow-xl transition ease-in-out hover:scale-110">
            
            <div className="flex items-center flex-col">
                <Image src={imagem} alt="imagem" className="w-full rounded-t-xl h-48 mb-4"/>
                <h4 className={`${corText}`}>{tempo}</h4>
                <h1 className="text-xl font-bold">{titulo}</h1>
            </div>
            <div className="max-h-80 overflow-auto">
                <p className="text-neutral-500 text-center p-4">{texto}</p>
            </div>

            <div className={`${cor} text-white rounded-b-xl flex justify-around flex-wrap flex-row gap-3 p-3`}>
                <div className="flex flex-col items-center min-w-12">
                    <h1>{read}m</h1>
                    <h3>READ</h3>
                </div>
                <div className="flex flex-col items-center min-w-12 px-5 border-x border-x-slate-400">
                    <h1>{views}</h1>
                    <h3>VIEWS</h3>
                </div>
                <div className="flex flex-col min-w-12 items-center">
                    <h1>{comments}</h1>
                    <h3>COMMENTS</h3>
                </div>
            </div>
        </div>
    )
}
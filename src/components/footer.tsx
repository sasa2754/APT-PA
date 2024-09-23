import Link from "next/link";


interface IFooter {
    pag?: string;
    contact: number
}

export const Footer = ({pag, contact} : IFooter) => {

    let linkZipzop = `https://wa.me/${contact}?text=Olá,%20Tudo%20bem?`;

    return (
        <>
            <footer className="text-white bg-stone-950 font-karla fixed bottom-0 w-full flex gap-2 p-1">
                <h3>{pag}</h3>
                <a href={linkZipzop} target="_blank">Contato</a>
            </footer>
        </>
    )
}
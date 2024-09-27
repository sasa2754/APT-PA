import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: string
}

export const Menu = ({op1, op2 ,op3, op4} : IMenu) => {
    return (
        <nav className="text-white shadow-xl bg-stone-950 font-karla flex flex-wrap gap-3 items-center justify-between fixed w-full p-2">
            <h1 className="font-semibold">Dragãozinho</h1>
            <div className="flex gap-2">
                <Link href={ROUTES.home} className="cursor-pointer hover:text-neutral-300">{op1}</Link>
                <Link href={ROUTES.maths} className="cursor-pointer hover:text-neutral-300">{op2}</Link>
                <p className="cursor-pointer hover:text-neutral-300">{op3}</p>
                <p className="cursor-pointer hover:text-neutral-300">{op4}</p>
            </div>
        </nav>
    )
}
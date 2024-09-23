import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
    op4: string
}

export const Menu = ({op1, op2 ,op3, op4} : IMenu) => {
    return (
        <nav className="text-white bg-stone-950 font-karla flex flex-wrap gap-3 items-center justify-between fixed w-full p-2">
            <h1 className="font-semibold">Dragãozinho</h1>
            <div className="flex gap-2">
                <p>{op1}</p>
                <p>{op2}</p>
                <p>{op3}</p>
                <p>{op4}</p>
            </div>
        </nav>
    )
}
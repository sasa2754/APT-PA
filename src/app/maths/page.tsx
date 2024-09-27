"use client"
import React, { useState } from "react";

const Maths:React.FC = () => {
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [res, setRes] = useState<number | undefined>(0);
    const msgError = "Digite um número válido";

    const handleSoma = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if(!isNaN(n1) && !isNaN(n2)) {
            setRes(n1+n2);
        }
        else {
            setRes(undefined);
        }
    };
    const handleSub = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if(!isNaN(n1) && !isNaN(n2)) {
            setRes(n1-n2);
        }
        else {
            setRes(undefined);
        }
    };
    const handleMult = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if(!isNaN(n1) && !isNaN(n2)) {
            setRes(n1*n2);
        }
        else {
            setRes(undefined);
        }
    };
    const handleDiv = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if(!isNaN(n1) && !isNaN(n2)) {
            if (n2 !== 0) {
                setRes(n1/n2);
            }
            else {
                setRes(undefined);
            }
        }
        else {
            setRes(undefined);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="text-white font-karla bg-neutral-800 flex justify-center flex-col items-center gap-3 py-40 p-8 rounded-lg shadow-xl">
                <h1>Use client com controle de estado</h1>
                <div className="flex flex-col items-center">
                    <label htmlFor="n1">Número 1</label>
                    <input className="text-black" id="n1" type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>
                </div>
                <div className="flex flex-col items-center">
                    <label htmlFor="n2">Número 2</label>
                    <input className="text-black" id="n2" type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/>
                </div>
                <div className="flex flex-row justify-center items-center gap-2 mt-4 flex-wrap">
                    <button className="border rounded-md p-1 hover:bg-neutral-600 w-28" onClick={handleSoma}>SOMAR</button>
                    <button className="border rounded-md p-1 hover:bg-neutral-600 w-28" onClick={handleSub}>SUBTRAIR</button>
                    <button className="border rounded-md p-1 hover:bg-neutral-600 w-28" onClick={handleMult}>MULTIPLICAR</button>
                    <button className="border rounded-md p-1 hover:bg-neutral-600 w-28" onClick={handleDiv}>DIVIDIR</button>
                </div>
                {!isNaN(res ?? NaN) ? res: msgError}
            </div>
        </div>
    );
}

export default Maths
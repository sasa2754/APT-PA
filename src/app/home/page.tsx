import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dragãozinho",
  description: "Aprendizagem next com o dragãozinho",
};

export default function Home() {

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="text-white font-karla bg-neutral-800 flex justify-center flex-col items-center gap-3 py-40 p-8 rounded-lg shadow-xl">
        <label htmlFor="login" className="text-xl">Login</label>
        <input className="border-solid border-2 border-black rounded-md p-1 w-96 text-black" type="text" name="login" placeholder="login"/>
        <label htmlFor="senha" className="text-xl">Senha</label>
        <input className="border-solid border-2 border-black rounded-md p-1 w-96 text-black" type="password" name="senha" placeholder="senha"/>
        <button className="rounded-md p-1 w-96 bg-neutral-400 text-black shadow hover:bg-neutral-500 mt-4">Entrar</button>
      </div>
    </div>
  );
}

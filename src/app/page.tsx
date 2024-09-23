import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dragãozinho",
  description: "Aprendizagem next com o dragãozinho",
};

export default function Home() {

  const style = {
    meio: "flex justify-center items-center w-screen h-screen",
    form: "text-white font-karla bg-neutral-800 flex justify-center flex-col items-center gap-3 py-40 p-8 rounded-lg shadow-xl",
    input: "border-solid border-2 border-black rounded-md p-1 w-96",
    botao: "rounded-md p-1 w-96 bg-neutral-400 text-black"
  }
  return (
    <div className= {style.meio} >
      <div className={style.form}>
        <label htmlFor="login">Login</label>
        <input className={style.input} type="text" name="login" placeholder="login"/>
        <label htmlFor="senha">Senha</label>
        <input className={style.input} type="password" name="senha" placeholder="senha"/>
        <button className={style.botao}>Entrar</button>
      </div>
    </div>
  );
}

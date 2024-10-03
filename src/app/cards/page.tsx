import Image from "next/image";
import type { Metadata } from "next";
import { Card } from "@/components/card";
import imagem1 from "../../../public/image1.jpg"
import imagem2 from "../../../public/image2.jpg"
import imagem3 from "../../../public/image3.jpg"

export const metadata: Metadata = {
  title: "Dragãozinho",
  description: "Aprendizagem next com o dragãozinho",
};

export default function Cards() {
    
  return (
    <div className="flex justify-center items-center w-screen h-screen p-2 overflow-x-hidden">
        <div className="flex gap-8 flex-wrap items-center justify-center max-w-full max-h-full pt-12 pb-12">
            <Card imagem={imagem1} cor="bg-pink-500" corText="text-pink-500" tempo="4 days ago" titulo="Post One" read="4" views="5123" comments="32" texto="Uma cidade consiste em um núcleo populacional caracterizado por um espaço amplo onde ocorrem relações e fenômenos sociais, culturais e econômicos. Existem vários modelos de cidade, com grandes diferenças entre eles."/>
            <Card imagem={imagem2} cor="bg-orange-500" corText="text-orange-500" tempo="4 days ago" titulo="Post Two" read="4" views="5123" comments="32" texto="Uma cidade consiste em um núcleo populacional caracterizado por um espaço amplo onde ocorrem relações e fenômenos sociais, culturais e econômicos. Existem vários modelos de cidade, com grandes diferenças entre eles, e por esse motivo é difícil chegar a uma definição concreta para cada um desses modelos.Uma cidade consiste em um núcleo populacional caracterizado por um espaço amplo onde ocorrem relações e fenômenos sociais, culturais e econômicos. Existem vários modelos de cidade, com grandes diferenças entre eles, e por esse motivo é difícil chegar a uma definição concreta para cada um desses modelos. Uma cidade consiste em um núcleo populacional caracterizado por um espaço amplo onde ocorrem relações e fenômenos sociais, culturais e econômicos. Existem vários modelos de cidade, com grandes diferenças entre eles, e por esse motivo é difícil chegar a uma definição concreta para cada um desses modelos."/>
            <Card imagem={imagem3} cor="bg-green-500" corText="text-green-500" tempo="4 days ago" titulo="Post Three" read="4" views="5123" comments="32" texto="Uma cidade consiste em um núcleo populacional caracterizado por um espaço amplo onde ocorrem relações e fenômenos sociais, culturais e econômicos. Existem vários modelos de cidade, com grandes diferenças entre eles, e por esse motivo é difícil chegar a uma definição concreta para cada um desses modelos."/>
        </div>
    </div>
  );
}

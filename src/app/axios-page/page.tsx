"use client"

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/constants/api";
import { CardApi } from "@/components/cardApi";


interface IData {
    id: number,
    name: string,
    image: string,
    gender: string,
    species: string,
    status: string,
    type: string,
}


const AxiosPage = () => {
    const [data, setData] = useState<IData[]>([]);
    const [erro, setErro] = useState(false);
    const [erroMessage, setErroMessage] = useState<string>("Página não encontrada");
    const [page, setPage] = useState<string>("");


    useEffect(() => {
      api.get(`/character/?page=${page}`).then((res) => {
        setErro(false);
        console.log(res.data.results);
        setData(res.data.results);
      }).catch((error) => {
        if(error.response.status == 404) {
            setErroMessage("Erro");
        }
        setErro(true);
    })
    
    }, [page])
    

    return (
        <div className="text-white">
            {erro && <h5>Página não encontrada</h5>}
            <h1>Pagina com axios</h1>
            <div className="flex items-center justify-center h-screen w-screen flex-col text-white p-5">
                <div className="text-white font-karla flex flex-row flex-wrap max-w-screen gap-5 items-center justify-center max-h-screen">
                    <br /><br /><br />
                    <input className="border-solid border-2 border-black rounded-md p-1 w-96 text-black mt-5" type="text" value={page} onChange={(e) => setPage(e.target.value)} placeholder="1/42"/>
                    <div className="flex flex-row gap-5 flex-wrap items-center justify-center">
                        {data.map((item, index) => {
                            return (
                                <CardApi key={item.id} nome={item.name} genero={item.gender} species={item.species} status={item.status} type={item.type} image={item.image}/>
                            )
                        })}
                </div>
                
            </div>
        </div>

            
        </div>
    )
};

export default AxiosPage;
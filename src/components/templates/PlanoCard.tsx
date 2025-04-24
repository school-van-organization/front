import React from 'react';
import { Link } from 'react-router-dom';

type planos = {
    titulo: string,
    preco: string,
    beneficios:string[],
}

export default function PlanoCard({ titulo, preco, beneficios }:planos) {
  return (
    <div className="grid grid-rows-12 p-2 max-w-[350px] w-full h-[740px] rounded-2xl  bg-linear-to-r from-yellow-orange-500 to-yellow-light-500">
      <h1 className="text-center text-2xl font-bold">{titulo}</h1>
      <p className="text-3xl text-center font-bold font-sans">{preco}</p>
      <ul className="row-span-6 flex flex-col gap-2 p-6 mt-2 list-disc">
        {beneficios.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link
        to="/cadastro"
        className="m-auto row-start-12 row-span-2 hover:bg-bg-dark hover:border-3 border-2 border-dark hover:border-yellow-orange-500 hover:text-yellow-orange-500 bg-yellow-orange-500 w-[153px] text-center pt-2 pb-2 text-black rounded-2xl"
      >
        assinar
      </Link>
    </div>
  );
}

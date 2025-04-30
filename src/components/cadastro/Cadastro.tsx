import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Cadastro.css';
import Spin from '../templates/Spin';

export default function Cadastro() {
    const navigate = useNavigate();
  const [proximo, setProximo] = useState(false);
  const [animacao, setAnimacao] = useState(false);
  const [cadastrar , setCadastrar] =  useState(false);

  function api (){ 
    setCadastrar(true)
    setTimeout(() => {
        navigate("/login");
    }, 1000)
     
  }

  function animar() {
    setAnimacao(true); // Inicia a animação
    setProximo(!proximo); // Alterna entre os campos

    setTimeout(() => {
      setAnimacao(false);
    }, 1000); 
  }

  function Formulario(){
    return(
    <form
        className={`max-w-[500px] w-full ${
          animacao ? 'cadastro-form' : ''
        }`}
        id='form'
        onSubmit={(e) => e.preventDefault()}
      >
       
         { <ExibirCampos/> }
         
       
        {proximo === false ? (
          <button
            className='bg-yellow-orange-500 w-full pt-2 pb-2 rounded-2xl'
            onClick={animar}
          >
            Próximo
          </button>
        ) : (
          <div className='flex gap-2'>
            <button
              className='bg-yellow-orange-500 w-full pt-2 pb-2 rounded-2xl'
              onClick={animar}
            >
              Voltar
            </button>
            <button
              className='bg-yellow-orange-500 w-full pt-2 pb-2 rounded-2xl'
              onClick={api}
            >
              Cadastrar
            </button>
          </div>
        )}
      </form>
    )
  }

  function ExibirCampos() {
    return proximo ? (
      <>
        <label htmlFor='organizacao' className='text-white'>
          Dê um nome à sua organização:
        </label>
        <input
          type='text'
          id='organizacao'
          className='border p-2 mt-4 mb-6 bg-white rounded-xl w-full'
        />
      </>
    ) : (
      <>
        <label htmlFor='nome' className='text-yellow-orange-500'>
          Nome
        </label>
        <input
          type='text'
          id='nome'
          className='border p-2 mt-4 mb-6 bg-white rounded-xl w-full'
          placeholder='Nome'
        />
        <label htmlFor='email' className='w-full text-yellow-orange-500'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          className='border p-2 mt-4 mb-6 bg-white rounded-xl w-full'
          placeholder='Email'
        />
        <label htmlFor='senha' className='w-full text-yellow-orange-500'>
          Senha
        </label>
        <input
          type='password'
          id='senha'
          className='text-black border p-2 mt-4 mb-6 bg-white rounded-xl w-full'
          placeholder='Senha'
        />
        <label htmlFor='confirma_senha' className='w-full text-yellow-orange-500'>
          Confirmar Senha:
        </label>
        <input
          type='password'
          id='confirma_senha'
          className='border p-2 mt-4 mb-6 bg-white rounded-xl w-full'
          placeholder='Confirmar Senha'
        />
      </>
    );
  }

  return (
    <div className='col-span-9 flex flex-col pt-10 items-center'>
      <h1 className='text-yellow-orange-500 text-4xl font-light mb-3'>Cadastro</h1>
      { cadastrar ? '': <Formulario/>}
      { cadastrar && <Spin/>}
    </div>
  );
}

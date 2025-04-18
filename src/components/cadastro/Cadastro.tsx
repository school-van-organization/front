import React from 'react'

export default function Cadastro(){
    return( 
        <div className="col-span-9 flex flex-col pt-10 items-center">
            <h1 className="text-yellow-orange-500 text-4xl font-light mb-3  ">Cadastro</h1>
            <form className='max-w-[500px] w-full'>
                    <label htmlFor="nome" className='text-yellow-orange-500'>
                        Nome
                    </label>
                    <input type="text" id="nome" className="border p-2 mt-4 mb-6 bg-white rounded-xl w-full" placeholder='e-mail' />
                    <label htmlFor="email" className='w-full text-yellow-orange-500'>
                        Email:
                    </label>
                    <input type="email" id="email" className="border p-2 mt-4 mb-6 bg-white rounded-xl w-full"  placeholder='senha'/>
                    <label htmlFor="senha" className='w-full text-yellow-orange-500'>
                        Senha
                    </label> 
                    <input type="password" id="senha" className=" text-black border p-2 mt-4 mb-6  bg-white rounded-xl w-full"  placeholder='senha'/>
                    <label htmlFor="confirma_senha" className='w-full text-yellow-orange-500'>
                        Confirmar Senha:
                    </label>
                    <input type="password" id="confirma_senha" className="border p-2 mt-4 mb-6 bg-white rounded-xl w-full"  placeholder='senha'/>
                <button className='bg-yellow-orange-500 w-full pt-2 pb-2 rounded-2xl'>
                   Cadastra-se
                </button>
            </form>
        </div>
    )
}
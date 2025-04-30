import React from 'react'
import logo from '../assets/scholvan.png'
import { Link } from 'react-router-dom';
import '../main/App.css'

export default function Login(){
    return(
       <div className='grid grid-cols-12 h-[100vh]'>

            <div className='col-start-1 col-span-3 flex justify-start flex-col items-center gap-8 rounded-br-[150px] border border-yellow-orange-500 pt-20 '>
                <div className=' flex flex-col  items-center  w-full'>
                    <img src={logo} alt="Logo" className='w-[150px] block m-auto' />
                    <p className='text-yellow-orange-500 text-xl font-semibold text-center'>School Van</p>
                    <p className='text-yellow-orange-500 text-sm w-[250px] text-center'>
                    seu gerenciador de alunos de van prático
                    </p>
                </div>
                <Link to="/cadastro" className='hover:bg-bg-dark hover:border-3 hover:border-yellow-orange-500 hover:text-yellow-orange-500 bg-yellow-orange-500 w-[153px] text-center pt-2 pb-2  text-black rounded-2xl'>
                    cadastra-se
                </Link>
            </div>
            <div className="col-span-9 flex flex-col pt-20 items-center">
                <h1 className="text-yellow-orange-500 text-4xl font-light mb-6  ">Login</h1>
                <h2 className='text-yellow-orange-500 text-xl font-light mb-6'>Bem vindo(a) de volta!</h2>
                <form className='flex flex-col gap-10 max-w-[500px] w-full'>
                    <div className='flex flex-col '>
                        <label htmlFor="" className='text-yellow-orange-500'>
                            E-mail:
                        </label>
                        <input type="text" className="border p-2 mt-4 mb-6 bg-white rounded-xl w-full" placeholder='e-mail' />
                        <label htmlFor="" className='w-full text-yellow-orange-500'>
                            Senha:
                        </label>
                        <input type="password" className="border p-2 mt-4 mb-6 bg-white rounded-xl w-full"  placeholder='senha'/>
                    </div>
                    <button className='hover:bg-bg-dark hover:text-yellow-orange-500 hover:border-4 hover:border-yellow-orange-500 bg-yellow-orange-500 w-full pt-2 pb-2 rounded-2xl'>
                        Login
                    </button>
                </form>
            </div>
       </div> 
    )
}
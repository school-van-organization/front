import './LadingPage.css'
import logo from '../assets/scholvan.png'
import notebook from '../assets/notebook.png'
import bus from  '../assets/bus.png'
import phone from '../assets/phone.png'
import child from '../assets/child.png'
import bell from '../assets/bell.png'
import contract from '../assets/contract.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header className=' flex flex-col md:flex-row items-center gap-10 w-full px-10'>
          <div className=' flex flex-col  items-center  w-full'>
            <img src={logo} alt="Logo" className='w-[150px] block m-auto' />
            <p className='text-yellow-orange-500 text-xl font-semibold text-center'>School Van</p>
            <p className='text-yellow-orange-500 text-sm w-[250px] text-center'>
              seu gerenciador de alunos de van prático
            </p>
          </div>
          <div className=' flex justify-center  w-full'>
            <p className='text-yellow-orange-500 text-center max-w-[500px] w-full text-3xl mb-4'>
              Gerencie sua van escolar com Facilidade
            </p>
          </div>
          <div className='flex gap-2  justify-center md:justify-end items-center w-full '>
              <Link to="/login" className='hover:bg-bg-dark hover:border-3 hover:border-yellow-orange-500 hover:text-yellow-orange-500 bg-yellow-orange-500 w-[153px] text-center pt-2 pb-2  text-black rounded-2xl'>
                <span>
                  login
                </span>
              </Link>
          
              <Link to="/cadastro" className='hover:bg-bg-dark hover:border-3 hover:border-yellow-orange-500 hover:text-yellow-orange-500 bg-yellow-orange-500 w-[153px] text-center pt-2 pb-2  text-black rounded-2xl'>
                cadastra-se
              </Link>
          </div>
      </header>
      <div className='main-ladingpage '>
          <section className='grid grid-cols-1 md:grid-cols-2'>
             <div  className='flex flex-col items-center  gap-4 p-10'>
              <p className='text-yellow-orange-500 w-full md:w-9/12 md:text-2xl '>
                Otimize seu tempo e acompanhe seus alunos e responsáveis de forma prática e eficiente
              </p>
              <p className='md:text-1xl w-full md:w-9/12 text-white'>
                Nosso sistema web e mobile foi desenvolvido para simplificar a rotina dos motoristas de van escolar. Com ele, você pode gerenciar alunos, responsáveis e pagamentos sem complicação.
              </p>
            
             </div>
            <div >
              <img src={bus} alt="bus" className='w-[80%] mx-auto imagem'/>
            </div>
          </section>
          <section className='mt-20'>
            <div className='w-[60%] text-2xl m-auto'>
              <h2 className='text-yellow-orange-500 text-center md:text-left '>Serviços oferecidos: </h2>
            </div>
            <div className='flex flex-col md:flex-row md:justify-center items-center gap-20 md:gap-[10%] mt-10  '>
              <div className='grid grid-rows-3 bg-yellow-orange-500 h-[319px] w-[300px] rounded-3xl max-w-full p-5 hover:scale-110 transition delay-150 '>
                <h3 className='text-black text-[1.2em] text-center '> Gerenciamento de Alunos</h3>
                <p className='text-black '>Cadastro, exclusão e edição de alunos e responsáveis</p>
                <div className='bg-yellow-light-500 rounded-full w-max p-3 h-max'>
                  <img src={child} alt="crianças"  />
                </div>
              </div>
              <div className='grid grid-rows-3 bg-yellow-orange-500 h-[319px] w-[300px] rounded-3xl max-w-full p-5 hover:scale-110 transition delay-150 '>
                <h3 className='text-black text-[1.2em] text-center'> Notificações</h3>
                <p className='text-black row-span-3'>Aviso para data de  pagamentos e controle de falta de alunos</p>
                <div className='bg-yellow-light-500 rounded-full w-max p-3 h-max'>
                  <img src={bell} alt="crianças"  />
                </div>
              </div>
              <div className='grid grid-rows-3 bg-yellow-orange-500 h-[319px] w-[300px] rounded-3xl max-w-full p-5 hover:scale-110 transition delay-150 '>
                <h3 className='text-black text-[1.2em] text-center'> Gerar Contrato</h3>
                <p className='text-black row-span-3'>Aviso para data de pagamentos e controle de falta de alunos</p>
                <div className='bg-yellow-light-500 rounded-full w-max p-3 h-max'>
                  <img src={contract} alt="crianças" width={50} />
                </div>
              </div>

            </div>
          </section>
          <section className='flex flex-col md:flex-row md:justify-evenly w-full mt-10 md:mt-20 items-center gap-8 p-4'>
  
              {/* Notebook */}
              <div className="relative w-[250px] md:w-[300px] h-[250px] md:h-[350px] ">
                <div className='absolute z-0 bg-yellow-orange-500 rotate-45 rounded-4xl w-[250px] h-[200px] md:h-[300px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
                <img 
                  src={notebook} 
                  alt="notebook" 
                  className='relative z-20 w-[250px] md:w-[350px]  md:-translate-x-10 md:translate-y-9  -translate-x-5  translate-y-3 ' 
                />              
              </div>

              {/* Phone */}
              <div className="relative w-[250px] md:w-[300px] h-[250px] md:h-[350px]">
                <div className='absolute z-0 bg-yellow-orange-500 rotate-45 rounded-4xl w-[250px] h-[200px] md:h-[300px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>  
                <img 
                  src={phone} 
                  alt="phone" 
                  className='relative z-20 w-[250px] md:w-[350px] md:-translate-x-10 md:translate-y-4  translate-y-3' 
                />              
              </div>

          </section>
          <footer className='p-10 text-white'>
             © 2025 School Van. Todos os direitos reservados.
          </footer>
      </div>
  
    </>
  )
}

export default App

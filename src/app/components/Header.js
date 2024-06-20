import React from 'react'


export default function Header() {
  return (
    <header className='bg-claro flex flex-col items-center'>
        <div className='  max-w-[1050px] w-full justify-between flex  text-slate-800 pt-4 pb-4 pl-7 pr-7 md:justify-center'>


        <h1 className='text-verde text-xl'>&lt;Caua Ntt/&gt; </h1>
        <div className='flex gap-10 text-white font-light md:hidden'>

            <p className='cursor-pointer'>Início</p>
            <p className='cursor-pointer'>Sobre mim</p>
            <p className='cursor-pointer'>Projetos</p>
            <p className='cursor-pointer'>Serviços</p>
            <p className='cursor-pointer'>Habilidades</p>
                
        </div>


        </div>
    </header>
  )
}


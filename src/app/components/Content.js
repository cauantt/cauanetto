import React from 'react'
import Button from './Button'

import Image from 'next/image';

export default function Content() {
  return (

    /*CONTENT*/ 
    <section className='content bg-escuro flex flex-col items-center'>

    
         <div className='default max-w-[1050px] w-full justify-between flex pl-7 pr-7  '>

            <div className='div1 flex justify-between w-full md:flex-col-reverse md:items-center md:pt-10 md:pb-14 md:gap-10'>

                <div className='left flex flex-col gap-7 justify-center h-full'>

                    <div className='flex flex-col gap-2'> 
                        <p>Olá, eu sou</p>
                        <h1 className='text-verde text-5xl font-light'>Cauã Netto</h1>
                    </div>

                    <h2 className='font-light'>Desenvolvedor Frontend.</h2>
                    <Button text="Baixar currículo"/>

                </div>

                <div className='right flex'>

                    <Image src='/image.svg' alt='Imagem' width={400} height={400} />

                </div>
                
            </div>





         </div>
        
    </section>
  )
}

import React from 'react'
import Button from './lib/Button'
import Image from 'next/image';
import Contact from './lib/Contact';
import logo from "@/app/assets/image.svg";
import instagram from "@/app/assets/instagram.svg";
import mail from "@/app/assets/mail.svg";
import phone from "@/app/assets/phone.svg";
import smile from "@/app/assets/smile.svg";

export default function Content() {

    



  return (

    /*CONTENT*/ 
    <section className='content bg-escuro flex justify-center items-center mb-96'>

    
         <div className='default max-w-[1050px] w-full justify-between flex pl-7 pr-7 flex-col items-center '>

            <div className='div1 flex justify-between items-center w-full md:flex-col-reverse md:items-center md:pt-10 md:pb-14 md:gap-10'>

                <div className='left flex flex-col gap-7 justify-center h-full'>

                    <div className='flex flex-col gap-2'> 
                        <p>Olá, eu sou</p>
                        <h1 className='text-verde text-5xl font-light'>Cauã Netto</h1>
                    </div>

                    <h2 className='font-light'>Desenvolvedor Frontend.</h2>
                    <Button text="Baixar currículo"/>

                </div>

                <div className='right flex'>

                    <Image src={logo} alt='Imagem' width={400} height={400} />

                </div>
                
            </div>

            <div className='div2 flex mt-20 flex-col justify-center items-center gap-10 text-center' >

                  <p className='text-verde text-2xl'>Sobre mim</p>

                  <p className=''>Olá! Sou o Cauã Netto, um entusiasta de Ciência da Computação, mergulhado no universo do desenvolvimento web. Atualmente, estou focado principalmente no front-end,
                  desenvolvendo sites responsivos em <span className='text-verde'>Next.js</span> </p>

                  <div className='flex gap-32'>
                  <Contact imageUrl={smile} type="Nome" cont="Cauã Netto"/>
                    <Contact imageUrl={mail} type="E-mail" cont="cauacerqueiranetto2022@gmail.com"/>
                     <Contact imageUrl={instagram} type="Instagram" cont="@caua_ntt"/>
                    <Contact imageUrl={phone} type="Telefone" cont="(64) 98123-1198"/>

                  </div>


            </div>





         </div>
        
    </section>
  )
}

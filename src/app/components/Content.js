import React from 'react'
import Button from './lib/Button'
import Image from 'next/image';
import Contact from './lib/Contact';
import logo from "@/app/assets/image.svg";
import instagram from "@/app/assets/instagram.svg";
import mail from "@/app/assets/mail.svg";
import phone from "@/app/assets/phone.svg";
import smile from "@/app/assets/smile.svg";
import Project from './lib/Project';
import amor from "@/app/assets/amor.png";
import Service from './lib/Service';
import code from  "@/app/assets/code.svg";
import smartphone from  "@/app/assets/smartphone.svg";
import figma from  "@/app/assets/figma.svg";
import Hability from './lib/Hability';
import tailwind from "@/app/assets/tailwind.svg";
import next from "@/app/assets/next.svg";
import html from "@/app/assets/html.svg";
import react1 from "@/app/assets/react.svg";
import javascript from "@/app/assets/javascript.svg";
import css from "@/app/assets/css.svg";
import Footer from './Footer';
import costs from "@/app/assets/costs.png";
import studio from "@/app/assets/studio.png";
import login from "@/app/assets/login.png";
import jordan from "@/app/assets/jordan.png";
import Button1 from './lib/Button1';
import Header from './Header';


export default function Content() {

    



  return (

    /*CONTENT*/ 
    <section className='content bg-escuro flex justify-center items-center  '>

    
         <div className='default max-w-[1050px] w-full  flex pl-7 pr-7 flex-col items-center mt-10  '>

            <div id="inicio" className='div1 flex justify-between items-center w-full md:flex-col-reverse md:items-center md:pt-10 md:pb-14 md:gap-10 md:justify-center'>

                <div className='left flex flex-col gap-4 justify-center h-full lg:items-center'>

                    <div className='flex flex-col gap-2 lg: '> 
                        <p className='lg: ml-10'>Olá, eu sou</p>
                        <h1 className='text-verde text-5xl font-light'>Cauã Netto</h1>
                    </div>

                    <h2 className='font-light'>Desenvolvedor Frontend.</h2>
                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1OfvIqC7aAtOe6uwvZ1kD_zD-S--Acns3&export=download">
                        <div>
                                    <button  className='bg-verde w-44 h-8 font-light rounded-[4px] text-escuro 
                                    rounded-md text-sm xl:w-32'>Baixar currículo</button>
                            </div>
                    </a>

                </div>

                <div className='right flex'>

                    <Image src={logo} alt='Imagem' width={400} height={400} />

                </div>
                
            </div>

            <div id="sobre" className='div2 flex mt-20 flex-col justify-center items-center gap-10 text-center xl:mt-5' >

                <p className='text-verde text-2xl '>Sobre mim</p>

                <div className='flex flex-col items-center gap-2 xl:gap-10'>

                        <p className='w-full text-start lg:w-[300px]'>Olá! Sou o Cauã Netto, um entusiasta de Ciência da Computação, mergulhado no universo do desenvolvimento web. Atualmente, estou focado principalmente no front-end,
                        desenvolvendo sites responsivos em <span className='text-verde'>Next.js</span> </p>

                        <div className='flex gap-11 lg:grid lg:grid-cols-2 lg:gap-10 xl:grid-cols-1 xl:gap-1'>
                        <Contact imageUrl={smile} type="Nome" cont="Cauã Netto"/>
                            <Contact imageUrl={mail} type="E-mail" cont="caua.dev@gmail.com"/>
                            <Contact imageUrl={instagram} type="Instagram" cont="@caua_ntt"/>
                            <Contact imageUrl={phone} type="Telefone" cont="(64) 98123-1198"/>
                        </div>

                        
                </div>

            </div>

            <div id="projetos" className='div3 mt-32 mb-32  flex flex-col text-center gap-14'>

                <p className='text-verde text-2xl'>Projetos</p>

                <div className='grid grid-cols-2 gap-8 xls:grid-cols-1 xls:gap-20'>

                    <div className='flex flex-col '>
                        <Project imageUrl={costs} nome="Costs" tec="React, Javascript"/>
                        
                            <a className="flex gap-5" href="https://github.com/cauantt/Costs">
                                <Button text="Acessar o projeto" />
                                <Button1 text="Acessar repositório"/>
                            </a>
                      
                    </div>

                    <div className='flex flex-col '>
                    <Project imageUrl={studio} nome="Studio Ghibli" tec="React"/>
                        <a className='flex gap-5' href='https://github.com/cauantt/StudioGhibi'>
                            <Button text="Acessar o projeto" />
                            <Button1 text="Acessar repositório"/>
                        </a>
                    </div>

                    <div className='flex flex-col '>
                    <Project imageUrl={login} nome="Login page" tec="React"/>
                        <a className='flex gap-5 ' href='https://github.com/cauantt/login1'>
                            <Button text="Acessar o projeto" />
                            <Button1 text="Acessar repositório"/>
                        </a>
                    </div>

                    
                    <div className='flex flex-col '>
                    <Project imageUrl={jordan} nome="Jordan Shoes" tec="React"/>
                        <a className='flex gap-5' href='https://github.com/cauantt/JordanShoes'>
                            <Button text="Acessar o projeto" />
                            <Button1 text="Acessar repositório"/>
                        </a>
                    </div>
                  
                    
                    

                </div>


            </div>

            <div id="service" className='div4 gap-14 flex flex-col mb-32 '>

                <p className='text-verde text-2xl flex items-center justify-center'>Serviços</p>

                <div className='flex grid grid-flow-col gap-8 xls:grid-flow-row xls:gap-14'>

                    <Service text="Criação de sites" imageUrl={code}/>
                    <Service text="UI / UX Designer" imageUrl={figma}/>
                    <Service text="Sites responsivos" imageUrl={smartphone}/>

                </div>

            </div>

            <div id="habilidades" className='div5 flex flex-col gap-14 mb-32'>

            <p className='text-verde text-2xl flex items-center justify-center'>Habilidades</p>

            <div className='flex grid grid-flow-col gap-8 xls:grid-rows-3 '>
                <Hability imageUrl={html}/>
                <Hability imageUrl={css}/>
                <Hability imageUrl={javascript}/>
                <Hability imageUrl={tailwind}/>
                <Hability imageUrl={react1}/>
                <Hability imageUrl={next}/>

            </div>
             
            </div>

            

         </div>
        
    </section>
  )
}

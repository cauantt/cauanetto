import React from 'react'
import Image from 'next/image'

export default function Contact({imageUrl, type, cont}) {
  return (
    <div className='flex flex-col gap-4 items-center pt-10'>
         <div className='rounded-full bg-claro border border-gray-500 p-3 justify-center items-center'>
           <Image src={imageUrl} alt='Imagem' width={18} height={50} />
         </div>
        <p>{type}</p>
        <h3 className='text-sm w-full'>{cont}</h3>

        
    </div>
  )
}

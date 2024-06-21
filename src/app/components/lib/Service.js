import React from 'react'
import Image from 'next/image'

export default function Service({imageUrl, text}) {
  return (
    <div className='bg-claro h-40 [width:292px] border-b pl-5 border-verde flex flex-col gap-5 justify-center '>
        
        <Image src={imageUrl} alt='Imagem' width={40} height={50} />
        <p className=' w-16 text-lg'>{text}</p>

    </div>
  )
}

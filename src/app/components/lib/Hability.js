import React from 'react'
import Image from 'next/image'

export default function Hability({imageUrl}) {
  return (
    <div className='bg-claro h-32 [width:130px]  flex justify-center items-center'> 
      <Image src={imageUrl} alt='Imagem' width={60} height={50} />
    </div>
  )
}

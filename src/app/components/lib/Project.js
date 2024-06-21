import React from 'react'
import Button from './Button'
import Button1 from './Button1'
import Image from 'next/image'

export default function Project({nome, tec, imageUrl }) {
  return (


    <div className='flex flex-col items-start gap-5'>
        <div className='bg-white [width:460px] [height:247px] gap-4 xl:[width:280px] xl:[height:122px]'>
        <Image src={imageUrl} alt='Imagem' width={460} height={200} />

        </div>
        <p className='text-lg'><strong>{nome}</strong></p>
        <p className='text-verde'>{tec}</p>
        <div className='flex gap-5'>
            


        </div>


    </div>
  )
}

import React from 'react'
import Image from 'next/image';

const MediumCard = ({img, title}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image className='w-full h-full object-cover rounded-xl' src={img} layout="fill" width={1152} height={1152} />
        </div>
        <h3 className='text-2xl mt-3 '>{title}</h3>
    </div>
  )
}

export default MediumCard
'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import Image from 'next/image'
import back from '../img/back.png'

export default function HomeButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.push("../")} className='flex pl-5 gap-1 font-semibold'>
      <Image src={back} height={18} width={18} alt="back" className='object-contain'/>
      <span>Games</span>
    </div>
  )
}

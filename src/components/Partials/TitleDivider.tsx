'use client'
import React from 'react'
import { Fade } from 'react-awesome-reveal';


type TitleDivider = {
    title: string;
};

export default function TitleDivider({ title}: TitleDivider) {
  return (
    <div className="bg-brand-yellow-50 text-center font-bold text-2xl py-2 mt-10 mb-14 col-span-12">
         <Fade direction="up" duration={2000}>                
              <p className="text-white">{title}</p>
          </Fade>
    </div>
  )
}

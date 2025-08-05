'use client'
import { Fade } from 'react-awesome-reveal'
import { Container } from '../Partials/Container'

export default function Subheader({ title, image, subTitle  }: { title: string, image: string, subTitle: string}) {
  return (
    <div
      className="h-[250px] md:h-[300px] bg-black bg-cover w-full bg-center relative bg-no-repeat flex items-end pb-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-black/0"></span>
      <div className="main_container">
        <div className="relative py-4">
          <Fade direction="up" duration={2000}>                
            <h2 className="text-3xl font-black text-center md:text-start text-white">
              {title}
            </h2>
          </Fade>
          <div className="flex gap-1 mb-2 text-white text-lg text-center md:text-start ">
            <p className='font-light'>Você esta em -</p> 
            <p className='font-black'>{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

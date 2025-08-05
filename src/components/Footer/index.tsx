/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import { Copyright } from './Copyright'
import Icon from '../Adapters/Icon'
import { Fade } from 'react-awesome-reveal'

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-brand-yellow-50 pt-10 md:pt-20 bg-no-repeat bg-bottom" style={{ backgroundImage: `url(/img/banners/bg-footer.png)` }}>
        <div className='main_container'>
          <div className="grid grid-cols-12 gap-2">
            <div className='col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center lg:justify-start lg:items-start items-center'>
              <img src="/img/logo/logo-gray.png" alt="NexxLand" className='w-26 mb-10' />
              <div className='mb-4'>
                <p className='uppercase font-black text-center lg:text-start text-brand-black-50'>ESCRITÓRIO</p>
                <p className='text-sm montserrat-light text-center lg:text-start'>6557 Hazeltine National Dr, Orlando FL - Salas 12 e 13</p>
              </div>
              <div className='mb-10'>
                <p className='uppercase font-black text-brand-black-50'>ENTRE EM CONTATO</p>
                <p className='text-sm montserrat-light'>contato@nexxland.com</p>
                <p className='text-sm montserrat-light'>+1 (407) 580-5970</p>
              </div>
              <div className='mb-10 md:mb-0'>
                <p className='uppercase font-black text-brand-black-50'>SIGA NOS</p>
                <div className='flex gap-2'>
                  <a href="/" rel="noreferrer" target="_blank" className='flex justify-center md:justify-start'>
                    <Icon icon="ri:instagram-fill" className='text-brand-red-50 text-4xl hover:text-brand-yellow-50 transition duration-700 ease-in-out' />
                  </a>
                  <a href="/" rel="noreferrer" target="_blank" className='flex justify-center md:justify-start'>
                      <Icon icon="ic:round-facebook" className='text-brand-red-50 text-4xl hover:text-brand-yellow-50 transition duration-700 ease-in-out' />
                  </a>
                </div>
              </div>    
            </div>
            <div className=" col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-2">
              {navLinks.map((link) => {
                return (
                  <Link href={link.route} key={link.name}>
                    <p className='font-bold link-effect ml-0 md:ml-10 '>{link.name}</p>
                  </Link>
                )
              })}
            </div>
            <div className=' col-span-12 md:col-span-12 lg:col-span-2'></div>
            <div className=' col-span-12 md:col-span-12 lg:col-span-3 flex justify-center lg:justify-end items-center'>
            <Fade duration={2000}>                
              <img src="/img/elements/element-smartphone.png" alt="Element Smartphone" className='lg:translate-y-7 w-[40%] sm:w-[20%] md:w-[30%] lg:w-full' />
            </Fade>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  )
}

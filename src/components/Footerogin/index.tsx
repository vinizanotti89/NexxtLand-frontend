/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import Icon from '../Adapters/Icon'
import { CopyrightLogin } from './Copyright'

export default function FooterLogin() {
  return (
    <div>
      <footer className="border-t border-brand-yellow-50 pt-10 md:pt-20 bg-no-repeat bg-bottom" style={{ backgroundImage: `url(/img/banners/bg-footer.png)` }}>
        <div className='main_container'>
          <div className="grid grid-cols-12 gap-2">
            <div className='col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center lg:justify-start lg:items-start items-center'>
              <img src="/img/logo/logo-gray.png" alt="NexxLand" className='w-26 mb-10' />
              <div className='mb-4'>
                <p className='uppercase font-bold text-center lg:text-start'>escritório</p>
                <p className='text-sm montserrat-light text-center lg:text-start'>Aliquam elementum ante orci, ultrices vestibulum massa convallis quis</p>
              </div>
              <div className='mb-10'>
                <p className='uppercase font-bold'>ENTRE EM CONTATO</p>
                <p className='text-sm montserrat-light'>contato@nexxland.com</p>
                <p className='text-sm montserrat-light'>+55 (000) 01234-0123</p>
              </div>
              <div className='mb-10 md:mb-0'>
                <p className='uppercase font-bold'>SIGA NOS</p>
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
              <img src="/img/elements/element-smartphone.png" alt="Element Smartphone" className='lg:translate-y-7 w-[40%] sm:w-[20%] md:w-[30%] lg:w-full' />
            </div>
          </div>
        </div>
      </footer>
      <CopyrightLogin />
    </div>
  )
}

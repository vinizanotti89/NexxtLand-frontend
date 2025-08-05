'use client'
import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { navLinks } from '../Header/NavLinks'
import { Icon } from '@iconify/react'
import { LanguageToggle } from './LanguageToggle'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../Buttons/Button'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed w-[70%] md:hidden h-full bg-[url(/img/background.png)] bg-cover bg-center bg-fixed top-0 flex items-center justify-center shadow-2xl z-[999999] bg-white/80 backdrop-blur-md ${showMenuHamburguer ? 'right-0' : '-right-[700px]'
        } transition-all overflow-y-auto`}
    >
      <div className="w-full h-full relative">
        <Icon
          icon="mdi:close"
          className="text-4xl absolute top-5 right-5 cursor-pointer text-white p-2 bg-brand-yellow-50"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="py-20">
          <div className="flex justify-center py-4 px-10 mb-5">
            <img src="/img/logo/logo-dourada.png" alt="Logo NexxLand" />
          </div>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="text-lg text-center cursor-pointer text-zinc-900 bg-white py-4 border-b border-brand-yellow"
              onClick={() => handleRouting(link.route)}
            >
              {link.name}
            </div>
          ))}
           <div className='flex lg:hidden bg-white justify-center py-4'>
            <Link href="/politicas-de-privacidade" passHref legacyBehavior>
              <Button variant="primaryGold">
                ACESSAR PLATAFORMA
              </Button>
            </Link>
          </div>
          <div className="bg-white py-5">
            <div className='flex flex-col items-center justify-center pb-5'>
              <h2>Idioma</h2>
              <LanguageToggle />
            </div>
            <p className="text-zinc-900 text-center text-lg">
              contato@site.com.br
            </p>
            <p className="text-zinc-900 text-center text-lg flex justify-center items-center">
              <Icon
                icon="mdi:whatsapp"
                className="text-brand-yellow mr-2 text-xl"
              />
              (99) 9999-9999
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'
/* eslint-disable @next/next/no-img-element */
import { useWindowScroll } from 'react-use'
import { useEffect } from 'react'
import { Container } from '@/components/Partials/Container'
import useMenuHamburguerStore from '@/stores/useMenuHamburguerStore'
import Icon from '@/components/Adapters/Icon'
import TopBarLogin from './TopBarLogin'

export function HeaderLogin() {
  const { y } = useWindowScroll()
  const { setShowMenuHamburguer } = useMenuHamburguerStore()

  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${y > 0 ? 'bg-black pb-4 pt-4 lg:pt-0 md:pb-4' : 'bg-gradient-to-b py-4 lg:py-0 from-black to-transparent'
        } `}
    >
      <Container>
        <div className="flex items-center justify-between mt-6">
          <a href="/">
            <img
              src="/img/logo/logo-nexxland.png"
              alt="Logo NexxLand"
              className="py-3 transition-all cursor-pointer"
              style={{ height: y > 0 ? '3rem' : '4rem' }}
            />
          </a>
          <TopBarLogin />
          <div
            className="md:hidden"
            onClick={() => setShowMenuHamburguer(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-3xl" />
          </div>
        </div>
      </Container>
    </header>
  )
}

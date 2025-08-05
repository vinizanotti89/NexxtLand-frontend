'use client'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import privacyPolicyModalStore from '../../stores/modals/privacyPolicyModalStore'
import { Button } from '../Buttons/Button'
import Link from 'next/link'


export const BoxCookies = () => {
  const { setModalState } = privacyPolicyModalStore()
  const [openBoxCookie, setOpenBoxCookie] = useState(true)

  function setCookie() {
    Cookies.set('user-accept-cookies', 'hasCookie', {
      expires: 31557600,
    })
    setOpenBoxCookie(false)
  }

  function checkCookie() {
    const cookie = Cookies.get('user-accept-cookies')
    if (!cookie) {
      setOpenBoxCookie(true)
    } else {
      setOpenBoxCookie(false)
    }
  }

  useEffect(() => {
    checkCookie()
  }, [])

  return (
    <div
      className="fixed z-50 bottom-4 left-[50%] w-[90%] md:w-[70%] -translate-x-1/2 overflow-hidden border bg-white border-brand-yellow-50 py-4 px-5"
      style={{
        display: openBoxCookie ? 'block' : 'none',
      }}
    >
      <div className="">
        <div>
          <h4 className=" text-brand-yellow-50 text-2xl text-center md:text-start">
            Esse site usa cookies
          </h4>
          <p className="my-4 md:my-4 text-brand-yellow-50 text-center md:text-start">
            Nós armazenamos dados temporariamente para melhorar a sua
            experiência de navegação e recomendar conteúdo de seu interesse. Ao
            utilizar nossos serviços, você concorda com tal monitoramento.
          </p>
        </div>
        <div className="flex justify-between items-center flex-col sm:flex-row gap-2">
          <Link href="/politicas-de-privacidade" passHref legacyBehavior>
            <Button variant="primaryGold" >
              Política de Privacidade
            </Button>
          </Link>
          <Button variant="primaryGold" onClick={setCookie}>
            Aceita
          </Button>
        </div>
      </div>
    </div>
  )
}

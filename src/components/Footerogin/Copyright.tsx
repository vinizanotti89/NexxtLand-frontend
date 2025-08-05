/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Container} from '../Partials/Container'

export function CopyrightLogin() {
  return (
    <div className="py-4 fixed bottom-0  w-full bg-transparent">
      <Container>
      <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
          <p className="text-white text-sm m-0 montserrat-light">
            Todos os direitos reservados. <span translate="no">NexxLand</span> {new Date().getFullYear()}
          </p>
          <div className="flex items-center">
            <p className="text-white flex items-center text-sm m-0">
              <a
                href="https://www.bredi.com.br/"
                target="_blank"
                rel="noreferrer"
                className='flex items-center montserrat-light text-white'
              >
                Desenvolvido por
                <strong className='ml-1 text-white font-bold'>Bredi</strong>
                <img
                  src="/img/logo/logo-bredi.svg"
                  alt="bredi tecnologia"
                  width={25}
                  className="mb-1 ml-1"
                />
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

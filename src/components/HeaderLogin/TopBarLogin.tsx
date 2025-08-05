import Link from 'next/link'
import { Container } from '@/components/Partials/Container'
import { Button } from '@/components/Buttons/Button'
import { LanguageToggle } from '@/components/Partials/LanguageToggle'

export default function TopBarLogin() {
  return (
    <div className="hidden md:block">
      <Container>
        <div className='flex justify-between lg:justify-end py-4 items-center'>
          <div className='flex'>
            <p className='mr-2 text-white font-thin'>Idiomas</p>
            <LanguageToggle />
          </div>
          <div className='flex lg:hidden'>
              <Link href="/politicas-de-privacidade" passHref legacyBehavior>
                <Button variant="outlinedWhite">
                  ACESSAR PLATAFORMA
                </Button>
              </Link>
            </div>
        </div>
      </Container>
    </div>
  )
}

import { Container } from '../Partials/Container'
import { LanguageToggle } from '../Partials/LanguageToggle'
import { useWindowScroll } from 'react-use'

export default function TopBar() {
  const { y } = useWindowScroll()

  return (
    <div className={`transition duration-700 ease-in-out ${y > 0 ? 'hidden' : 'block'}`}>
      <Container>
        <div className='md:flex justify-between lg:justify-end py-4 items-center hidden'>
          <div className='flex items-center'>
            <p className='mr-2 text-white font-light'>Idiomas</p>
            <LanguageToggle />
          </div>
        </div>
      </Container>
    </div>
  )
}

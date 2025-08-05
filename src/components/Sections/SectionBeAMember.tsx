'use client'
import { EmailTemplateHomeFormulario } from "@/services/EmailTemplate";
import { TextForm } from "../Forms/components/TextForm";
import { TextFormMask } from "../Forms/components/TextFormMask";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "../Buttons/Button";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";

type FormProps = {
  brand: string
  name: string
  email: string
  phone: string
}

export default function SectionBeAMember() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormProps>()

  const emailDestionation = 'contato@nexxland.com'

  async function postFormulario(params: any) {
    console.log(params)

    try {
      const bodyFormData = new FormData()

      bodyFormData.append('nome_remetente', `NexxLand - ${params.name}`)
      bodyFormData.append('email_remetente', params.email)
      bodyFormData.append('assunto', `Cadastro NexxLand realizado com sucesso! - ${params.brand}`)
      bodyFormData.append('nome_destinatario', 'NexxLand')
      bodyFormData.append('email_destinatario', emailDestionation)
      bodyFormData.append('cc[]', params.email)

      bodyFormData.append(
        'conteudo_html',
        EmailTemplateHomeFormulario({
          name: params.name,
          email: params.email,
          phone: params.phone,
          theme: 'default', // Propriedade 'theme' adicionada aqui
        })
      )
      const response = await axios.post(
        'https://email-service.sitebeta.com.br/api/send-email',
        bodyFormData
      )

      toast.success('Cadastro feito com sucesso!')

      reset({
        email: '',
        phone: '',
        name: '',
      })
    } catch (error) {
      console.log(error)
      toast.error('Erro ao enviar e-mail!')
    }
  }

  return (
    <div className="py-10 md:py-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/img/banners/bg-nexxland.png)` }}>
      <div className="main_container">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4">
            <Fade direction="up" duration={2000}>                
              <h2 className='text-4xl md:text-3xl lg:text-5xl text-brand-black-50 font-black mb-4 text-center lg:text-start'>SEJA UM MEMBRO <span translate="no">NEXXLAND</span></h2>
            </Fade>
            <p className="text-brand-black-50 mb-10 md:mb-20 text-center md:text-start">CADASTRE-SE EM NOSSA PLATAFORMA E TENHA ACESSO Á OPORTUNIDADES.</p>
            <form onSubmit={handleSubmit(postFormulario)}>
              <TextForm
                register={register}
                errors={errors}
                label={''}
                placeholder="Nome"
                name="name"
                required
              />
              <TextFormMask
                register={register}
                errors={errors}
                name={'phone'}
                placeholder="(99) 99999-9999"
                label={''}
                mask={'(99) 99999-9999'}
                required
              />
              <TextForm
                register={register}
                errors={errors}
                label={''}
                placeholder="Email"
                name="email"
                required
              />
              <div className="grid grid-cols-2 mt-4">
                <div className="col-span-2 md:col-span-1">
                  <Button variant="outlinedGold" full disabled={isSubmitting} type="submit">
                    Cadastrar
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-1"></div>
          <div className="col-span-12 md:col-span-7 mt-4 md:mt-0">
            <div className="grid grid-cols-12 gap-2">
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
                <Fade direction="up" duration={2000}>                
                  <img src="/img/icons/icon-member-01.png" alt="Terrenos Escolhidos a Dedo pelo nosso time" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Terrenos Escolhidos a Dedo pelo nosso time</p>
              </div>
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
                <Fade direction="up" duration={2000}>                
                  <img src="/img/icons/icon-member-02.png" alt="Acesso aos Melhores Terrenos da Flórida" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Acesso aos Melhores Terrenos da Flórida</p>
              </div>
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
                <Fade direction="up" duration={2000}>                
                  <img src="/img/icons/icon-member-03.png" alt="Contato via WhatsApp com nossa equipe" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Contato via WhatsApp com nossa equipe</p>
              </div>
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
                <Fade direction="up" duration={2000}>                
                  <img src="/img/icons/icon-member-04.png" alt="Acesso Totalmente Gratuito" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Acesso Totalmente Gratuito</p>
              </div>
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
                <Fade direction="up" duration={2000}>                
                  <img src="/img/icons/icon-member-05.png" alt="Terrenos Favoritos" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Terrenos Favoritos</p>
              </div>
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
              <Fade direction="up" duration={2000}>                
                <img src="/img/icons/icon-member-06.png" alt="Busca Avançada de Terrenos" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Busca Avançada de Terrenos</p>
              </div>
              <div className="transition duration-700 ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
              <Fade direction="up" duration={2000}>                
                <img src="/img/icons/icon-member-07.png" alt="Sugestão de IA Baseado no Perfil" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Sugestão de IA Baseado no Perfil</p>
              </div>
              <div className="transition-all bg-white ease-in-out hover:bg-gray-100 col-span-6 md:col-span-6 lg:col-span-3 py-10 px-6 rounded-md border border-brand-gray-50 flex flex-col items-center justify-between">
              <Fade direction="up" duration={2000}>                
                <img src="/img/icons/icon-member-08.png" alt="Chat Online" className="mb-10" />
                </Fade>
                <p className="text-brand-black-50 text-center">Chat Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

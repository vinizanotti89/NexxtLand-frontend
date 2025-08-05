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
  theme: string // Novo campo para o tema
}

export default function SectionLeads() {
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
      bodyFormData.append('título', `Título: - ${params.theme}`)
      bodyFormData.append('nome_destinatario', 'NexxLand')
      bodyFormData.append('email_destinatario', emailDestionation)
      bodyFormData.append('cc[]', params.email)
      
      // Adicionando o tema ao formulário
      bodyFormData.append('tema', params.theme)

      bodyFormData.append(
        'conteudo_html',
        EmailTemplateHomeFormulario({
          name: params.name,
          email: params.email,
          phone: params.phone,
          theme: params.theme
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
        theme: '' // Resetando o campo tema
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
          <div className="col-span-12 md:col-span-12">
            <Fade direction="up" duration={2000}>                
              <h2 className='text-4xl md:text-3xl lg:text-5xl text-brand-black-50 font-black mb-4 text-center'>Não encontrou o que procurava?</h2>
            </Fade>
            <p className="text-brand-black-50 mb-10 md:mb-20 text-center">Envie-nos um e-mail com sua dúvida, e estaremos prontos para ajudar!</p>
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
              
              {/* Novo select para o tema */}
              <div className="mb-4 mt-2">
                <select
                  {...register("theme", { required: true })}
                  id="theme"
                  className="input-text"
                >
                  <option value="">Selecione um tema</option>
                  <option value="tema1">Investir em construção/consultoria</option>
                  <option value="tema2">Imobiliária/compra</option>
                  <option value="tema3">Imóvel pronto</option>
                </select>
                {errors.theme && <p className="text-red-600">Este campo é obrigatório</p>}
              </div>

              <div className="grid grid-cols-2 mt-4">
                <div className="col-span-2 md:col-span-12">
                  <Button variant="outlinedGold" full disabled={isSubmitting} type="submit">
                    enviar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

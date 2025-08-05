'use client'
import { Button } from "@/components/Buttons/Button";
import { TextForm } from "@/components/Forms/components/TextForm";
import { TextFormPassword } from "@/components/Forms/components/TextFormPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const registerSchema = z
  .object({
    email: z.string().email({ message: 'Email inválido' }),
    password: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof registerSchema>
export default async function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  async function postForm(data: FormData) {
    console.log(data)
  }

  return (
    <div className="h-[100vh] flex justify-center items-center relative bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(/img/banners/bg-login.webp)` }}>
      <div className="main_container">
        <div className="">
          <div className="flex justify-center items-center">

            <form onSubmit={handleSubmit(postForm)} className="relative z-40 max-w-[600px] w-full">
              <p className="text-white font-black text-3xl text-center mb-4">Faça seu login</p>
              <TextForm
                register={register}
                errors={errors}
                name={'Login'}
                label={''}
              />

              <TextFormPassword
                register={register}
                errors={errors}
                name={'Senha'}
                label={''}
                
              />
              <a href="/">
                <p className="mt-3 font-bold text-white">Esqueci a senha</p>
              </a>
              <div className="grid grid-cols-2 mt-4 relative z-30">
                <div className="col-span-2 md:col-span-1">
                  <a href="/">
                    <div className="hover:bg-brand-yellow-100 border border-brand-yellow-100 font-bold text-brand-yellow-100 hover:text-white hover:border-brand-yellow-100 transition duration-700 ease-in-out flex items-center justify-center gap-2 rounded-sm px-5 py-4">
                      ENTRAR
                    </div>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <span className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-black/0"></span>
    </div>
  );
}
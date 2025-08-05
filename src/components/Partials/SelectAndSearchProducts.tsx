'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Buttons/Button'
import { SelectInput } from '../Forms/components/SelectInput'
import { Region } from '@/protocols'

const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Nome deve conter no minimo 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    password: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Senha deve conter no minimo 6 caracteres' }),
    nascimento: z.string().optional(),
    lang: z.string().optional(),
    descricao: z.string().min(10, { message: 'Descrição muito curta' }),
    telefone: z.string().min(15, { message: 'Telefone inválido' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof registerSchema>

export function SelectAndSearchProducts({ setRegion, regions }: { setRegion: any, regions?: Region[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) })

  async function postForm(data: FormData) {
    console.log(data)
  }

  const options = [
    { value: 'Buscar por', label: 'Buscar por' },
    ...(regions ? regions.map((cidade: Region) => ({
      value: String(cidade.id),
      label: cidade.nome,
      pdf: cidade.pdf,
      link_video: cidade.link_video
    })) : [])
  ]

  return (
    <div className="flex justify-center md:justify-end">
      <form
        onSubmit={handleSubmit(postForm)}
        className=""
      >
        <SelectInput
          register={register}
          errors={errors}
          name={'lang'}
          label={''}
          setRegion={setRegion}
          options={options}
        />
      </form>
    </div>
  )
}

import React, { FormEvent } from 'react'
import { LabelError } from './LabelError'

interface TextFormCepProps {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  handler?: (e: any) => void
}

export function TextFormCep({
  register,
  errors,
  name,
  label,
  required = false,
  handler = () => {},
}: TextFormCepProps) {
  
  const applyCepMask = (value: string): string => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '')
    
    // Aplica a máscara CEP (99999-999)
    if (numericValue.length <= 5) {
      return numericValue
    }
    return `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCepMask(e.target.value)
    e.target.value = maskedValue
  }

  return (
    <div>
      <div className="label-float">
        <input
          type="text"
          placeholder=" "
          maxLength={9} // 5 dígitos + hífen + 3 dígitos
          style={errors[name] && { border: '1px solid red' }}
          {...register(name, {
            required: { message: 'Campo obrigatório', value: required },
            onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
              handler(e.target.value),
            onChange: handleInputChange,
          })}
          onInput={handleInputChange}
        />
        <label>{label}</label>
      </div>
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}
import React from 'react'
import { Label } from './Label'
import { LabelError } from './LabelError'

interface TextFormMaskProps {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
  mask: string
  disabled?: boolean
  placeholder?: string
}

export function TextFormMask({
  register,
  errors,
  name,
  label,
  required = false,
  mask,
  disabled = false,
  placeholder = ' ',
}: TextFormMaskProps) {
  
  // Função para aplicar máscara baseada no padrão fornecido
  const applyMask = (value: string, maskPattern: string): string => {
    // Remove todos os caracteres não alfanuméricos
    const cleanValue = value.replace(/\W/g, '')
    
    let maskedValue = ''
    let valueIndex = 0
    
    for (let i = 0; i < maskPattern.length && valueIndex < cleanValue.length; i++) {
      if (maskPattern[i] === '9') {
        // Apenas números
        if (/\d/.test(cleanValue[valueIndex])) {
          maskedValue += cleanValue[valueIndex]
          valueIndex++
        } else {
          break
        }
      } else if (maskPattern[i] === 'A') {
        // Apenas letras
        if (/[a-zA-Z]/.test(cleanValue[valueIndex])) {
          maskedValue += cleanValue[valueIndex]
          valueIndex++
        } else {
          break
        }
      } else if (maskPattern[i] === '*') {
        maskedValue += cleanValue[valueIndex]
        valueIndex++
      } else {
        // Caractere fixo da máscara
        maskedValue += maskPattern[i]
      }
    }
    
    return maskedValue
  }

  const getMaxLength = (maskPattern: string): number => {
    return maskPattern.length
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyMask(e.target.value, mask)
    e.target.value = maskedValue
  }

  return (
    <div>
      <Label label={label} name={name} />
      <input
        type="text"
        placeholder={placeholder}
        maxLength={getMaxLength(mask)}
        style={errors[name] && { border: '1px solid red' }}
        {...register(name, {
          required: { message: 'Campo obrigatório', value: required },
          onChange: handleInputChange,
        })}
        onInput={handleInputChange}
        className="input-text"
        disabled={disabled}
      />
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}

{
  /* Exemplos de uso:
  
  <TextFormMask
    mask="99/99/99"
    label={'Data'}
    name={'data'}
    placeholder={'dd/mm/aa'}
    register={register}
    errors={errors}
    required
  />
  
  <TextFormMask
    mask="(99) 99999-9999"
    label={'Telefone'}
    name={'telefone'}
    placeholder={'(00) 00000-0000'}
    register={register}
    errors={errors}
  />
  
  <TextFormMask
    mask="999.999.999-99"
    label={'CPF'}
    name={'cpf'}
    placeholder={'000.000.000-00'}
    register={register}
    errors={errors}
  />
  
  */
}
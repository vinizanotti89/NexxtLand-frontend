'use client'
import React from 'react'
import Icon from '../Adapters/Icon'

type Props = {
  children: React.ReactNode
  variant:
  | 'primaryGold'
  | 'outlinedWhite'
  | 'outlinedGold'
  color?: string
  disabled?: boolean
  onClick?: any
  type?: 'button' | 'submit' | 'reset'
  full?: boolean
  isLoading?: boolean
}

export function Button({
  children,
  variant = 'outlinedWhite',
  disabled = false,
  onClick,
  type = 'button',
  full = false,
  isLoading = false,
}: Props) {
  const primaryGold = 'bg-brand-yellow-100 text-white hover:bg-brand-yellow-50 transition duration-700 ease-in-out'
  const outlinedWhite = 'bg-transparent border text-xs font-bold border-white text-white hover:bg-brand-yellow-100 hover:border-brand-yellow-50 transition duration-700 ease-in-out'
  const outlinedGold = 'hover:bg-brand-yellow-100 border border-brand-yellow-100 font-bold text-brand-yellow-100 hover:text-white hover:border-brand-yellow-100 transition duration-700 ease-in-out'

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-sm px-5 py-4
        ${variant === 'primaryGold' && primaryGold}
        ${variant === 'outlinedWhite' && outlinedWhite}
        ${variant === 'outlinedGold' && outlinedGold}
        ${full ? 'w-full' : 'w-fit'}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {
        isLoading ? <Icon icon="mingcute:loading-fill" className="text-2xl animate-spin" /> : children
      }
    </button>
  )
}

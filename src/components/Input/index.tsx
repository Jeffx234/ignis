import React, { useState } from 'react'
import { ContainerInput, InputComponent } from './styled'

interface InputProps {
  placeholder: string
  type: string
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  placeholder,
  type,
  label,
  onChange,
  ...props
}: InputProps) {
  return (
    <ContainerInput>
      <label htmlFor={placeholder}>{label}</label>
      <InputComponent
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        {...props}
      />
    </ContainerInput>
  )
}

export const InputPassword = ({
  placeholder,
  type,
  label,
  onChange,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <ContainerInput>
      <label htmlFor={placeholder}>{label}</label>
      <InputComponent
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        {...props}
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </ContainerInput>
  )
}

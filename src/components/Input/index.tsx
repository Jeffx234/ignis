import React from 'react'
import {
  ContainerInput,
  InputComponent,
  ContainerInputPassword,
  InputComponentPassword,
} from './styled'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface InputProps {
  placeholder: string
  type: string
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: any
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
  onClick,
  ...props
}: InputProps) => {
  return (
    <ContainerInputPassword>
      <label htmlFor={placeholder}>{label}</label>
      <InputComponentPassword>
        <InputComponent
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          {...props}
        />
        <button type="button" onClick={onClick}>
          {type === 'password' ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </InputComponentPassword>
    </ContainerInputPassword>
  )
}

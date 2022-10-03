import { ReactNode } from 'react'
import { ContainerButton, ButtonComponent } from './styled'

interface ButtonProps {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick: any
  disabled?: boolean
}

export const Button = ({
  type,
  children,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ContainerButton>
      <ButtonComponent
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </ButtonComponent>
    </ContainerButton>
  )
}

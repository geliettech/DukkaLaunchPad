import type { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
  buttonClasses?: string
}

const FormButton: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  buttonClasses = "primary-btn", // default class
}) => {
  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default FormButton

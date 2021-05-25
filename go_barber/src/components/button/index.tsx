import { ButtonHTMLAttributes } from 'react'
import { Container } from './style'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  )
}
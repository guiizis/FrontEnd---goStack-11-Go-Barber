import React from 'react'
import { Container } from './style'
interface IToolTipProps {
  title: string,
  className?: string
}

export const Tooltip: React.FC<IToolTipProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      { children}
      < span > {title}</span >
    </Container>
  )
}
import React, { InputHTMLAttributes, ReactComponentElement, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'
import { Container } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

export const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,

    })
  }, [fieldName, registerField])

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input defaultValue={defaultValue} {...rest}
        ref={inputRef}
      />
    </Container>
  )
}
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'
import { Container, Error } from './style'
import { FiAlertCircle } from 'react-icons/fi'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

export const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)
  const [isFilled, setIsFilled] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const isNotFocused = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  const isOnFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      path: "value",
      ref: inputRef.current,

    })
  }, [fieldName, registerField])

  return (
    <Container isFocused={isFocused} hasError={!!error} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        onFocus={isOnFocus}
        onBlur={isNotFocused}
        {...rest}
      />
      {error && (<Error title={error}> <FiAlertCircle color={'#c53030'} size={20} /></Error>)}
    </Container>
  )
}
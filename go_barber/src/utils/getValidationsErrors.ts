import { ValidationError } from 'yup'

interface IErrorProps {
  [key: string]: string
}

export function getValidationsErrors(err: ValidationError): IErrorProps {
  const allErrorsFound: IErrorProps = {}

  err.inner.forEach((error) => {
    if (error.path) {
      allErrorsFound[error.path] = error.message
    }
  })

  return allErrorsFound
}
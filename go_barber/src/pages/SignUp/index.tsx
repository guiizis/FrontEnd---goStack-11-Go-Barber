import { Container, Content, Background } from './style'
import logoSVG from '../../assets/logo.svg'
import { FormHandles } from '@unform/core'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import * as Yup from 'yup'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Form } from '@unform/web'
import { useCallback, useRef } from 'react'
import { getValidationsErrors } from '../../utils/getValidationsErrors'


export const SingUp: React.FC = () => {

  const formHandle = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object): Promise<void> => {
    try {
      formHandle.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome Obrigatório"),
        email: Yup.string().required("Insira um Email Válido").email(),
        password: Yup.string().min(6)
      })

      await schema.validate(data, { abortEarly: false })

    } catch (err) {
      const allErrorsFound = getValidationsErrors(err)

      formHandle.current?.setErrors(allErrorsFound)
    }
  }, [])
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSVG} alt="Logo GoBarber" />
        <Form ref={formHandle} onSubmit={handleSubmit}>
          <h1>Faça Seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Digite seu Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Digite sua Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="">
          <FiArrowLeft size={20} />
          Voltar Para Logon
        </a>
      </Content>

    </Container >
  )
}
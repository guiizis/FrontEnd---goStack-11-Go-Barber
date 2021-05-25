import { Container, Content, Background } from './style'
import logoSVG from '../../assets/logo.svg'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Form } from "@unform/web"

export const SingUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)

  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSVG} alt="Logo GoBarber" />
        <Form onSubmit={handleSubmit}>
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
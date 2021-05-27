import { Container, Content, Background } from './style'
import logoSVG from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useRef } from 'react'

export const SingIn: React.FC = () => {



  return (
    <Container>
      <Content>
        <img src={logoSVG} alt="Logo GoBarber" />
        <form>
          <h1>Logon</h1>

          <Input name="email" icon={FiMail} placeholder="Digite seu Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Digite sua Senha" />
          <Button>Login</Button>
          <a href="forgotPasswrod">Esqueci Minha Senha</a>
        </form>

        <a href="">
          <FiLogIn size={20} />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}
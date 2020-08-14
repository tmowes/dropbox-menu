import React from 'react'

import { Container, Navigation, DropboxLogo, Form } from './styles'

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) {
      window.toggleActiveMenu()
    }
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button type="button" className="action-close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="button">Prosseguir</button>
        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviços.
        </span>
      </Form>
    </Container>
  )
}

export default MenuForm

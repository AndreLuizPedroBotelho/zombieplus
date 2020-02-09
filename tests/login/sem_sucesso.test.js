module.exports = {
  'senha incorreta': (browser) => {
    let login = browser.page.login()
    login
      .with('zumbi@hotmail.com', '123abc')
      .expectAlertDanger('Usuário e/ou senha inválidos')
  },
  'não cadastrado': (browser) => {
    let login = browser.page.login()
    login
      .with('404@yahoo.com', '123abc')
      .expectAlertDanger('Usuário e/ou senha inválidos')
  },
  'email não informado': (browser) => {
    let login = browser.page.login()
    login
      .with('', '123abc')
      .expectAlertInfo('Opps. Cadê o email?')
  },
  'senha não informada': (browser) => {
    let login = browser.page.login()
    login
      .with('zumbi@hotmail.com', '')
      .expectAlertInfo('Opps. Cadê a senha?')
  },

}
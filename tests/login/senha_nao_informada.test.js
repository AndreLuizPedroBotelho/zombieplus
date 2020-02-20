module.exports = {
  '@tags': ['smoke'],

  'senha não informada': (browser) => {
    let login = browser.page.login()
    login
      .with('zumbi@hotmail.com', '')
      .expectAlertInfo('Opps. Cadê a senha?')
  }

}
module.exports = {
  'login com sucesso': (browser) => {

    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login
      .with('zumbi@hotmail.com', 'pwd123')

    sidebar.expectLoggedUser('Andre')
  }

}
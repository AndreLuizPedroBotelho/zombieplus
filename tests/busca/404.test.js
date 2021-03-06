module.exports = {

  before: function (browser) {
    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login
      .with('zumbi@hotmail.com', 'pwd123')

    sidebar.expectLoggedUser('Andre')


  },
  'quando eu busco o titulo não cadastrado': function (browser) {
    let movie = browser.page.movie()

    movie
      .setValue('@searchInput', 'Não é mais um besterol americano')
      .click('@searchIcon')

  },
  'quando eu devo ver uma mensagem de alerta': function (browser) {
    let movie = browser.page.movie()

    movie
      .waitForElementVisible('@alertDanger', 30000)
      .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
  }
}
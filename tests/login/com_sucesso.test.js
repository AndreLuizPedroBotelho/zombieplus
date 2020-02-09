module.exports = {
  'login com sucesso': (browser) => {

    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    browser.resizeWindow(1920, 1080)

    login
      .with('zumbi@hotmail.com', 'pwd123')

    sidebar.waitForElementVisible('@userInfo', 3000)
      .assert.containsText('@userInfo', 'Andre')
      .end();
  },
  /*'quando eu acesso a pagina de login': function (browser) {
    browser
      .url('http://zombie-web:5000/login')
      .waitForElementVisible('.card-login', 3000)
  },
  'e faço login com sucesso': function (browser) {
    browser
      .setValue('input[name=email]', 'zumbi@hotmail.com')
      .setValue('input[name=password]', 'pwd123')
      .click('.login-button')
  },
  'então devo ver o nome na área logada': function (browser) {
    var userInfo = '.user .info span'
    browser
      .waitForElementVisible(userInfo, 3000)
      .assert.containsText(userInfo, 'Andre')
      .end();
  },*/
}
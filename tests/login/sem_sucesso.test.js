module.exports = {
  'senha incorreta': (browser) => {
    let alert = '.alert-danger';
    browser
      .resizeWindow(1920, 1080)
      .url('http://zombie-web:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name=email]', 'zumbi@hotmail.com')
      .setValue('input[name=password]', '123abc')
      .click('.login-button')
      .waitForElementVisible(alert, 3000)
      .assert.containsText(alert, 'Usuário e/ou senha inválidos')
  },
  'não cadastrado': (browser) => {
    let alert = '.alert-danger';

    browser
      .resizeWindow(1920, 1080)
      .url('http://zombie-web:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name=email]', '404@yahoo.com')
      .setValue('input[name=password]', '123abc')
      .click('.login-button')
      .waitForElementVisible(alert, 3000)
      .assert.containsText(alert, 'Usuário e/ou senha inválidos')
  },
  'email não informado': (browser) => {
    let alert = '.alert-info';

    browser
      .resizeWindow(1920, 1080)
      .url('http://zombie-web:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name=email]', '')
      .setValue('input[name=password]', '123abc')
      .click('.login-button')
      .waitForElementVisible(alert, 3000)
      .assert.containsText(alert, 'Opps. Cadê o email?')
  },
  'senha não informada': (browser) => {
    let alert = '.alert-info';

    browser
      .resizeWindow(1920, 1080)
      .url('http://zombie-web:5000/login')
      .waitForElementVisible('.card-login', 3000)
      .setValue('input[name=email]', 'zumbi@hotmail.com')
      .setValue('input[name=password]', '')
      .click('.login-button')
      .waitForElementVisible(alert, 3000)
      .assert.containsText(alert, 'Opps. Cadê a senha?')
      .end();
  },

}
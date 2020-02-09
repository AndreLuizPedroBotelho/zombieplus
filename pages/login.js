const loginActions = {
  with: function (email, pass) {
    return this
      .navigate()
      .waitForElementVisible('@form', 3000)
      .setValue('@emailInput', email)
      .setValue('@passwordInput', pass)
      .click('@loginInput')
  }
}

module.exports = {
  url: 'http://zombie-web:5000/login',
  commands: [loginActions],
  elements: {
    form: '.card-login',
    emailInput: 'input[name=email]',
    passwordInput: 'input[name=password]',
    loginInput: '.login-button',
    alertDanger: '.alert-danger',
    alertInfo: '.alert-info',

  }
}
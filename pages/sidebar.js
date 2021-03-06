const userActions = {
  expectLoggedUser: function (name) {
    return this
      .waitForElementVisible('@userInfo', 50000)
      .assert.containsText('@userInfo', name)
  },

}
module.exports = {
  commands: [userActions],

  elements: {
    userInfo: '.user .info span',
  }
}
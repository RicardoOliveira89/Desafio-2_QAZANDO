const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpratice.com.br',
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

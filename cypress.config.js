const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r7veaj",
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

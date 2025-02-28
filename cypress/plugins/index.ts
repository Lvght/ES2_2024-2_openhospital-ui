/// <reference types="cypress" />

import codeCoverage from '@cypress/code-coverage/task';

const plugin: Cypress.PluginConfig = (on, config) => {
  // Adiciona suporte ao código de cobertura
  codeCoverage(on, config);

  // Configuração para forçar o idioma para inglês nos navegadores
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.name === "chrome" || browser.name === "firefox") {
      launchOptions.args.push("--lang=en");
      return launchOptions;
    } else {
      launchOptions.env.LANG = "en_US";
      return launchOptions;
    }
  });

  return config;
};

export default plugin;
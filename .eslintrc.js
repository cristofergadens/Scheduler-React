module.exports = {
  // Outras configurações do ESLint
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true // Adicione esta linha
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended' // Adicione esta linha
  ],
  plugins: [
    'cypress' // Adicione esta linha
  ],
  rules: {
    // Suas regras personalizadas aqui
  },
};

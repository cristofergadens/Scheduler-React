module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'mjs',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/styleMock.js',
    '^swiper': '<rootDir>/node_modules/swiper',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!api)',
    '/node_modules/(?!swiper|swiper/swiper-bundle.css|swiper/css)',
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
  },
};



module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

const path = require('path');

// Add webpack aliases to match tsconfig and components.json aliases
module.exports.webpackFinal = async (config) => {
  config.resolve = config.resolve || {};
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@': path.resolve(__dirname, '../src'),
    'lib': path.resolve(__dirname, '../src/lib'),
    'ui': path.resolve(__dirname, '../src/components/ui'),
    'components': path.resolve(__dirname, '../src/components'),
    'hooks': path.resolve(__dirname, '../src/hooks'),
  });
  return config;
};
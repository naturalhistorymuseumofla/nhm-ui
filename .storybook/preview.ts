import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-styling';

/* TODO: update import to your tailwind styles file */
import '../src/assets/tailwind.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {...require('@storybook/addon-docs/preview').parameters.docs,}
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }), // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
};

export default preview;

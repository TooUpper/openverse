import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: 'https://tooupper.github.io/openverse/',
  root: path.join(__dirname, 'docs'),
  title: '漩涡社区',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});

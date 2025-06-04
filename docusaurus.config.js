// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/Logo_Interfrutd-192.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Kevinduran09/Documentacion-frumusa/tree/main/',
        },
    
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Frumusa',
        logo: {
          alt: 'Frumusa Logo',
          src: 'img/Logo_Interfrutd_192.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/Kevinduran09/Documentacion-frumusa',
            label: 'GitHub',
            position: 'right',
          },
        ],
        style: 'primary',
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Base de Datos',
                to: '/docs/DocumentacionFrumusa/BaseDeDatos',
              },
              {
                label: 'Frontend',
                to: '/docs/DocumentacionFrumusa/FrontEnd Frumusa',
              },
              {
                label: 'Vistas',
                to: '/docs/DocumentacionFrumusa/vistas',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Interfrud. Todos los derechos reservados.`,
        logo: {
          alt: 'Frumusa Logo',
          src: 'img/Logo_Interfrutd_192.png',
          href: 'https://interfrud.com',
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
     
    }),
};

export default config;

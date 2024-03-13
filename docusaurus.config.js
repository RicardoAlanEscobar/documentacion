import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEUUNI UNIVERSIDAD',
  tagline: 'Bienvenidos 👋 ',
  favicon: 'img/logo-n.png',
 
  url: 'https://RicardoAlanEscobar.github.io/',

  baseUrl: '/',


  organizationName: 'RicardoAlanEscobar', // Usually your GitHub org/user name.
  projectName: 'documentacion', // Usually your repo name.
  deploymentBranch:'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  
  i18n: {
    defaultLocale: 'es', 
    locales: ['es'],
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
          
        },
       
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          },
        pages:{
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          },
    
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
//-------------------------------------------------------------------------------------
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mentores',
        path: 'mentores',
        routeBasePath: 'mentores',
        sidebarPath: require.resolve('./mySidebars.js'),
      },    
    ],
  ],
//---------------------------------------------------------------------------------------


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-2-n.jpeg',
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'Logo',
          src: 'img/logo-n.png',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Alumnos',
          },

          {to: '/mentores/intro',
           label: 'Mentores',
            position: 'left'},

          { 
            to: '/administrativos',
           label: 'Administrativos', 
           position: 'left'
           
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Soporte técnico',
            items: [
              {
                label: '440 105 1527',
                href: 'https://wa.me/message/RSY3GACKA2KTN1',
              },
            ],
          },
          {
            title: 'Adicionales',
            items: [
              {
                label: 'administracion@unineuuni.edu.mx',
                href: 'https://mail.google.com',
              },
              {
                label: 'controlescolar@unineuuni.edu.mx',
                href: 'https://mail.google.com',
              },
              {
                label: 'ra.gomez@unineuuni.edu.mx',
                href: 'https://mail.google.com',
              },
            ],
          },
          {
            title: 'Enlaces directos.',
            items: [
              {
                label: 'Plataforma de Neuuni.',
                href: 'https://cursos.unineuuni.edu.mx/',
              },
              {
                label: 'Plataforma de pagos.',
                href: 'https://app.gedux.mx/login',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neuuni Universidad.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

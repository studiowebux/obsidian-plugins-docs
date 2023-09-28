// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Obsidian Plugins Docs",
  tagline: "Studio Webux Obsidian.md Plugins",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://yetanothertool.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/obsidian-plugins-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Studio Webux", // Usually your GitHub org/user name.
  projectName: "Obsidian Plugins", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/studiowebux/obsidian-plugins-docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://www.webuxlab.com",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Studio Webux Plugins",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://www.webuxlab.com/",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/studiowebux/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentations",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://www.webuxlab.com/",
              },
              {
                label: "GitHub - Studio Webux",
                href: "https://github.com/studiowebux",
              },
              {
                label: "GitHub - Yet Another Tool",
                href: "https://github.com/yet-another-tool",
              },
              {
                label: "GitHub - Webux Lab",
                href: "https://github.com/webuxlab",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Studio Webux. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "York TechSoc",
  tagline: "Live Event Design, Install and Operation",
  url: "https://yorktechsoc.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yorktechsoc", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

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
          path: "src/docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        pages: {
          path: "src/pages",
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
      navbar: {
        title: "York TechSoc",
        logo: {
          alt: "York TechSoc Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Collaborate With Us",
            to: "collaborate",
            position: "right",
          },
          {
            label: "Our Equipment",
            type: "doc",
            docId: "/category/our-equipment",
            position: "right",
          },
          {
            label: "Where We Work",
            type: "doc",
            docId: "/category/where-we-work",
            position: "right",
          },
          {
            label: "Member Resources",
            type: "dropdown",
            to: "resources",
            position: "right",
            items: [
              {
                label: "Upcoming Events",
                to: "resources/events",
              },
              {
                label: "Venue Information",
                type: "doc",
                docId: "/category/technical-information",
              },
              {
                label: "AdamRMS",
                href: "https://dash.adam-rms.com",
              },
            ],
          },
          {
            label: "Get Involved",
            to: "get-involved",
            type: "dropdown",
            position: "right",
            items: [
              {
                href: "https://yorksu.org/activities/view/technical-theatre-society",
                label: "Society Pages",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Social Media",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/yorktechsoc/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/uoytechsoc/",
              },
              {
                label: "Slack",
                href: "https://yorktechsoc.slack.com/"
              },
            ],
          },

          {
            title: "Venues",
            items: [
              {
                label: "Dixon Drama Studio",
                to: "/docs/venues/dixon",
              },
              {
                label: "Central Hall",
                to: "/docs/venues/central-hall",
              },
            ],
          },
          {
            title: "With Thanks to",
            items: [
              {
                label: "YorkSU",
                href: "https://yorksu.org/",
              },
              {
                label: "YUFUND",
                href: "https://www.york.ac.uk/york-unlimited/",
              },
              {
                label: "UoY AV",
                href: "https://www.york.ac.uk/about/departments/support-and-admin/estates-and-campus-services/audio-visual/",
              },
            ],
          },
	  {
	    title: "Disclaimer",
	    items: [
		{
		    label: "Disclaimer",
		    to: "/disclaimer"
		}
	    ]
	  },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} York TechSoc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  publicSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Quick Start',
      collapsed: true,
      items: [
        'quick-start/overview',
        'quick-start/initialization',
        'quick-start/configure-bio-json',
        'quick-start/configure-projects',
        'quick-start/configure-essays',
        'quick-start/configure-resume',
        'quick-start/configure-theme',
        'quick-start/next-steps',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: true,
      items: [
        'user-guide/overview',
        'user-guide/tool-installation',
        'user-guide/local-development',
        'user-guide/anatomy-of-bio-json',
        'user-guide/formatting',
        'user-guide/customize-theme',
        'user-guide/customize-layout',
        'user-guide/missing-page',
        'user-guide/drafts',
        'user-guide/invalid-date-field',
        'user-guide/locale-problem',
        'user-guide/v2-migration',
      ],
    },
    'gallery',
    'help',
  ],
};

module.exports = sidebars;

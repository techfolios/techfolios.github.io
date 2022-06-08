/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  publicSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Quick Start',
      collapsed: false,
      items: [
        'quick-start/overview',
        'quick-start/initialization',
        'quick-start/configure-bio-json',
        'quick-start/configure-projects',
        'quick-start/configure-essays',
        'quick-start/configure-resume',
        'quick-start/next-steps',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/overview',
        'user-guide/local-installation',
        'user-guide/local-development',
        'user-guide/reference-guide',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: [
        'developer-guide/overview',
        'developer-guide/theme-customization',
        'developer-guide/manage-this-site',
        'developer-guide/markdown-features',
      ],
    },
    'gallery',
    'help',
  ],
};

module.exports = sidebars;

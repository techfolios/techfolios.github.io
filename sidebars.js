/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  publicSidebar: [
    'overview',
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/overview',
        'user-guide/quickstart',
        'user-guide/local-installation',
        'user-guide/local-development',
        'user-guide/reference-guide',
        'user-guide/gallery',
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
    'help',
  ],
};

module.exports = sidebars;

---
title: Configure theme
hide_table_of_contents: true
---

## What's a theme?

In TechFolios, "theme" refers to the colors and fonts associated with a portfolio (while "layout" refers to the way the various components are laid out on the page).

The default theme associated with the template uses the Open Sans font and a few off-white hues to provide a modern, professional look. But perhaps you are looking for something a little more colorful and offbeat? The template provides a few alternative themes for you to explore. To see which ones are currently provided with the template, check out the `css/techfolio-theme` directory:

![](/img/quickstart/css-techfolio-theme-dir.png)

At the time of writing, there are five pre-built themes available: "bitter.css", "default.css", "lime.css", "skyblue.css", and "rubik.css".

The `_config.yml` file contains a line that specifies the theme associated with a portfolio. By default, it's "default.css":

```yaml
techfolio-theme: default.css
```

To change the theme, edit this line to specify any of the files in the `css/techfolio-theme` directory, then commit your change to rebuild and redeploy your portfolio using that theme. To give you an idea of what the themes do, here's some screenshots:

## bitter.css

This theme changes the font to "Bitter":

![](/img/quickstart/theme-bitter.png)

## rubik.css

This theme changes just the header text to use the chunkier Rubik font:

![](/img/quickstart/theme-rubik.png)

## lime.css

This theme injects a wee bit of green into the theme:

![](/img/quickstart/theme-lime.png)

## skyblue.css

This theme injects some blue into the theme:

![](/img/user-guide/theme-skyblue.png)

## Roll your own

If none of these themes suit your fancy, it's easy to create your own custom theme.  See the [Customize Theme](../user-guide/customize-theme) chapter of the User Guide. 

A more significant customization is to change the layout of your portfolio components. For details, see the [Customize Layout](../user-guide/customize-layout) chapter of the User Guide. 

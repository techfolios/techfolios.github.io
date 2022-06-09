---
title: Change theme
hide_table_of_contents: true
---

In TechFolios, "theme" refers to the colors and fonts associated with a portfolio, and "layout" refers to the way the various components are laid out on the page. 

The default theme associated with the template uses the Open Sans font and a few off-white hues to provide a modern, professional look. But perhaps you are looking for something a little more colorful and offbeat? The template provides a few alternative themes for you to choose from which are located in the `css/techfolio-theme` directory:

![](/img/quickstart/css-techfolio-theme-dir.png)

At the time of writing, there are four pre-built themes available: "bitter.css", "default.css", "lime.css", and "rubik.css".

The `_config.yml` file contains a line that specifies the theme associated with a portfolio. By default, it's "default.css":

```yaml
techfolio-theme: default.css
```

To change the theme, edit this line to specify any of the files in the `css/techfolio-theme` directory, then commit your changes. Here's what the three alternatives to "default.css" do:

## bitter.css

This theme changes the font to "Bitter":

![](/img/quickstart/theme-bitter.png)

## lime.css

This theme injects a wee bit of green into the theme:

![](/img/quickstart/theme-lime.png)

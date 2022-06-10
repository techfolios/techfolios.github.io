---
title: Customize theme
---

The Quick Start discusses how to [configure the theme](../quick-start/configure-theme) using one of the pre-built themes in the `css/techfolio-template/` directory.

But what if none of these pre-built themes works for you? What if you want a different color(s), or font(s), or want them applied to your portfolio in a different way?  If this is your goal, you need to create your own custom theme.  Let's walk through a simple example.

## Create your custom theme file

The first step in developing your own custom theme file is to create a new file in your portfolio's `css/techfolio-template` directory. It's easiest to take one of the existing pre-built themes as a starting point. For the purposes of this example, I'll create a copy of lime.css called skyblue.css in that same directory. 

Skyblue.css starts off looking like this:

```css
/* Lime Theme: modifies the default theme to inject a wee bit o' green in various places. */

/* Use Open Sans as the default font. */
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Source+Code+Pro:300,400,500,700");

/* See https://getbootstrap.com/docs/5.2/customize/css-variables/#root-variables for variables to override. */
:root {
  --tf-green1: #136c14;
  --tf-green2: #4FA64F;
  --tf-green3: #85C285;
  --tf-green4: #e0f2df;
  --bs-font-sans-serif: "Open Sans", sans-serif;
  --bs-link-color: var(--tf-green1);
  --tf-pill-bg: var(--tf-green3);
  --tf-icon-fill: var(--tf-green1);
  --tf-page-bg-color: var(--bs-white);
  --tf-footer-bg-color: var(--tf-green4);
  --tf-projects-bg-color: var(--tf-green4);
}

h1,h2,h3,h4 {
  color: var(--tf-green1);
}

/* Format social media icons */
.tf-social {
  display: inline-block;
  fill: var(--tf-green1);
  height: 1.5em;
  vertical-align: -.1em;
  width: 1.5em;
}

a {
  text-decoration: none;
}
```

## Use your custom theme file 

Next, edit your _config.yml file to specify your new theme file:

```yaml
techfolio-theme: skyblue.css
```

Now type `control-c` to stop your Jekyll process (if it's running), the run `bundle exec jekyll serve` to restart it. This will re-read the `_config.yml` file and use your new theme. It will now look like the "lime.css" theme. 

## Modify colors

For this example, we want to have a blue palette rather than a green palette. I used an online color palette tool to find a few shades of blue, then edited the variable names to use "blue" rather than "green", and provided the new hex values for the blue colors. Here's what it looks like now:

```css
/* Skyblue Theme: modifies the default theme to use blue in various places. */

/* Use Open Sans as the default font. */
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Source+Code+Pro:300,400,500,700");

/* See https://getbootstrap.com/docs/5.2/customize/css-variables/#root-variables for variables to override. */
:root {
  --tf-blue1: #076db3;
  --tf-blue2: #1b6fa9;
  --tf-blue3: #2f8ed0;
  --tf-blue4: #bde3f0;
  --bs-font-sans-serif: "Open Sans", sans-serif;
  --bs-link-color: var(--tf-blue1);
  --tf-pill-bg: var(--tf-blue3);
  --tf-icon-fill: var(--tf-blue1);
  --tf-page-bg-color: var(--bs-white);
  --tf-footer-bg-color: var(--tf-blue4);
  --tf-projects-bg-color: var(--tf-blue4);
}

h1,h2,h3,h4 {
  color: var(--tf-blue1);
}

/* Format social media icons */
.tf-social {
  display: inline-block;
  fill: var(--tf-blue1);
  height: 1.5em;
  vertical-align: -.1em;
  width: 1.5em;
}

a {
  text-decoration: none;
}
```

## Modify headline font

Finally, I rather liked the Rubik font from the pre-built theme, so I'll copy over the definition and use of that font into my skyblue theme. Here's the final theme definition file:

```css
/* Skyblue Theme: modifies the default theme to use blue in various places. */

/* Use Open Sans as the default font. */
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Source+Code+Pro:300,400,500,700");
@import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700");

/* See https://getbootstrap.com/docs/5.2/customize/css-variables/#root-variables for variables to override. */
:root {
  --tf-blue1: #076db3;
  --tf-blue2: #1b6fa9;
  --tf-blue3: #2f8ed0;
  --tf-blue4: #bde3f0;
  --bs-font-sans-serif: "Open Sans", sans-serif;
  --bs-link-color: var(--tf-blue1);
  --tf-pill-bg: var(--tf-blue3);
  --tf-icon-fill: var(--tf-blue1);
  --tf-page-bg-color: var(--bs-white);
  --tf-footer-bg-color: var(--tf-blue4);
  --tf-projects-bg-color: var(--tf-blue4);
}

h1,h2,h3,h4,h5 {
  color: var(--tf-blue1);
  font-family: Rubik;
}

/* Format social media icons */
.tf-social {
  display: inline-block;
  fill: var(--tf-blue1);
  height: 1.5em;
  vertical-align: -.1em;
  width: 1.5em;
}

a {
  text-decoration: none;
}
```

And here's what the skyblue.css theme looks like:

![](/img/user-guide/theme-skyblue.png)

## Going further: Bootstrap CSS Variables

You can get much more elaborate with your customization of the fonts and colors, all it takes is an understanding of [Bootstrap 5 CSS Variables](https://getbootstrap.com/docs/5.2/customize/css-variables/).

If you come up with something you really like, please use the [Help](../help) page to contact us---perhaps we'd like to feature your work in our [Gallery](../gallery)!

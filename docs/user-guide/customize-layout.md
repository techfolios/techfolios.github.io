---
title: Customize layout
---

Let's say you want to add additional pages to your portfolio, or change the way projects appear on the home page from a horizontal to a vertical orientation.  These kinds of changes go beyond the "theme" (i.e. colors and fonts) and instead require changes to the "layout".  This section provides guidance on how you can make these more significant changes to your portfolio.

## Jekyll

First, it's important to know that a TechFolio professional portfolio is simply a customized [Jekyll](https://jekyllrb.com/) static site.  The layout of TechFolio source files corresponds to [Jekyll default directory structure](https://jekyllrb.com/docs/structure/). The pages in the site are defined using the [Liquid Template Language](https://jekyllrb.com/docs/liquid/).

The most important Jekyll aspects of TechFolios is the [_config.yml](https://github.com/techfolios/template/blob/main/_config.yml), the files in the [_layouts/](https://github.com/techfolios/template/tree/main/_layouts) directory, and the files in the [_includes/](https://github.com/techfolios/template/tree/main/_includes) directory.

So, if you want to customize the set of pages in your portfolio, or change the header or footer, you will need to be at least a little bit familiar with Jekyll. 

## Bootstrap

TechFolio uses the [Bootstrap 5](https://getbootstrap.com/) CSS framework. Bootstrap provides convenient ways to organize the layout of content within a single page.

If you want to customize the way content is displayed within a single page, then you'll need to be familiar with Bootstrap.

## Customizing bio.json

It is possible to add fields to bio.json without violating the schema.  In some cases, a good way to implement your customization is by first extending the bio.json format in a backward compatible manner, then creating a custom layout that accesses these additional fields.

An example of this approach is [Philip Johnson's CV page](https://philipmjohnson.github.io/bio/).  This page provides separate sections for various forms of publications (i.e. journals, conferences, etc.) as well as a separate section listing awards that are grants.  To implement this approach, [Philip's bio.json](https://github.com/philipmjohnson/philipmjohnson.github.io/blob/master/_data/bio.json) extends the default bio.json format with additional fields, and then his template checks for those fields when laying out the page.

## Custom layout examples

Here are some examples of custom layouts.

### Katie Amberg-Johnson

### Philip Johnson

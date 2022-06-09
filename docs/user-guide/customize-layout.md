---
title: Customize layout
---

Let's say you want to add additional pages to your portfolio, or change the way projects appear on the home page from a horizontal to a vertical orientation.  These kinds of changes go beyond the "theme" (i.e. colors and fonts) and instead require changes to the "layout".  This section provides guidance on how you can make these more significant changes to your portfolio.

## Jekyll

A TechFolio professional portfolio is basically a customized version of a [Jekyll](https://jekyllrb.com/) static site.  The layout of TechFolio source files corresponds to [Jekyll default directory structure](https://jekyllrb.com/docs/structure/). The pages in the site are defined using the [Liquid Template Language](https://jekyllrb.com/docs/liquid/).

The most important Jekyll aspects of TechFolios is the [_config.yml](https://github.com/techfolios/template/blob/main/_config.yml), the files in the [_layouts/](https://github.com/techfolios/template/tree/main/_layouts) directory, and the files in the [_includes/](https://github.com/techfolios/template/tree/main/_includes) directory.

We recommend that when defining a new theme, make a copy of an existing, working theme, and then start modifying it. Use the above links as reference when you want to do something where there is no existing sample code illustrating how to accomplish it.

## Bootstrap

TechFolio uses the [Bootstrap 5](https://getbootstrap.com/) CSS framework. Bootstrap provides convenient ways to organize the layout of a single page.

### 8.3 Hack the bio.json format

It is possible to add fields to bio.json without violating the schema.  In some cases, the easiest way to implement your vision for your portfolio is by first extending the bio.json format in a backward compatible manner, then creating a custom theme that looks for these additional fields.

An example of this approach is [Philip Johnson's CV page](https://philipmjohnson.github.io/bio/).  This page provides separate sections for various forms of publications (i.e. journals, conferences, etc.) as well as a separate section listing awards that are grants.  To implement this approach, [Philip's bio.json](https://github.com/philipmjohnson/philipmjohnson.github.io/blob/master/_data/bio.json) extends the default bio.json format with additional fields, and then the [bio-publications-2.html](https://github.com/techfolios/template/blob/master/_includes/bio-publications-2.html) template checks for those fields when laying out the page.

You can do the same thing. Just make sure you don't make changes that break either the [JSON Schema Validator](http://www.jsonschemavalidator.net/) or [YAML Lint](http://www.yamllint.com/).

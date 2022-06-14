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

## Layout Walkthrough

To get a sense for how a layout for a TechFolio is constructed, let's look at the default home page. Here's the contents of the top-level index.html page:

```yaml
---
title: Home
layout: home
---

{% include about/about.html %}
{% include projects/projects.html limit=4 %}
{% include essays/essays.html limit=6 %}
```

It specifies that the layout for this page is "home", which is located in `_layouts/home.html`:

```yaml
---
layout: default
---
{% include header.html %}
{{ content }}
{% include footer.html %}
```

This layout specifies yet another layout ("default", which we won't show but provides the `<head>` portion of the HTML to be included in all pages). The body of this layout includes header.html, the "content" from the page that uses this layout, followed by the footer.  This means (excluding the default layout), that the index.html page is constructed from five include files, organized as follows:

```yaml
{% include header.html %}
{% include about/about.html %}
{% include projects/projects.html limit=4 %}
{% include essays/essays.html limit=6 %}
{% include footer.html %}
```

If you look at the home page for the template, you can see the correspondence to these five sections.

The "layout" files allow you to flexibly compose and organize bits of HTML, which are provided in "include" files. Let's look at the header.html include file, which is located in `_includes/header.html`:

```html
<header class="navbar navbar-expand navbar-light bg-light bg-gradient border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="{{ '/' | prepend: site.baseurl }}">{{ site.data.bio.basics.name }}</a>
    <div class="ms-auto">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <a class="nav-link" href="{{ '/#projects' | prepend: site.baseurl }}">Projects</a>
        <a class="nav-link" href="{{ '/#essays' | prepend: site.baseurl }}">Essays</a>
        <a class="nav-link" href="{{ '/bio/' | prepend: site.baseurl }}">Resume</a>
      </ul>
    </div>
  </div>
</header>
```

An include file consists of a mixture of HTML, Bootstrap CSS classes, and [Liquid](https://jekyllrb.com/docs/liquid/) template directives, which enable you to insert data from `bio.json` or `_config.yml`.

So, to create your own custom layout, you can do two things:

  1. Change one or more layout files, or add new ones. This enables you to modify and/or add new "sections" to one or more pages in your site.
  2. Change one or more include files, or add new ones. This enables you to modify the way a specific section within a page looks. For example, you might do this to change the Bootstrap CSS associated with a part of your portfolio.

## Customizing bio.json

It is possible to add fields to bio.json without violating the schema.  In some cases, a good way to implement your customization is by first extending the bio.json format in a backward compatible manner, then creating a custom layout that accesses these additional fields.

An example of this approach is [Philip Johnson's CV page](https://philipmjohnson.github.io/cv.html).  This page provides separate sections for various forms of publications (i.e. journals, conferences, etc.) as well as a separate section listing awards that are grants.  To implement this approach, [Philip's bio.json](https://github.com/philipmjohnson/philipmjohnson.github.io/blob/master/_data/bio.json) extends the default bio.json format with additional fields, and then his template checks for those fields when laying out the page.

## Custom layout examples

Here are some examples of custom layouts.

### Katie Amberg-Johnson

![](/img/gallery/kambergjohnson-com.png)

This portfolio customizes the default template in the following ways:

* About section is modified to put the summary paragraph below the headshot and network icons.
* A new section called "Papers" provides access to publications.
* A new "About" page provides a brief biographical sketch.
* The navbar has a "CV" link that goes directly to a PDF version of the CV. There is no HTML page.
* The site is available at a custom domain (kambergjohnson.com).

Yes, in case you were wondering at the resemblence, Katie agreed to allow her headshot to be used for the Molly Maluhia template!

Source code: https://github.com/kambergjohnson/kambergjohnson.github.io

Live site: https://kambergjohnson.com

### Philip Johnson

![](/img/gallery/philipmjohnson.png)

This portfolio customizes the default template in the following way:

* The headshot is smaller, and the Interests and Network icons are full-width and below the picture and summary.
* There are more than 4 projects and 6 essays, illustrating the (built-in) "See all" feature for projects and essays.
* The site provides a curriculum vitae rather than a resume. This is implemented by:
    * Extensions to bio.json to include publications.
    * A new cv.html page to replace resume.html.
    * Modifications to header.html to provide "CV" as the label which links to the cv.html page.
* The projecturl and essayurl features are used to link to external sites in some cases.
* The site is available at a custom domain (philipmjohnson.org).

Source code: https://github.com/philipmjohnson/philipmjohnson.github.io

Live site: https://philipmjohnson.org

## Show us what you got!

If you come up with an interesting layout, please contact us via the [Help](../help) page. Perhaps we'd like to showcase your work in our [Gallery](../gallery.md)!

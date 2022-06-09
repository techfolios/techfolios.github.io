---
title: Reference Guide
---



## 3. Anatomy of bio.json

## 4. Missing pages

The template techfolio comes with default handling when users request an URL not associated with the site (i.e. 404 errors). The default response (see the top-level [404.md](https://github.com/techfolios/template/blob/master/404.md) file and the [missingpage.html template](https://github.com/techfolios/template/blob/master/_layouts/missingpage.html)) is to indicate that the URL was not found and provide a list of links to all projects and essays. For example:

![](/img/user-guide/techfolio-missing-page.png)

This is helpful if you are transitioning to TechFolio from another professional portfolio site and worry that others might have bookmarked URLs that will no longer point correctly to your updated essay and project pages.

If you prefer to handle 404 errors in a different way, the best way is to create a copy of the missingpage.html layout file (such as missingpage-pj.html) and then edit the front matter in 404.md to point to your new missingpage-pj layout.  Then edit missingpage-pj.html to provide whatever information you wish to the user.

## 5. Drafts

Let's say you are working on a project description or essay over a period of days, and it's not yet ready for inclusion in your Essays or Projects page.  You can exclude it from being listed by including "draft: true" the following in your YAML front matter. For example, here's the front matter for an example draft essay:

```markdown
---
layout: essay
type: essay
draft: true
title: Igniting the fire
date: 2015-08-26
labels:
  - Software Engineering
  - Learning
---
```

This essay will not appear in the list of essays on your Essays page, but it can be retrieved if you know the URL (in this case, it's mostly likely essays/2015-08-26.html).

## 7. Formatting

Creating attractive project and essay pages requires basic understanding of GitHub Flavored Markdown (for text) and Semantic UI (for images). Fortunately, it's not complicated.

### 7.1 Format text

To format text, use Markdown. For example, to create an H1 header, use `#`.  To italicize a word, surround it with `*`. To create a link, start by enclosing the link label in `[]` and follow it with the URL in `()`.  Here are some examples:

```
# Section 1
## Section 1.1

I think TechFolios is *awesome*.

Here is a link to [TechFolios](http://techfolios.github.io).
```
**Note that you must put a space between the # header character(s) and the title text!**

GitHub provides excellent documentation on the Markdown formatting available in [basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/), including boldface, quotes, lists, code blocks, and so forth.

### 7.2 Format images

You can insert images using the plain old `<img>` HTML tag, but you can control the formatting of your images much better if you take advantage of the [Semantic UI image classes](http://semantic-ui.com/elements/image.html). The example Molly Maluhia portfolio provides examples of the most common kinds of image formatting.

**Float an image.** The [Vacay Project Page](https://techfolios.github.io/template/projects/vacay) illustrates how to float an image to the right side of the text. Here is the code used to produce that image:

```
<img class="ui medium right floated rounded image" src="../images/vacay-home-page.png">
```

Note that this example not only floats the image to the right, but also sets the size to medium and rounds the corners.

**Icon images.** The [Vacay Project Page](https://techfolios.github.io/template/projects/vacay) also illustates the display of an icon, in this case, the GitHub icon in the link at the bottom of the page.  Here is the code used to produce that:

```
<a href="https://github.com/theVacay/vacay"><i class="large github icon"></i>theVacay/vacay</a>
```

For a complete list of available icons, see the [Semantic UI Icon Documentation](http://semantic-ui.com/elements/icon.html).

**Groups of images.** The [Micromouse Project Page](http://techfolios.github.io/template/projects/micromouse) illustrates a simple way to provide a group of images with similar formatting. In this case, all the images have the same size and rounded corners. Here's the code that produced that format:

```
<div class="ui small rounded images">
  <img class="ui image" src="../images/micromouse-robot.png">
  <img class="ui image" src="../images/micromouse-robot-2.jpg">
  <img class="ui image" src="../images/micromouse.jpg">
  <img class="ui image" src="../images/micromouse-circuit.png">
</div>
```

**Circular images.** In some situations, circular images provide a nice design element for your page.

*Important note: To create circular images, the source image must be square!!* If your source image is not square, then the resulting "circular" image will actually be an oval.

I also recommend that if you want circular images, make sure the source image has a non-white background color. Otherwise, the circular nature of the image will be lost.

The [Igniting the fire essay](http://techfolios.github.io/template/essays/2015-08-26.html) provides three examples of circular images. Here's an abbreviated version of the essay's markdown illustrating how the circular images were inserted and floated:

```
<img class="ui tiny left circular floated image" src="../images/paintbrushes.jpg">

Ever since I first grasped a paintbrush...

<img class="ui tiny left circular floated image" src="../images/design-technology.jpg">

I never used to think that design and technology...

<img class="ui tiny left circular floated image" src="../images/software-code.jpg">

I am now starting to take a Software Engineering class...
```

**Location of image files.**  In the Molly Maluhia portfolio, a top-level images/ directory holds all the image files.  Every project and essay can thus refer to an image through a relative link (i.e. `src="../images/the-image.png"`).  This is not mandatory; you can put images whereever you want, but I find an images/ directory to be helpful for organization.

### 7.4 Format video

The [Hackystat Project Page](http://philipmjohnson.org/projects/hackystat) illustrates an embedded video. Here is how that YouTube video is embedded in that page:

```
<div class="ui embed" data-source="youtube" data-id="NrLFIpm0wps" >
</div>
```

To learn how to embed other kinds of media, see the [Semantic UI embed documentation](http://semantic-ui.com/modules/embed.html).

## 8. Custom theme design

If you want to create your own custom themes, you need to become familiar with two facilities: Jekyll templates and Semantic UI.

### 8.1 Jekyll Templates

TechFolio is based on [Jekyll](https://jekyllrb.com/).  Each of the pages are built using [Jekyll Templates](https://jekyllrb.com/docs/templates/), which in turn are based on the [Liquid Template Language](https://github.com/Shopify/liquid/wiki).

We recommend that when defining a new theme, make a copy of an existing, working theme, and then start modifying it. Use the above links as reference when you want to do something where there is no existing sample code illustrating how to accomplish it.

### 8.2 Semantic UI

TechFolio uses [Semantic UI](http://semantic-ui.com/) as its CSS framework.  See the Semantic UI documentation for details on this framework. Currently TechFolio uses Version 2.1.

### 8.3 Hack the bio.json format

It is possible to add fields to bio.json without violating the schema.  In some cases, the easiest way to implement your vision for your portfolio is by first extending the bio.json format in a backward compatible manner, then creating a custom theme that looks for these additional fields.

An example of this approach is [Philip Johnson's CV page](https://philipmjohnson.github.io/bio/).  This page provides separate sections for various forms of publications (i.e. journals, conferences, etc.) as well as a separate section listing awards that are grants.  To implement this approach, [Philip's bio.json](https://github.com/philipmjohnson/philipmjohnson.github.io/blob/master/_data/bio.json) extends the default bio.json format with additional fields, and then the [bio-publications-2.html](https://github.com/techfolios/template/blob/master/_includes/bio-publications-2.html) template checks for those fields when laying out the page.

You can do the same thing. Just make sure you don't make changes that break either the [JSON Schema Validator](http://www.jsonschemavalidator.net/) or [YAML Lint](http://www.yamllint.com/).

## 9. Debugging

If your site does not display at all, or does not publish your updates within a minute or so, then it is likely that you have introduced an error in your TechFolio setup.  To find out, go to your TechFolio GitHub repository in your browser and click on the Settings link, then scroll down to the "GitHub Pages" section.  If there was an error building your site, GitHub will sometimes indicate it there. Here is an example of an error due to a missing comma in my bio.json file:

Other times, GitHub does not indicate an error, and instead your project or essay simply fails to appear in your site. In this case, the following tips might help you figure out what to do:

### 9.1 Site doesn't display: Poorly formatted Molly Maluhia instead

Sometimes you might find that when you are trying to get your portfolio up for the first time, the page looks like this even through you've made changes to the config.yml and other files:

If your portfolio looks like the above, please go to the Settings page, scroll down to the GitHub Pages section, and if necessary change the source branch from "gh-pages" to "master" and click "Save".  You may have to commit another change to trigger a rebuild of the repo; I'm not sure whether or not that's necessary.

### 9.1 Site doesn't update (tip 1): invalid date field

The all-time most popular reason for the build failing is an error in the date field. In projects and essays, the date field should be a valid date (in YYYY-MM-DD) format. For example:

```
date: 2016-01-01
```

The following date fields will result in an error and your site will not update:

```
date: 2021-01
date: Feb 2021
date: 01-01-2021
date: 2021-1-1
```


### 9.2 Site doesn't update (tip 2): permalinks

The "permalink" field can be used to provide a better URL for a project page. If you don't supply a permalink, then the file name (with a .html rather than .md extension) will be used. Permalinks should be all lower case and provide the path to the projects section.  For example, a valid permalink might look like this:

```
permalink: projects/hackystat
```

Don't supply an actual URL as the permalink (i.e. "http://foo.bar/").

Also, make sure you don't use the same permalink for two different projects or essays. That will make one unavailable.

### 9.3 Site doesn't update (tip 3): Title contains a ':' or a ','

If your title field contains punctuation and is not in quotation marks, then Jekyll will fail to build the page. Here's an example:

```
title: Kukui Cup: The Semantic UI Version
```

Notice that the title contains a ":".

To fix this error, just put your title in quotes:

```
title: "Kukui Cup: The Semantic UI Version"
```

### 9.4 Site doesn't update (tip 4): No space between field name and field value

You must have a space between the field name and its value. This is illegal:

```
title:Foo
```

This is correct:

```
title: Foo
```

### 9.5 Site doesn't update (tip 5): Check your bio.json

Your site will not update if you have a syntax error in your bio.json file. To debug this, see the instructions in Section 3.3: Debugging bio.json.

### 9.6 Install Jekyll locally

If none of these tips help, the final way to determine the error is to run your site locally. You can either [install Jekyll](https://jekyllrb.com/) and build your site locally, or else ask someone who has Jekyll running locally to build your site and let you know the error.

## Locale problems

If you get the following error:

```
$ bundle exec jekyll serve --baseurl ''
Configuration file: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_config.yml
            Source: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io
       Destination: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
  Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':
                    Invalid US-ASCII character "\xE2" on line 5
jekyll 3.7.4 | Error:  Invalid US-ASCII character "\xE2" on line 5
```

The solution is to set LANG and LANGUAGE to "utf-8". (Not UTF-8 or en_US.UTF-8.)

An easy way to do this in Unix environments is with this script:

```
#!/bin/bash

export LANGUAGE=utf-8
export LC_ALL=utf-8
```

---
title: Reference Guide
---

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

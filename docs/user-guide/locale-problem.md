---
title: "Error: Invalid US-ASCII character"
hide_table_of_contents: true
---

If you get the following error:

```
$ bundle exec jekyll serve 
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

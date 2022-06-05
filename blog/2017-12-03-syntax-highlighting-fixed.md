---
slug: syntax-highlighting-fix
title: Syntax highlighting fix
authors: johnson
tags: [bug]
---

There has been a longstanding bug in Techfolios which prevented [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) from being highlighted.

We finally figured out the problem: Techfolios need to load a rouge style file, and they weren't. With today's commit, the Techfolio header will load a rouge style sheet from the css/rouge directory.  There are a selection of rouge style files stored in there; you can change the default selected file by editing _config.yml. 

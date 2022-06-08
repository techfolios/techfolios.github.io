---
title: Local installation
---

To more easily manage your portfolio, you should install three tools on your computer: (a) a git client so you you can download and upload the GitHub repository containing your site's files, (b) an editor so you can edit your source files, and (c) Jekyll so you can build your site locally and see changes quickly.

## Install GitHub Desktop (or another git client)

If you are using MacOS or Windows, the easiest way to manage your portfolio repository is with [GitHub Desktop](https://desktop.github.com/).  GitHub Desktop provides an extremely easy way to download your portfolio files from GitHub to your computer for editing, and then push the files back to GitHub for deployment once you're ready for that to happen.

If you are using Linux, then you will need to install a different git client. If you are using Linux, you probably know this already and already have a git client installed.

## Install an editor

You cannot use a word processor like Microsoft Word to edit your professional portfolio.  Instead, you need a text editor such as Emacs, Vim, IntelliJ IDEA, Microsoft Visual Studio, Eclipse, Atom, or similar.

Please be sure to install a text editor on your computer.  Any one will do.

## Install Jekyll

The final step is to [install Jekyll](https://jekyllrb.com/docs/installation/). Jekyll runs on all platforms.

To verify that you've installed Jekyll correctly, please go through the [Jekyll Quickstart](https://jekyllrb.com/docs/) instructions to be sure that you can create a simple Jekyll site and display it on your computer.

:::warning You need to run `bundle add webrick`
The Jekyll documentation for the Quick Start notes that "Step 5 may fail".  Yes, it almost certainly will.  As instructed, go ahead and run:  

```sh
bundle install webbrick
```

Then run `bundle exec jekyll serve` and things should work correctly.
:::

If you have followed the Quickstart instructions successfully, then you should be able to go to http://127.0.0.1:4000/ and see the following page:

![](/img/user-guide/jekyll-quick-start-page.png)

Make sure you can see this page after running `bundle exec jekyll serve`.  Once you can, then you know you have successfully installed Jekyll.

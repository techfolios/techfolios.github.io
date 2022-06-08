---
title: Local development
---

## Clone your repo

The first step in setting up local development is to "clone" the GitHub repository containing your professional portfolio source files to your computer. To do this, go to your repo, click on "Code", and then select "Open with GitHub Desktop":

![](/img/user-guide/portfolio-download-desktop.png)


That will bring up GitHub Desktop, which will ask you where in your file system you want to locate the files associated with this repository:

![](/img/user-guide/desktop-clone-dialog.png)


Adjust the "Local Path" to your liking, then click "Clone" to create a copy of your repository on your computer. You will now have a local directory containing files similar to this:

![](/img/user-guide/local-repo-dir.png)

## Install libraries

Next, you need to install the libraries associated with TechFolios. To do this, open a Terminal (or shell), change directories to your repository directory, and invoke `bundle install`:

```shell
$ bundle install
Fetching gem metadata from https://rubygems.org/..........
Resolving dependencies...
Using public_suffix 4.0.7
Using bundler 2.3.4
 :
 :
Using jekyll 4.2.2
Using octokit 4.24.0
Using jekyll-gist 1.5.0
Bundle complete! 7 Gemfile dependencies, 43 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
1 installed gem you directly depend on is looking for funding.
  Run `bundle fund` for details
$
```

## Run jekyll

Now, build your professional portfolio and enable it to be displayed locally on your laptop by invoking `bundle exec jekyll serve`:

```shell
$ bundle exec jekyll serve
Configuration file: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_config.yml
To use retry middleware with Faraday v2.0+, install `faraday-retry` gem
            Source: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io
       Destination: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.045 seconds.
 Auto-regeneration: enabled for '/Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
 ```

Now look for the "Server address:" field on the second to last line, which will usually be http://127.0.0.1:4000/. Cut and paste this url from your terminal window into a browser, and your portfolio should appear:

![](/img/user-guide/local-portfolio.png)

The huge advantage to installing these tools and cloning your portfolio repo is that you can now almost instantly see how your edits to the source files change the presentation of your portfolio.  When you edit the files at GitHub, which is what you did during the Quick Start, you had to commit your changes and wait at least a minute to see how those changes looked in your portfolio. This time lag is simply unacceptable!

## The build-edit-view-deploy workflow

The most efficient way to work on your portfolio is with what we call the "build-edit-view-deploy workflow".  It works like this.

### Build

The first step is to build your portfolio locally. As we saw above, you do this by invoking invoking `bundle exec jekyll serve`.

Now your portfolio is available for viewing at http://127.0.0.1:4000/. 

More importantly, changes you make to your portfolio can be seen almost instantly at that URL, which brings us to the "edit" step.

### Edit

Let's say that I want to add a new interest to my portfolio called "Food Resiliency".  To do this, I bring up an editor (in my case, IntelliJ IDEA), and edit my bio.json file to include this interest:

![](/img/user-guide/intellij-bio-json.png)

Save the file.

### View

To see the impact of my edit to bio.json on my portfolio, first check the console to see that no errors were generated:

```shell
$ bundle exec jekyll serve                                         12:10:16
Configuration file: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_config.yml
To use retry middleware with Faraday v2.0+, install `faraday-retry` gem
            Source: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io
       Destination: /Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.045 seconds.
 Auto-regeneration: enabled for '/Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
                    
      Regenerating: 1 file(s) changed at 2022-06-08 12:12:11
                    _data/bio.json
                    ...done in 0.018813 seconds.
```

Now refresh the browser window displaying http://127.0.0.1:4000/ to see the change:

![](/img/user-guide/local-portfolio-2.png)

As you can see, "Food Resiliency" is now listed as an interest.

### Deploy

So, my local copy of my professional portfolio is now updated, but how do I publish this change for all the world to see? 

That's simple: just bring up GitHub Desktop, which shows that you've made a change to your local clone of the repo:

![](/img/user-guide/github-desktop-change.png)

Type in a commit comment, then click "Commit to main" to commit these changes locally. Afterwards, GitHub Desktop will look like this:

![](/img/user-guide/github-desktop-change-2.png)

Now press the "Push origin" button in the upper right corner to push your local changes to the copy of your repository located at GitHub.  Afterwards, GitHub Desktop will look like this:

![](/img/user-guide/github-desktop-change-3.png)

This change to the contents of your professional portfolio repository at GitHub triggers a new build of your professional portfolio using GitHub Actions. You can see the progress by click on the Actions tab of your GitHub portfolio home page:

![](/img/user-guide/food-resiliency-commit-action.png)

With a couple of minutes, this action and the following one to build and deploy should finish successfully:

![](/img/user-guide/food-resiliency-action-complete.png)

Once those actions are done, you can now see the deployed version of your portfolio, in my case https://philipmjohnson.github.io:

![](/img/user-guide/food-resiliency-deployed.png)

As you can see, my new "Food Resiliency" interest now appears in the published version of my portfolio.

## Making mistakes

Life would be so much better if we never made mistakes.  Let's see what happens when we make one. 

Let's say that I forgot to put a comma at the end of the line specifying my new Food Resiliency interest:

![](/img/user-guide/bio-json-error.png)

What happens in this case is that http://127.0.0.1:4000/ will not update to display the new interest, which is confusing. To understand that there's a problem, you need to look at the shell window, which in this case displays the following:

```shell
Error: (/Users/philipjohnson/github/philipmjohnson/philipmjohnson.github.io/_data/bio.json): did not find expected ',' or ']' while parsing a flow sequence at line 16 column 16
```

The error message isn't perfect: the actual problem is on line 19, not line 16, but it does tell you that the JSON parser expected a "," and didn't find one. 

This is why it's very important to monitor the shell output while you do local development---if you make a mistake, the shell will often let you know.

:::tip Good editors are great
If you look closely at the editor window above, you'll see that there is a red squiggly line at the end of line 19, and if you hover over it, the editor will tell you that you're missing a comma! 

Moral of the story: use a good editor, they'll save you a lot of time.
:::

## Try it yourself

Now that you've seen how to build, edit, view, and deploy a portfolio, go ahead and use this process to make a very simple change to your own portfolio.  That will get you ready for making more complicated improvements, as we'll describe in the next section.

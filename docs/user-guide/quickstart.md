---
title: Quick Start
---

:::warning June 1, 2022: Under Construction!
I am actively working on these instructions. I anticipate completing them around June 12, 2022. Please check back then!
:::

This Quick Start is intended to provide the minimum of information necessary to produce your first draft of a professional portfolio. 

## Initial setup 

The following initialization tasks are "one time only".

### Join GitHub

To get started with TechFolios, all you need is an account at GitHub. You don't need to download any software or even know how to use git. Everything you need to do for this Quick Start can be done in a browser.

If you haven't already, [sign up for GitHub](https://help.github.com/articles/signing-up-for-a-new-github-account) and [verify your email address](https://help.github.com/articles/verifying-your-email-address/). Choose your username wisely, as that will become part of the URL to your portfolio site.

:::tip Username recommendations
Keep your username professional and close to your real name: "the3Gr8est" might seem super clever to you right now, but will be awkward and embarrassing to you during an interview next year. Restrict yourself to lowercase characters, numbers, and hyphens to make it simple to remember. Uppercase adds unnecessary confusion.  Don't make your username location-specific: "philip-at-manoa" will be confusing if you move next year to San Francisco.
:::

If you decide your current GitHub username could use some improvement, it is very easy to [change your GitHub username](https://help.github.com/articles/changing-your-github-username/) to something more professional.

Before proceeding, [login](http://github.com/login) to your GitHub account.

### Copy the template

In this step, you'll make your personal copy of the TechFolio template. 

First, go to [https://github.com/techfolios/template](https://github.com/techfolios/template):

![](/img/quickstart/template-page.png)

Click the `Use this template` button. Select your account as the "Owner", and specify the repository name as your account name plus ".github.io". It should look like this:

![](/img/quickstart/create-repository.png)

Then press the `Create repository from template` button. GitHub will make a new copy of the template in your account and display a page like this:

![](/img/quickstart/template-copy.png)

:::warning Verify your repository name
Make sure the repository name is correct. As you can see in this example, since my GitHub username is "philipmjohnson", the repository name must be "philipmjohnson.github.io". If the first part of the repository name does not match your GitHub username exactly, then you need to rename your repository right now to make it match. Click on the Settings link to rename your repo, it's easy to fix. 
:::

Now let's fix the "About" section to link to your portfolio. Click on the gear icon next to the "About" label, which brings up a dialog box. Add "Professional Portfolio" as the description, add "https://USERNAME.github.io" (where USERNAME is our username) as the website, and (if you want) add "professional-portfolio" as a topic.  The result should look like this:

![](/img/quickstart/about-dialog.png)

After saving the changes, you'll have a convenient link to your professional portfolio on the home page for this repo.

### Configure `_config.yml`

Now that your repository is set up, we can start editing the template files to make this professional portfolio your own.

Scroll down the repository home page until you find the file named "_config.yml", and click on it, which will bring up a page that looks like this:

![](/img/quickstart/config-yml.png)

Click the pencil icon on the right hand side to edit the file:

![](/img/quickstart/config-yml-edit1.png)

The first section of the file, "Required Changes", contains the three lines you have to change.
Edit `title:` to specify your own name, edit `url:` to specify your portfolio, and edit `baseurl:` to be the empty string. When you're done editing, that section of _config.yml should look similar to this:

![](/img/quickstart/config-yml-edit2.png)

Scroll to the bottom of this page and click "Commit changes" to save these changes.

### Monitor the build

Every time you commit a change to your portfolio, GitHub will attempt to build and deploy your revised portfolio. It does this through a technology called [GitHub Actions](https://docs.github.com/en/actions).  In fact, GitHub is trying to build a new version of your portfolio right now.  Let's watch.

First, click on the "Actions" label on the home page of your repository.  That will take you to a page that looks like this:

![](/img/quickstart/actions-page.png)

This page indicates that two GitHub Actions (i.e. "workflows") named "pages-build-deployment" have previously run and completed successfully (indicated by the green checkmarks).  There is a workflow called "Jekyll Deploy" that is running right now (indicated by the yellow dot).  GitHub labels this workflow execution instance using the commit message associated with the change to the repository that triggered the Action. In this case, it was "Update _config.yml". 

You can watch the build in more detail by clicking on the "Update _config.yml" line, which takes you to a page like this:

![](/img/quickstart/actions-page2.png)

Clicking on the "build_and_deploy" label takes you to a page that shows the actual progress through the build:

![](/img/quickstart/actions-page3.png)

Finally, you can click on the arrow next to any build step and see what happened during it:

![](/img/quickstart/actions-page4.png)

After a few minutes, the Jekyll Deploy workflow will complete and the Actions page will look like this:

![](/img/quickstart/actions-page6.png)

Notice that there is a green checkmark beside the "Update _config.yml" workflow run, indicating that it has completed successfully.

:::info Why monitor the build?
There are two reasons it is useful to know how to monitor the build:

  1. By monitoring the build, you'll know when your updated portfolio is ready to be viewed.
  2. Monitoring the build lets you know if any errors occurred during the build.

Also, please note that the very first time you try to build your portfolio, it takes about five minutes, which is a long time!  Don't worry, though: after this very first build, GitHub will cache the build artifacts and your future builds should take less than a minute to complete.
:::

### Set gh\_pages 

The above build process has created a new branch in your repo called "gh_pages".  Now you need to tell the GitHub Pages mechanism that this is where to look for your professional portfolio files. To do this, click on the "Settings" tab, and then on the "Pages" tab. This will take you to the following page:

![](/img/quickstart/pages-tab.png)

Click on the button named "Branch: main", and select "gh-pages", then click "Save". The page should now look like this:

![](/img/quickstart/pages-tab2.png)

Now click on the "Actions" tab and you'll notice that changing the branch from main to gh-pages has resulted in a new workflow run called "pages build and deployment":

![](/img/quickstart/pages-workflow-run.png)

This run only took 36 seconds, so it completed by the time I switched to this tab. If you click on this workflow run, you'll see a page like this:

![](/img/quickstart/pages-workflow-run2.png)

### View your portfolio

As you can see, this page has a link to your professional portfolio.  Click on it and you'll see your brand new professional portfolio!

![](/img/quickstart/initial-portfolio.png)

Congratulations!

## Configure bio.json

OK, I understand if you are a bit disappointed right now---unless you are Molly Maluhia, that portfolio doesn't look like you at all!  

The good news is that you've finished the "initial setup" for your TechFolio, and now you can start learning how to customize it to reflect your accomplishments over time. 

### Create a headshot

The default TechFolio layout requires a square image to be used as the "head shot".  So, take a moment right now to look through your photos to find a picture that you want to use as the head shot. 

While there are different ways to create a URL to that image and make it square if it isn't already, a very easy way is to upload that photo as your GitHub profile picture, which will automatically crop it into a square image if it isn't already. 

To do this, go to your account page and then move your mouse over the head shot area, which will make the image a button with the comment "Change your avatar"

![](/img/quickstart/change-avatar.png)

Click on the image to bring up a page where you can edit your profile picture:

![](/img/quickstart/change-avatar2.png)

Click on the "Edit" link and select "Upload a photo...".  Select the file from your computer with your headshot image. GitHub will then display a dialog that enables you to crop and center your head shot:

![](/img/quickstart/change-avatar3.png)

When you have finished the upload process, GitHub will provide a link to your profile picture as "https://github.com/USERNAME.png", where USERNAME is your GitHub username.  For example, here's "https://github.com/philipmjohnson.png":

![](/img/quickstart/change-avatar4.png)

(Note that GitHub will redirect this URL to a different, more complicated URL, but you can always use the simple one).

Now that you have a URL that you can use for your head shot, let's fix the basic biographical information in your portfolio.

### Edit basics and interests

To configure the name, head shot, and other basic information that appears in your TechFolio, you have to edit a file called "bio.json".  It's in the `\_data` directory. To get there, go to your repo home page and click on the _data directory to bring you to the following page:

![](/img/quickstart/bio-json1.png)

Click on bio.json to get to this page:

![](/img/quickstart/bio-json2.png)

Now click the pencil icon to edit this file within your browser:

![](/img/quickstart/bio-json3.png)

Notice the dropdown that currently specifies "No wrap".  That's irritating, because certain lines (like the summary line) run right off the right side of the browser window.  To fix this, press that dropdown and select "Soft wrap" instead. This way you can see the entire contents of each line within your browser without horizontal scrolling:

![](/img/quickstart/bio-json4.png)

OK, now go ahead and edit the "basics" section and the "interests" section to provide your own information. Here's what I did:

![](/img/quickstart/bio-json5.png)

:::warning No commas at the end of a section!
There is one tricky thing you need to know when editing this file.  Because it's a "json" file, you have to observe some strict syntax rules.  In particular, the lines between the square brackets have to be separated by commas, **except for the last line, which cannot have a comma.**  Because I deleted the Twitter and Instagram lines in the "profiles" section, as well as one of the interests in the Interests section, I needed to make sure that the last line in each of those sections did not have a comma. The red boxes in the image above shows the last lines of those sections and how they do not have a comma.

If you make a mistake when editing the bio.json file, the build will fail.  That's not a big deal, it happens to everyone occasionally. I'll tell you what to do in this case in a bit. 
:::

After making your changes to the "basics" and "interests" section of bio.json, then scroll to the bottom of the page and click "Commit changes".  Now GitHub will display the saved file:

![](/img/quickstart/bio-json7.png)

In addition, since you committed a change to your repo, GitHub will start a new build of your portfolio.  Click on the Actions tab to see:

![](/img/quickstart/bio-json8.png)

As before, you can click into the workflow to see what's happening. In this case, the most important workflow item to check is the one called "validate-bio-json-file":

![](/img/quickstart/bio-json9.png)

This task checks the syntax of your bio.json file. As you can see, in this case, it did not find any errors. 

:::info What to do if the build fails with an error in your bio.json file?
If the build fails due to a problem with your bio.json, the easiest thing to do is to use an online json syntax checker like https://jsonchecker.com to check the syntax of your file and show you where it needs fixing. Then edit your file, save it, and this will kick off a new build of your portfolio.
:::

If the "Update bio.json" action completes successfully, then new files will be written to the gh\_pages branch of your repo, which will trigger the "pages build and deployment" action.  This action takes typically about 30 seconds to complete. Wait until you get the green checkmark:

![](/img/quickstart/bio-json10.png)

Once it completes, your portfolio is ready to be viewed again. Here's what mine looks like now:

![](/img/quickstart/bio-json11.png)

Now we're getting somewhere!  As you can see, the first part of the page should now accurately reflect your professional details. But if you scroll down, the Projects and Essays sections are still based on the template, and if you click on the "Resume" link, that won't provide correct details either.  The next three sections will explain how you can start fixing those problems.

## Configure projects

### The default projects

The template comes with three sample projects: Vacay, Micromouse, and Cotton:

![](/img/quickstart/default-projects.png)

To define a project in TechFolios, you create a file in the projects/ directory.  So, in the template/projects directory, there are three files, one for each project:

![](/img/quickstart/projects-dir.png)

Projects are implemented using a format called [GitHub Flavored Markdown](https://github.github.com/gfm/), and project files should have the extension ".md" to indicate they are in this format. If you click on the cotton.md file, GitHub will display the page like this:

![](/img/quickstart/cotton-file-display.png)

I personally find this display quite confusing. Click on the "Raw" button to see what the file contents actually look like:

![](/img/quickstart/cotton-file-display-raw.png)

### Project front matter

There are two parts to a project file.  The first part is called the "front matter". Every project file must have front matter, which is at the top of the file and delineated by three dashes. In the case of cotton.md, the front matter is:

```
---
layout: project
type: project
image: img/cotton/cotton-square.png
title: "Cotton"
# All dates must be YYYY-MM-DD format!
date: 2014-04-12
published: true
labels:
  - Lisp
  - GitHub
summary: A text adventure game I developed for ICS 313.
---
```

Here's a little bit about each of these fields:

| Field      | Description                                                                                                                                      |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| layout:    | For projects, must be "project"                                                                                                                  |
| type:      | For projects, must be "project"                                                                                                                  |
| image:     | The path to the file containing an image to be displayed on your TechFolio home page with the project. We highly recommend that you crop this image to be a square. |
| title:     | The title of your project. It's best to always put your title in quotation marks.                                                                |
| date:      | The date associated with your project, in YYYY-MM-DD format. TechFolios uses this field to display your projects in reverse chronological order. |
| published: | A boolean, either "true" or "false". You can set this to false to prevent TechFolios from presenting this project file in your portfolio. This is useful if you want to keep one of the default project files in your repo as an example, but not actually publish it as part of your portfolio. |
| labels:    | An indented list of strings that show up as labels in the project description. |
| summary:   | One or two sentences that summarize your project. It's best to always put the summary in quotation marks. |

### Project body

Following the front matter is the project body. A formatted version of the project body appears when you click the "Read More" button on the home page for a specific project. In the case of the Cotton project, the following page appears:

![](/img/quickstart/cotton-page-body.png)

This was generated from the following markdown:

```markdown

<img class="img-fluid" src="../img/cotton/cotton-header.png">

Cotton is a horror-esque text-based adventure game I developed using the functions and macros built from The Wizard's Game in [Conrad Barski's Land of Lisp](http://landoflisp.com/). Slightly more interesting and convoluted! (It is not that scary.)

To give you a flavor of the game, here is an excerpt from one run:

<hr>

<pre>
You open your eyes, and you are greeted by an unfamiliar ceiling.
Startled, you get to your feet and quickly scan your surroundings. It's
dark except for the stream of light coming from a crack on the only boarded
window in the room. You try to peek through the crack, but you cannot see
anything. You wonder where you are and who could have possibly brought you here.

<--------------------help------------------------>
Enter quit or one of the following commands -
Weld light look walk pickup inventory help h ?
<------------------------------------------------>

look
The room is a picture of decay with only a faded number identifying it as room-4. The bed you were
 lying on is stained with what looks like dried blood. Could it be your blood? No - it is not. The
 only way out of the room aside from the door to the corridor is a window that is boarded shut. It
 looks like it has been like that for decades. There is a door going west from here. You see a candle
 on the floor. You see a match on the floor.

pickup candle
- you are now carrying the candle -

pickup match
- you are now carrying the match -

light match candle

The candle is now lit. It illuminates everything in the room.

walk west
The corridor is lit with the candle. It is so long that you cannot see to the end. You notice that
 there are words written on the wall. There is a door going east from here. There is a way going north
 from here. There is a door going south from here.
</pre>

<hr>

Source: <a href="https://github.com/jogarces/ics-313-text-game"><i class="large github icon "></i>jogarces/ics-313-text-game</a>
```
To create a professional portfolio using TechFolios, you will need to learn how to write Markdown. Don't worry, it's really, really easy.  Here's a good [Markdown Tutorial](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) to get you started if you don't have any prior experience with it.



## Configure essays

TBD

## Configure resume

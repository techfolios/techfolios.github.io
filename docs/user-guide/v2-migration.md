---
title: V2 Migration
---

If you already have a professional portfolio built with TechFolios prior to June 2022, then you might want to migrate over to Version 2 in order to take advantage of the [improvements in TechFolios 2](/blog/2022/06/15/version-2). 

Here are the steps:

## Backup your portfolio source files

First, go to your current TechFolio GitHub repository home page, click on the green "Code" button, and select "Download ZIP". This will download a zip file containing the source files for your current portfolio to your computer.

## Delete your TechFolio repository

Yes, this scary, but necessary, and you did just download a backup of all your files. Click on the "Settings" tab of your repository home page, scroll all the way down to the "Danger Zone", and click on "Delete this repository".  

## Follow the Quick Start

Now you can follow the [Quick Start](../quick-start/overview) instructions to re-create your professional portfolio using the Version 2 template.  You don't necessarily have to use the browser-based editor to configure essays, projects, and resume, but you should at least follow the instructions through configuring bio.json so that https://USERNAME.github.io (where USERNAME is your own GitHub username) displays the template portfolio.

## Set up local development

Now follow the first few sections of the [User Guide](overview) to install the latest version of Jekyll, an editor, and GitHub Desktop (if you haven't installed those tools already). Check that you can display your portfolio site in your browser at http://127.0.0.1:4000/.

## Migrate your portfolio source files

Unzip the backup file so that you can get at your bio.json file, your project files, and your essays. 

First, update the bio.json file in your new repo with the bio.json file from your backup.  Check to see that the resume page displays correctly. There have not been any changes to the format of bio.json, so there should not be any problems with this step.

Next, migrate your essays and projects from the backup to your new site. Here are the steps:

First, copy all your images from the "/images" directory in your old site to the "/img" directory in the new site.

Next, in the projects/ and essays/ directories, do a global search-and-replace of "/images" to "/img".

Next, you will need to change any uses of Semantic UI CSS classes to Bootstrap 5 CSS classes. For example, for small images, try something similar to: 

```html
<img width="200px" 
     class="rounded float-start pe-4" 
     src="../img/difficulty/degree_difficulty.jpg">
```

For full-width images, try something like:
```html
<img class="img-fluid" 
     src="../img/manoa_dining_landing.jpg">
```

## Commit your changes

Once your portfolio displays correctly in your browser, then use GitHub Desktop to commit your changes to GitHub. This will trigger a GitHub action to rebuild and redeploy your site.  Enjoy your new portfolio!

---
title: Cloud development
---

## Cloud Development

The easiest way to develop and maintain your TechFolio portfolio is with [GitPod](https://gitpod.io), a cloud-based service. This avoids the need to install an editor, a git client, and Jekyll on your laptop. (We will cover this "local development" approach in the next section.)

Before starting this section, we assume you have already completed the [QuickStart: Initialization](../quick-start/initialization.html) section, so that you have a running version of a portfolio in your GitHub account. (The portfolio doesn't need to have the right contents, just be configured to build correctly.)

### Initial setup

Start by going to <https://gitpod.io>:

![](/img/user-guide/cloud-1.png)

Click "Continue with GitHub" and do whatever authentication is necessary to login to GitHub.

Now you should see the "Workspaces" page:

![](/img/user-guide/cloud-2.png)

Click "New Workspace", then select the repo containing your professional portfolio. After selecting it, you should see a page like this:

![](/img/user-guide/cloud-3.png)

You can click the "Autostart with these options..." (or not), but then click the "Continue" button.

After a few seconds, the screen will show a VS Code Editor user interface, and an open Terminal window indicating that various libraries are being installed in a green font. You'll now need to wait a minute or so for this installation process to finish. When it's finished, you'll see a Unix command prompt at the bottom of the terminal window with a blue font. For example:

![](/img/user-guide/cloud-4.png)

Now type `bundle exec jekyll serve` into the Terminal window and hit return. You should see a few lines of text printed out indicating that jekyll has started working, and the last line should say `Server running... press control-c to stop`. At that point, a window should pop up asking if you want to make the running service "public".  For example:

![](/img/user-guide/cloud-5.png)

After that, if you hover over `http://127.0.0.1:4000` on the second to last line, a "Follow link" button will appear. For example:

![](/img/user-guide/cloud-6.png)

Click it to open a new browser window with a preview of your professional portfolio:

![](/img/user-guide/cloud-7.png)

### The edit-build-debug-preview-publish cycle

To develop your portfolio, you will follow the following steps:

1. **Edit:**  You make changes to the files defining your professional portfolio.
2. **Build:** You run `bundle exec jekyll serve` to run jekyll and build your portfolio. (You might have to type `control-c` first if jekyll is already running.)
3. **Debug:** Sometimes your edits result in an invalid system that cannot be built. For example: your bio.json file is not in valid JSON format. In this case, the build will fail. You will need to read the error message and figure out how to fix it.
4. **Preview**: Once the build step completes successfully (and the Terminal window indicates that the server is running, hover over `http://127.0.0.1:4000` to get the link to display your revised portfolio. Alternatively, if the page is already displayed, just refresh the page to see the changes. 
5. **Publish**: Once you have made all the edits you want to the system, and you are ready to make your revised portfolio available to world, commit your changes to GitHub. 

Let's look at examples of each of these steps:

#### 1. Edit

Let's say I want to add a new Interest called "Community Gardening" to my portfolio. I could do this by expanding the `_data` directory in the left pane, then double clicking on "bio.json" to open that file for editing. For example:

![](/img/user-guide/cloud-8.png)

Next, I might use the current Interests section as a guide to adding a new one for Community Gardening. For example:

![](/img/user-guide/cloud-9.png)

Now I press command-S to save out my file. I've now made an edit.

#### 2. Build

To build the system, I first need to stop the currently running Jekyll process. To do this, I click into the Terminal window and type `control-c`. This should result in the program stopping and the appearance of a Unix command prompt in blue at the bottom of the Terminal window. For example:

![](/img/user-guide/cloud-10.png) 

If you type `control-c` and there is no running process, don't worry, nothing bad will happen.

Now, to run the build, I type `bundle exec jekyll serve` and hit return. In this case, the build was successful and I get the following:

![](/img/user-guide/cloud-11.png) 

Click "Open Browser" to open the portfolio in a new browser tab, or if you already have it displayed, just refresh that page. Either way, you will see your revised version. For example, here is my portfolio with the new interest:

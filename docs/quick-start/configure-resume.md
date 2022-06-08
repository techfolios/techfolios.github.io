---
title: Configure resume
---


We're almost done with the Quick Start.  The only thing left to fix is the resume page.  Right now, the top part of the resume page is OK, but the "Skills", "Education", "Work", "Activities", and "Awards" sections still contain the content from the template:

![](/img/quickstart/portfolio-original-resume.png)

To change the contents of the resume page, you need to edit the `_data/bio.json` file.  Find that file in the browser, click the pencil icon to edit it, and then make sure "Soft wrap" is set. It will look like this:

![](/img/quickstart/portfolio-resume-edit.png)

The "basics" and "interests" sections of this JSON file should be OK. You need to edit the "skills", "education", "work", "volunteer", and "awards" sections.

Here are some things to keep in mind as you make your edits:

* The "Volunteer" section in bio.json will appear as "Activities" in the resume page.
* Remember that the entries inside the square brackets must be separated by commas, except for the last entry, which should not have a comma.
* The square brackets indicate that you can have multiple entries. So, if you have more than one entry for education, you can add it. Just make sure all the entries, except the last one, have a comma after them.
* If you don't (for example) have any awards, then omit that entire section from the file and it won't show up. (Note that the "basics" and "interests" sections are required.)
* If the build fails, then use an online JSON checker to figure out where you made a syntax error.


Here's what my resume page looks like after editing the bio.json file:

![](/img/quickstart/updated-resume.png)

Note that:
* There are now two Education entries.
* There's only one Work entry
* There are no Awards.

Here is the bio.json file used to create this page so you can see how I did it:

import Gist from 'react-gist';

<Gist id="06912b9e8bca5eea6e40d6473cfa3525" />

So, go ahead and edit your bio.json file to reflect your actual Skills, Education, Work, Activities, and Awards. I suggest that you edit a single section at a time, then commit your changes and watch the Actions page to see if your portfolio builds and deploys successfully. Deploying after editing each section takes a little longer, but the advantage is that if you make a mistake, it will be easier to figure out where in the file the problem is.

When you've finished updating your bio.json, sit back and enjoy. You've now finished the first draft of your professional portfolio!

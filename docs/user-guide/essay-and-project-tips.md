---
title: Essay and Project Tips
---

Here are some tips for creating high quality project and essay pages.

## Name files appropriately

If your title is "Igniting the fire", then your file name might be "igniting-the-fire.md".

Do not include spaces in the file name: use "igniting-the-fire.md", not "igniting the fire.md".

If the browser is downloading the file instead of displaying it, that's probably because the file name does not end with ".md".

Correct naming is important so that the URL associated with your essay is easy to read and provides an indication of its subject matter.

## Provide an interesting title

Search engines often emphasize the title of pages. With a little bit of thought, you can come up with something personal (i.e. "The configuration management catastrophe that almost cost me my job") or clever ("You can't always git what you want").

## Check spelling and grammar

Don't misspell words.  Use appropriate grammar. If you are not confident, avail yourself of online tools to check spelling and grammar prior to publishing your new page.

## Write for the world

If you are a student, many of your essays and projects will be based upon your experiences doing home assignments (i.e. experiences). Do not write as it you were composing a private email to the professor explaining the assignment. Don't create sections to answer each of the "questions" from the prompt.  If you do that, you'll almost certainly create a boring page that is not interesting to read.

Instead, write it "for the world".  Assume some random technical professional has been googling and your page came up.  Make the page self-contained, self-explanatory, and useful to that random professional.  Minimize the assumptions you make about that person's technical background.  Provide links to background material if useful.

Not only should you write for a variety of people, you should write for a variety of times.  In other words, try to write your page such that if someone reads it in a year, it will still provide information of value.  If you're a newbie to the subject, then write it to provide insight and understanding to other newbies.

To make your writing compelling, it is usually helpful to "tell a story".  Create a narrative, don't just answer questions. For team projects, be sure to explain what *you* did as well as what the project accomplished.

## Format code appropriately

Make sure that code displays properly in your page.  You accomplish this by using [fenced code blocks and syntax highlighting](https://help.github.com/articles/creating-and-highlighting-code-blocks/). Here's an example of javascript code highlighting :

```javascript
function getTotalCost() {
  let cost = 0;
  for (let drink of this.drinks) {
    cost += drink.price;
  }
  return cost;
}
```

Think carefully before including large code snippets (beyond, say 50 lines).  As a rule of thumb, keep code snippets to a reasonable length and make sure all of the code is directly related to the subject of your page.

You can also use [GitHub gists](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists), which can sometimes be a better way to include code. Here's an example of a [TechFolio project page definition that includes a gist](https://techfolios.github.io/template/projects/vacay.html).

## Provide structure

Good writing has an internal structure.  Help the reader understand this structure by providing internal headings. Don't start with H1 (i.e. `#` in Markdown), as that's reserved for the title of your post. Instead, start with H2 (`##` in markdown), then create subsections within that section with H3 (`###` in markdown), etc.

Similarly, use itemized or enumerated lists, tables, etc as appropriate.

## Attribute quotations

You will occasionally want to quote another writer.  This is fine as long as you do not present those words as your own.

If you are just quoting a single sentence or two, you can simply use italics, quotation marks, and provide the author's name.  For example:

As noted by Steve Jobs, *"Design is not just what it looks like and feels like.  Design is how it works."*

For longer quotes, use the &lt;blockquote&gt; environment along with &lt;footer&gt;. For example:

<blockquote>
A cynical young person is almost the saddest sight to see, because it means that he or she has gone from knowing nothing to believing nothing.
<footer>Maya Angelou</footer>
</blockquote>

## Include pictures or other media

As they say, "A picture is worth a thousand words."  It is very easy to include pictures and videos.  If the meaning will be communicated more clearly with images, take the time to find and include them.  See the Formatting section for instructions on how to include images and video.

## Size images appropriately

Most images don't need to be full width. If it's a logo, or a picture without a lot of detail, make it 100-200 pixels wide and float it to the left or right of the text. As an example, see the "difficulty gauge" in this [template essay](https://techfolios.github.io/template/essays/difficulty.html).

## Don't be boring

Just because your writing is technical, it doesn't have to be boring.  Try to inject your personality into your writing. You can have "clever" titles, pop culture references, and so forth.

On the other hand, don't go overboard on the cleverness. Ask yourself: would I be embarrassed if my mother read this essay? (Because she might.) Would I be embarrassed if a potential employer read this essay? (Because she might.)

The goal is to be creative, to show some personality, and to make your writing fun to read as well as informative.

## Don't wait until the last minute

The quality of your writing will rise substantially if you develop them as follows:

1. Write the first draft.
2. Do something else for 4 hours.
3. Come back and do an editing pass over the first draft.

The editing pass will normally catch a lot of problems and allow you to refine your thoughts significantly, as long as you've stepped away from your writing for a sufficient amount of time to allow yourself to see it with "fresh eyes". The best way to do that is to sleep on it overnight, but if you don't have that much time, then at least do something different for a few hours. This lets your subconscious go to work on the material.

## Review your work

Once you've written and published it, take a look at the results!  Do the images display?  Is the formatting correct? 

## One paragraph is not enough

Writing two or three sentences is rarely enough to adequately describe a project or essay. You generally want two to three paragraphs.

## Projects don't need to have code

If you are a computer science student, you might jump to the conclusion that "Projects" means "Software Projects".

Instead, think of Projects as descriptions of "Significant Endeavors", some of which will (ideally) involve technologu, but which might involve other things as well.

In some cases, your best "significant endeavors" so far might all be school projects. That’s not automatically bad: some school projects can be very complex, require innovation and ingenuity, and provide a good showcase for your skills.

In other cases, you might decide to reach outside your school experiences. Perhaps you worked for a non-profit for a summer building low-income housing. That might constitute an excellent "project" even though there’s no code associated with it, if you acquired significant project management or "maker" skills or whatever from the experience.

Game play can potentially yield a project (but be careful with this one!). For example, if you built some kind of substantial environment in Minecraft, that could certainly qualify as a project if it demonstrates your artistic and/or other kinds of skills.

If you worked on an art project or a music project or a video project that took a substantial amount of time and that helped you develop a technical or aesthetic capability, then that might be a good subject for a project.

Note that when you first develop a professional portfolio, you are bootstrapping with the three best projects you can find from your background. Part of your ongoing professional development will be to "cultivate" your project page: adding new projects, and maybe removing others as you decide they are no longer "over threshold" as representations of your accomplishments. 

---
title: Formatting
---

Creating attractive project and essay pages requires basic understanding of GitHub Flavored Markdown (for text) and Semantic UI (for images). Fortunately, it's not complicated.

## Format text

To format text, use Markdown. For example, to create an H1 header, use `#`.  To italicize a word, surround it with `*`. To create a link, start by enclosing the link label in `[]` and follow it with the URL in `()`.  Here are some examples:

```
# Section 1
## Section 1.1

I think TechFolios is *awesome*.

Here is a link to [TechFolios](http://techfolios.github.io).
```
**Note that you must put a space between the # header character(s) and the title text!**

GitHub provides excellent documentation on the Markdown formatting available in [basic writing and formatting syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/), including boldface, quotes, lists, code blocks, and so forth.

### 7.2 Format images

You can insert images using the plain old `<img>` HTML tag, but you can control the formatting of your images much better if you take advantage of the [Semantic UI image classes](http://semantic-ui.com/elements/image.html). The example Molly Maluhia portfolio provides examples of the most common kinds of image formatting.

**Float an image.** The [Vacay Project Page](https://techfolios.github.io/template/projects/vacay) illustrates how to float an image to the right side of the text. Here is the code used to produce that image:

```
<img class="ui medium right floated rounded image" src="../images/vacay-home-page.png">
```

Note that this example not only floats the image to the right, but also sets the size to medium and rounds the corners.

**Icon images.** The [Vacay Project Page](https://techfolios.github.io/template/projects/vacay) also illustates the display of an icon, in this case, the GitHub icon in the link at the bottom of the page.  Here is the code used to produce that:

```
<a href="https://github.com/theVacay/vacay"><i class="large github icon"></i>theVacay/vacay</a>
```

For a complete list of available icons, see the [Semantic UI Icon Documentation](http://semantic-ui.com/elements/icon.html).

**Groups of images.** The [Micromouse Project Page](http://techfolios.github.io/template/projects/micromouse) illustrates a simple way to provide a group of images with similar formatting. In this case, all the images have the same size and rounded corners. Here's the code that produced that format:

```
<div class="ui small rounded images">
  <img class="ui image" src="../images/micromouse-robot.png">
  <img class="ui image" src="../images/micromouse-robot-2.jpg">
  <img class="ui image" src="../images/micromouse.jpg">
  <img class="ui image" src="../images/micromouse-circuit.png">
</div>
```

**Circular images.** In some situations, circular images provide a nice design element for your page.

*Important note: To create circular images, the source image must be square!!* If your source image is not square, then the resulting "circular" image will actually be an oval.

I also recommend that if you want circular images, make sure the source image has a non-white background color. Otherwise, the circular nature of the image will be lost.

The [Igniting the fire essay](http://techfolios.github.io/template/essays/2015-08-26.html) provides three examples of circular images. Here's an abbreviated version of the essay's markdown illustrating how the circular images were inserted and floated:

```
<img class="ui tiny left circular floated image" src="../images/paintbrushes.jpg">

Ever since I first grasped a paintbrush...

<img class="ui tiny left circular floated image" src="../images/design-technology.jpg">

I never used to think that design and technology...

<img class="ui tiny left circular floated image" src="../images/software-code.jpg">

I am now starting to take a Software Engineering class...
```

**Location of image files.**  In the Molly Maluhia portfolio, a top-level images/ directory holds all the image files.  Every project and essay can thus refer to an image through a relative link (i.e. `src="../images/the-image.png"`).  This is not mandatory; you can put images whereever you want, but I find an images/ directory to be helpful for organization.

### 7.4 Format video

The [Hackystat Project Page](http://philipmjohnson.org/projects/hackystat) illustrates an embedded video. Here is how that YouTube video is embedded in that page:

```
<div class="ui embed" data-source="youtube" data-id="NrLFIpm0wps" >
</div>
```

To learn how to embed other kinds of media, see the [Semantic UI embed documentation](http://semantic-ui.com/modules/embed.html).

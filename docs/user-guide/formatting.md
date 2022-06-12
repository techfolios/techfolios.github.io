---
title: Format text, images, video
---

Creating attractive project and essay pages requires basic understanding of GitHub Flavored Markdown and Bootstrap (for images and more complex page layouts). Fortunately, it's pretty easy to get basic understanding.

## Format text

If you've never used Markdown before, it's worth reading through GitHub's documentation on [basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). 

Here's a few of the most useful concepts to get you started.

To create an H1 header, use `#`.  To italicize a word, surround it with `*`. To create a link, start by enclosing the link label in `[]` and follow it with the URL in `()`.  Here are examples:

```markdown
# Section 1
## Section 1.1

I think TechFolios is *awesome*.

Here is a link to [TechFolios](http://techfolios.github.io).
```
:::warning
Note that you must put a space between the # header character(s) and the title text!
:::


## Format images

You can insert images using the plain old `<img>` HTML tag, but you can control the formatting of your images better if you take advantage of the [Bootstrap image classes](https://getbootstrap.com/docs/5.2/content/images/). The template portfolio provides examples of the most common kinds of image formatting.

### Float image to left or right

The [Template essay on difficulties](https://techfolios.github.io/template/essays/difficulty.html) illustrates how to float an image to the left side of the text. Here is the code used to float the "difficulty gauge" image:

```html
<img width="200px" 
     class="rounded float-start pe-4" 
     src="../img/difficulty/degree_difficulty.jpg" >
```

Note that this example not only floats the image to the left (via "float-start"), but also sets the size to 200px, rounds the corners of the image, and adds some padding to the right of the image (via "pe-4").


### Groups of images

The [Micromouse Project Page](http://techfolios.github.io/template/projects/micromouse) illustrates a simple way to provide a group of images with similar formatting. In this case, all the images have the same size and rounded corners. Here's the code that produced that format:

```html
<div class="text-center p-4">
  <img width="200px" 
       src="../img/micromouse/micromouse-robot.png" 
       class="img-thumbnail" >
  <img width="200px" 
       src="../img/micromouse/micromouse-robot-2.jpg" 
       class="img-thumbnail" >
  <img width="200px" 
       src="../img/micromouse/micromouse-circuit.png" 
       class="img-thumbnail" >
</div>
```

### Location of image files

In the template portfolio, a top-level `img/` directory holds all the image files.  Every project and essay can thus refer to an image through a relative link (i.e. `src="../img/the-image.png"`).  You can create subdirectories within the `img/` directory to further organize your images if you want (and the template portfolio illustrates this.)

## Format video

The [Bootstrap 5 ratio helper](https://getbootstrap.com/docs/5.0/helpers/ratio/) can be used in combination with the iframe element to embed video into your page. For example:

```html
<div class="ratio ratio-4x3 my-4">
  <iframe src="https://www.youtube.com/embed/NrLFIpm0wps" 
          title="Overview of Hackystat" 
          allowfullscreen>
  </iframe>
</div>
```

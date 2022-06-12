---
title: Project and Essay URLs
hide_table_of_contents: true
---

## Project URLs

In some cases, you might have a project for which its README file and/or home site is the best documentation of your efforts, and you would prefer to not duplicate that text in the project page.  In this case, you can provide a "projecturl" field in the front matter:

```yaml
---
layout: project
type: project
published: true
image:  img/climate-game-changer.png
title: Climate Game Changer
date: 2019
labels:
  - Climate Change
  - Serious Game
summary: Climate Game Changer is a serious game for learning evidence-based science about climate change in general and Hawaii in particular.
projecturl: https://climategamechanger.github.io/
---
```

When the projecturl field is supplied, then the project summary card on the home page has a link named "Project Site" that takes the user directly to the project URL:

![](/img/user-guide/project-url.png)

## Essay URLs

Similarly, sometimes you have an essay that is hosted at a different site (such as Medium) or is available online in PDF format.  In this case, you can use the essayurl field in the front matter:

```yaml
---
layout: essay
type: essay
published: true
title: "A perspective on the ICS Software Engineering Curriculum"
date: 2020-01-05
labels:
  - ICS
essayurl: https://philipmjohnson.medium.com/a-perspective-on-the-ics-software-engineering-curriculum-da40f2c6320
---
Thoughts on how to maintain and improve outcomes from the ICS software engineering curriculum.
```

In this case, you still want to provide a brief summary of the essay in the file body which will appear in the card:

![](/img/user-guide/essay-url.png)

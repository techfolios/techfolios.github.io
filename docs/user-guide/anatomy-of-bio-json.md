---
title: Anatomy of bio.json
---

One of the trickier aspects of TechFolios is the bio.json file, because it has a fairly rigid syntax, and (b) if you create a syntax error in bio.json, the feedback from the resulting build failure is not very informative.

Fortunately, it is quite easy to diagnose and fix bio.json problems.  First, let's take a quick look at the format.

##  About JSON format

If you haven't worked with JSON formatted files before, all you really need to understand for TechFolios is that the bio.json file is a combination of `objects` and `arrays`.  Objects are key-value pairs enclosed by curly braces, for example:

```json
{
  "name" : "Philip Johnson",
  "address" : "1680 East-West Road"
}
```
This object has two keys ("name" and "address"), each with corresponding values ("Philip Johnson" and "1680 East-West Road"). There is always a colon between a key and its value.

:::warning Pesky commas
Key-value pairs must end with a comma, except for the last key-value pair!  This is one common syntax error in bio.json.
:::

The second construct creates lists of values, or arrays:

```json
[
  "blue",
  "red",
  "green"
]
```
The difference between objects and arrays is that arrays are defined using square brackets and consist of a list of elements separated by commas.

:::warning Pesky commas, pt 2
Array entries must also end with a comma, except for the last array entry!  This is another common syntax error in bio.json.
:::

What makes JSON files interesting and useful is that you can combine objects and arrays. For example:

```json
{
  "name" : "Philip Johnson",
  "address" : ["1680 East West Road", "Honolulu", "HI", "96822"] 
}
```
Here we have an object where the value associated with the address key is an array.

A final comment: in JSON format, newlines and indentation are not significant. You could have the entire bio.json file on a single line and it would still be a legal file (although not very readable by humans). By convention, the bio.json file uses two space indentation.

## Structure of bio.json

The bio.json file format is based on [JSONResume](https://jsonresume.org/). Here is the top-level structure:

```json
{
  "basics" : { <basic profile information> },
  "work" : [ { work object }, { work object }, ... ],
  "volunteer" : [ { volunteer object }, { volunteer object }, ... ],
  "education" : [ { education object }, { education object }, ... ],
  "awards" : [ {  award object }, { award object }, ... ],
  "publications" : [ { publication object }, { publication object }, ... ],
  "skills" : [ { skill object }, { skill object }, ... ],
  "interests" : [ { interest object }, { interest object }, ... ],
}
```
It's really pretty easy: apart from the first section ("basics"), all of the remaining sections are simply arrays of objects, where each object has a structure appropriate for the section.

Let's look at examples of each section.

### Basics section

First, here's a sample value associated with the "basics" keyword:

```json
{
  "name": "Philip Johnson",
  "label": "Professor",
  "picture": "https://philipmjohnson.github.io/images/philip.jpg",
  "email": "johnson@hawaii.edu",
  "phone": "808-956-3489",
  "website": "https://philipmjohnson.github.io",
  "summary": "I am a Professor of Information and Computer Sciences at the University of Hawaii.",
  "location": {
    "address": "1680 East-West Rd, POST 307",
    "postalCode": "96822",
    "city": "Honolulu",
    "countryCode": "USA",
    "region": "Hawaii"
  },
  "profiles": [
    {
      "network": "github",
      "username": "philipmjohnson",
      "url": "http://github.com/philipmjohnson"
    },
    {
      "network": "linkedin",
      "username": "philipmjohnson",
      "url": "http://linkedin.com/in/philipmjohnson"
    }
  ]
}
```

:::info Did I say that commas are pesky?
In the "profiles" section, each of the social network objects must be separated by a comma (since they are in an array).  If you add a new social network object, make sure that a comma separates it from the previous and next object.
:::

### Work section

Here's an example of the value associated with the "work" keyword:

```json
[
  {
    "company": "University of Hawaii",
    "position": "Professor",
    "website": "http://www.ics.hawaii.edu/",
    "startDate": "1990-08-01",
    "endDate": "Present",
    "summary": "Department of Information and Computer Sciences",
    "highlights": [
      "Professor, 2001-present",
      "Associate Chair, 2010-2016",
      "Director, Collaborative Software Development Laboratory, 1990-present",
      "Associate Professor, 1995-2001",
      "Assistant Professor, 1990-1995"
    ]
  },
  {
    "company": "Open Power Quality",
    "position": "CEO",
    "website": "https://openpowerquality.com/",
    "startDate": "2013-01-01",
    "endDate": "Present",
    "summary": "Co-founder and leader of technical development",
    "highlights": [  ]   
  }
]
```
Unlike the "basics" keyword whose value is an object, the value associated with the "work" keyword is an array.

This array contains a list of objects, where each object has keys for company, position, website, etc.

### Education section

All of the remaining sections are pretty much like the work section: an array of objects whose keys are appropriate for the information being presented. For example, here's a sample value associated with the "education" keyword:

```json
[
  {
    "institution": "University of Massachusetts, Amherst, MA",
    "area": "Computer Science",
    "studyType": "Ph.D.",
    "endDate": "1990-08-01",
    "gpa": "",
    "courses": [
    ]
  },
  {
    "institution": "University of Massachusetts, Amherst, MA",
    "area": "Computer Science",
    "studyType": "M.S.",
    "endDate": "1985-06-01",
    "gpa": "",
    "courses": [
    ]
  }
]
```
Again, when editing this section, make sure the individual education objects are separated by commas.

## Debugging bio.json

OK, so let's say you edited bio.json in your browser, committed the file, and the build fails in the validate-bio-json-file task. What's wrong?

The most likely answer is that you have somehow forgotten to add a comma or made some other simple syntax error in your bio.json file. Now the question is: how to track down the line(s) containing a problem?

One simple way is to use an online tool such as https://jsonlint.com.  Here's what it looks like when I run it against the template bio.json file:

![](/img/user-guide/json-lint-1.png)

If I edit the code to remove a comma, then the validator highlights the line with the error:

![](/img/user-guide/json-lint-2.png)


## Miscellaneous tips

Here are a few things we've discovered about bio.json while developing our portfolios:

* You cannot comment out lines in your bio.json file.  It is fine to have empty arrays, for example. But if there is actual data that you do not want displayed, then you have to delete it.


* For heaven's sake, don't end up with a portfolio like [this one](https://medium.com/@_oren/every-single-web-portfolio-site-ever-8fad53534d46#.o82m6ejrr).

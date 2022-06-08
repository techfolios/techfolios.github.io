## TechFolios Site Documentation

This site is constructed using [Docusaurus](https://docusaurus.io/).

## Installation

### Install Node

First, download and install [Node](https://nodejs.org/en/download/).  Verify that your installation was successful by invoking:

```
$ node -v
v14.16.0
```

### Download sources

Second, download the sources for this site from github.

Make sure you are in the "source" branch, not the "main" branch.

### Install libraries

Third, change directories into the techfolios.github.io repo directory and install third party libraries with:

```
$ npm install

up to date, audited 1162 packages in 13s

205 packages are looking for funding
  run `npm fund` for details

27 vulnerabilities (9 moderate, 18 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

The current security problems are unfortunate. Hopefully the Docusaurus folks will clean this up soon.

## Run the site locally

To run the site locally, invoke:

```
 $ npm start

> techfolios.github.io@1.0.0 start
> docusaurus start


   ╭────────────────────────────────────────────────────────────────────────────────────────╮
   │                                                                                        │
   │                      Update available 2.0.0-beta.9 → 2.0.0-beta.7                      │
   │                                                                                        │
   │   To upgrade Docusaurus packages with the latest version, run the following command:   │
   │            npm i @docusaurus/core@latest @docusaurus/preset-classic@latest             │
   │                                                                                        │
   ╰────────────────────────────────────────────────────────────────────────────────────────╯

Starting the development server...
Docusaurus website is running at "http://localhost:3000/".

✔ Client
  Compiled successfully in 8.57s

client (webpack 5.64.1) compiled successfully

```

The site should shortly appear at [http://localhost:3000](http://localhost:3000).

## Deployment

### 1. Commit and push your changes to the sources

Commit and push your changes to the source (i.e. the `source` branch).

### 2. Build and deploy

To deploy the site, make sure that GIT_USER and GIT_PASS are both set and that you have commit privileges to the repo, then invoke:

```
npm run deploy
```

This builds the static HTML and commits the results to the `main` branch of the techfolios.github.io repository.

## Logo attribution

<a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Freepik - Flaticon</a>

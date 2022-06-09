---
title: Invalid Date Field
hide_table_of_contents: true
---

The all-time most popular reason for the build failing is an error in the date field. In projects and essays, the date field should be a valid date (in YYYY-MM-DD) format. For example:

```
date: 2016-12-23
```

The following date fields are not in YYYY-MM-DD format and will fail the build:

```
date: 2021-01
date: Feb 2021
date: 01-01-2021
date: 2021-1-1
```

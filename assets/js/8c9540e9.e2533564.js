"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[9379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={title:"Anatomy of bio.json"},s=void 0,r={unversionedId:"user-guide/anatomy-of-bio-json",id:"user-guide/anatomy-of-bio-json",title:"Anatomy of bio.json",description:"One of the trickier aspects of TechFolios is the bio.json file, because it has a fairly rigid syntax, and (b) if you create a syntax error in bio.json, the feedback from the resulting build failure is not very informative.",source:"@site/docs/user-guide/anatomy-of-bio-json.md",sourceDirName:"user-guide",slug:"/user-guide/anatomy-of-bio-json",permalink:"/docs/user-guide/anatomy-of-bio-json",draft:!1,tags:[],version:"current",frontMatter:{title:"Anatomy of bio.json"},sidebar:"publicSidebar",previous:{title:"Local development",permalink:"/docs/user-guide/local-development"},next:{title:"Format text, images, video",permalink:"/docs/user-guide/formatting"}},l={},c=[{value:"About JSON format",id:"about-json-format",level:2},{value:"Structure of bio.json",id:"structure-of-biojson",level:2},{value:"Basics section",id:"basics-section",level:3},{value:"Work section",id:"work-section",level:3},{value:"Education section",id:"education-section",level:3},{value:"Debugging bio.json",id:"debugging-biojson",level:2},{value:"Miscellaneous tips",id:"miscellaneous-tips",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the trickier aspects of TechFolios is the bio.json file, because it has a fairly rigid syntax, and (b) if you create a syntax error in bio.json, the feedback from the resulting build failure is not very informative."),(0,a.kt)("p",null,"Fortunately, it is quite easy to diagnose and fix bio.json problems.  First, let's take a quick look at the format."),(0,a.kt)("h2",{id:"about-json-format"},"About JSON format"),(0,a.kt)("p",null,"If you haven't worked with JSON formatted files before, all you really need to understand for TechFolios is that the bio.json file is a combination of ",(0,a.kt)("inlineCode",{parentName:"p"},"objects")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"arrays"),".  Objects are key-value pairs enclosed by curly braces, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Philip Johnson",\n  "address" : "1680 East-West Road"\n}\n')),(0,a.kt)("p",null,'This object has two keys ("name" and "address"), each with corresponding values ("Philip Johnson" and "1680 East-West Road"). There is always a colon between a key and its value.'),(0,a.kt)("admonition",{title:"Pesky commas",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Key-value pairs must end with a comma, except for the last key-value pair!  This is one common syntax error in bio.json.")),(0,a.kt)("p",null,"The second construct creates lists of values, or arrays:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "blue",\n  "red",\n  "green"\n]\n')),(0,a.kt)("p",null,"The difference between objects and arrays is that arrays are defined using square brackets and consist of a list of elements separated by commas."),(0,a.kt)("admonition",{title:"Pesky commas, pt 2",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Array entries must also end with a comma, except for the last array entry!  This is another common syntax error in bio.json.")),(0,a.kt)("p",null,"What makes JSON files interesting and useful is that you can combine objects and arrays. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Philip Johnson",\n  "address" : ["1680 East West Road", "Honolulu", "HI", "96822"] \n}\n')),(0,a.kt)("p",null,"Here we have an object where the value associated with the address key is an array."),(0,a.kt)("p",null,"A final comment: in JSON format, newlines and indentation are not significant. You could have the entire bio.json file on a single line and it would still be a legal file (although not very readable by humans). By convention, the bio.json file uses two space indentation."),(0,a.kt)("h2",{id:"structure-of-biojson"},"Structure of bio.json"),(0,a.kt)("p",null,"The bio.json file format is based on ",(0,a.kt)("a",{parentName:"p",href:"https://jsonresume.org/"},"JSONResume"),". Here is the top-level structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "basics" : { <basic profile information> },\n  "work" : [ { work object }, { work object }, ... ],\n  "volunteer" : [ { volunteer object }, { volunteer object }, ... ],\n  "education" : [ { education object }, { education object }, ... ],\n  "awards" : [ {  award object }, { award object }, ... ],\n  "publications" : [ { publication object }, { publication object }, ... ],\n  "skills" : [ { skill object }, { skill object }, ... ],\n  "interests" : [ { interest object }, { interest object }, ... ],\n}\n')),(0,a.kt)("p",null,'It\'s really pretty easy: apart from the first section ("basics"), all of the remaining sections are simply arrays of objects, where each object has a structure appropriate for the section.'),(0,a.kt)("p",null,"Let's look at examples of each section."),(0,a.kt)("h3",{id:"basics-section"},"Basics section"),(0,a.kt)("p",null,'First, here\'s a sample value associated with the "basics" keyword:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Philip Johnson",\n  "label": "Professor",\n  "picture": "https://philipmjohnson.github.io/images/philip.jpg",\n  "email": "johnson@hawaii.edu",\n  "phone": "808-956-3489",\n  "website": "https://philipmjohnson.github.io",\n  "summary": "I am a Professor of Information and Computer Sciences at the University of Hawaii.",\n  "location": {\n    "address": "1680 East-West Rd, POST 307",\n    "postalCode": "96822",\n    "city": "Honolulu",\n    "countryCode": "USA",\n    "region": "Hawaii"\n  },\n  "profiles": [\n    {\n      "network": "github",\n      "username": "philipmjohnson",\n      "url": "http://github.com/philipmjohnson"\n    },\n    {\n      "network": "linkedin",\n      "username": "philipmjohnson",\n      "url": "http://linkedin.com/in/philipmjohnson"\n    }\n  ]\n}\n')),(0,a.kt)("admonition",{title:"Did I say that commas are pesky?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},'In the "profiles" section, each of the social network objects must be separated by a comma (since they are in an array).  If you add a new social network object, make sure that a comma separates it from the previous and next object.')),(0,a.kt)("h3",{id:"work-section"},"Work section"),(0,a.kt)("p",null,'Here\'s an example of the value associated with the "work" keyword:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "company": "University of Hawaii",\n    "position": "Professor",\n    "website": "http://www.ics.hawaii.edu/",\n    "startDate": "1990-08-01",\n    "endDate": "Present",\n    "summary": "Department of Information and Computer Sciences",\n    "highlights": [\n      "Professor, 2001-present",\n      "Associate Chair, 2010-2016",\n      "Director, Collaborative Software Development Laboratory, 1990-present",\n      "Associate Professor, 1995-2001",\n      "Assistant Professor, 1990-1995"\n    ]\n  },\n  {\n    "company": "Open Power Quality",\n    "position": "CEO",\n    "website": "https://openpowerquality.com/",\n    "startDate": "2013-01-01",\n    "endDate": "Present",\n    "summary": "Co-founder and leader of technical development",\n    "highlights": [  ]   \n  }\n]\n')),(0,a.kt)("p",null,'Unlike the "basics" keyword whose value is an object, the value associated with the "work" keyword is an array.'),(0,a.kt)("p",null,"This array contains a list of objects, where each object has keys for company, position, website, etc."),(0,a.kt)("h3",{id:"education-section"},"Education section"),(0,a.kt)("p",null,'All of the remaining sections are pretty much like the work section: an array of objects whose keys are appropriate for the information being presented. For example, here\'s a sample value associated with the "education" keyword:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "institution": "University of Massachusetts, Amherst, MA",\n    "area": "Computer Science",\n    "studyType": "Ph.D.",\n    "endDate": "1990-08-01",\n    "gpa": "",\n    "courses": [\n    ]\n  },\n  {\n    "institution": "University of Massachusetts, Amherst, MA",\n    "area": "Computer Science",\n    "studyType": "M.S.",\n    "endDate": "1985-06-01",\n    "gpa": "",\n    "courses": [\n    ]\n  }\n]\n')),(0,a.kt)("p",null,"Again, when editing this section, make sure the individual education objects are separated by commas."),(0,a.kt)("h2",{id:"debugging-biojson"},"Debugging bio.json"),(0,a.kt)("p",null,"OK, so let's say you edited bio.json in your browser, committed the file, and the build fails in the validate-bio-json-file task. What's wrong?"),(0,a.kt)("p",null,"The most likely answer is that you have somehow forgotten to add a comma or made some other simple syntax error in your bio.json file. Now the question is: how to track down the line(s) containing a problem?"),(0,a.kt)("p",null,"One simple way is to use an online tool such as ",(0,a.kt)("a",{parentName:"p",href:"https://jsonlint.com."},"https://jsonlint.com."),"  Here's what it looks like when I run it against the template bio.json file:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8637).Z,width:"2492",height:"1954"})),(0,a.kt)("p",null,"If I edit the code to remove a comma, then the validator highlights the line with the error:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8700).Z,width:"2492",height:"2132"})),(0,a.kt)("h2",{id:"miscellaneous-tips"},"Miscellaneous tips"),(0,a.kt)("p",null,"Here are a few things we've discovered about bio.json while developing our portfolios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You cannot comment out lines in your bio.json file.  It is fine to have empty arrays, for example. But if there is actual data that you do not want displayed, then you have to delete it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you want to transmogrify your bio.json file into other formats, see ",(0,a.kt)("a",{parentName:"p",href:"http://please.hackmyresume.com/"},"Hack My Resume"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For heaven's sake, don't end up with a portfolio like ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@_oren/every-single-web-portfolio-site-ever-8fad53534d46#.o82m6ejrr"},"this one"),"."))))}m.isMDXComponent=!0},8637:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/json-lint-1-19e6960db19e5abe30d7d98fcc1a8194.png"},8700:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/json-lint-2-7808370d999c52f2e9e0e32713dc0ff0.png"}}]);
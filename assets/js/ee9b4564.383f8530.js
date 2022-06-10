"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[8591],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Customize theme"},s=void 0,u={unversionedId:"user-guide/customize-theme",id:"user-guide/customize-theme",title:"Customize theme",description:"The Quick Start discusses how to configure the theme using one of the pre-built themes in the css/techfolio-template/ directory.",source:"@site/docs/user-guide/customize-theme.md",sourceDirName:"user-guide",slug:"/user-guide/customize-theme",permalink:"/docs/user-guide/customize-theme",draft:!1,tags:[],version:"current",frontMatter:{title:"Customize theme"},sidebar:"publicSidebar",previous:{title:"Essay and Project Tips",permalink:"/docs/user-guide/essay-and-project-tips"},next:{title:"Customize layout",permalink:"/docs/user-guide/customize-layout"}},c={},f=[{value:"Create your custom theme file",id:"create-your-custom-theme-file",level:2},{value:"Use your custom theme file",id:"use-your-custom-theme-file",level:2},{value:"Modify colors",id:"modify-colors",level:2},{value:"Modify headline font",id:"modify-headline-font",level:2},{value:"Going further: Bootstrap CSS Variables",id:"going-further-bootstrap-css-variables",level:2}],p={toc:f};function m(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Quick Start discusses how to ",(0,i.kt)("a",{parentName:"p",href:"../quick-start/configure-theme"},"configure the theme")," using one of the pre-built themes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"css/techfolio-template/")," directory."),(0,i.kt)("p",null,"But what if none of these pre-built themes works for you? What if you want a different color(s), or font(s), or want them applied to your portfolio in a different way?  If this is your goal, you need to create your own custom theme.  Let's walk through a simple example."),(0,i.kt)("h2",{id:"create-your-custom-theme-file"},"Create your custom theme file"),(0,i.kt)("p",null,"The first step in developing your own custom theme file is to create a new file in your portfolio's ",(0,i.kt)("inlineCode",{parentName:"p"},"css/techfolio-template")," directory. It's easiest to take one of the existing pre-built themes as a starting point. For the purposes of this example, I'll create a copy of lime.css called skyblue.css in that same directory. "),(0,i.kt)("p",null,"Skyblue.css starts off looking like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'/* Lime Theme: modifies the default theme to inject a wee bit o\' green in various places. */\n\n/* Use Open Sans as the default font. */\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Source+Code+Pro:300,400,500,700");\n\n/* See https://getbootstrap.com/docs/5.2/customize/css-variables/#root-variables for variables to override. */\n:root {\n  --tf-green1: #136c14;\n  --tf-green2: #4FA64F;\n  --tf-green3: #85C285;\n  --tf-green4: #e0f2df;\n  --bs-font-sans-serif: "Open Sans", sans-serif;\n  --bs-link-color: var(--tf-green1);\n  --tf-pill-bg: var(--tf-green3);\n  --tf-icon-fill: var(--tf-green1);\n  --tf-page-bg-color: var(--bs-white);\n  --tf-footer-bg-color: var(--tf-green4);\n  --tf-projects-bg-color: var(--tf-green4);\n}\n\nh1,h2,h3,h4 {\n  color: var(--tf-green1);\n}\n\n/* Format social media icons */\n.tf-social {\n  display: inline-block;\n  fill: var(--tf-green1);\n  height: 1.5em;\n  vertical-align: -.1em;\n  width: 1.5em;\n}\n\na {\n  text-decoration: none;\n}\n')),(0,i.kt)("h2",{id:"use-your-custom-theme-file"},"Use your custom theme file"),(0,i.kt)("p",null,"Next, edit your _config.yml file to specify your new theme file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"techfolio-theme: skyblue.css\n")),(0,i.kt)("p",null,"Now type ",(0,i.kt)("inlineCode",{parentName:"p"},"control-c")," to stop your Jekyll process (if it's running), the run ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," to restart it. This will re-read the ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.yml"),' file and use your new theme. It will now look like the "lime.css" theme. '),(0,i.kt)("h2",{id:"modify-colors"},"Modify colors"),(0,i.kt)("p",null,'For this example, we want to have a blue palette rather than a green palette. I used an online color palette tool to find a few shades of blue, then edited the variable names to use "blue" rather than "green", and provided the new hex values for the blue colors. Here\'s what it looks like now:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'/* Skyblue Theme: modifies the default theme to use blue in various places. */\n\n/* Use Open Sans as the default font. */\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Source+Code+Pro:300,400,500,700");\n\n/* See https://getbootstrap.com/docs/5.2/customize/css-variables/#root-variables for variables to override. */\n:root {\n  --tf-blue1: #076db3;\n  --tf-blue2: #1b6fa9;\n  --tf-blue3: #2f8ed0;\n  --tf-blue4: #bde3f0;\n  --bs-font-sans-serif: "Open Sans", sans-serif;\n  --bs-link-color: var(--tf-blue1);\n  --tf-pill-bg: var(--tf-blue3);\n  --tf-icon-fill: var(--tf-blue1);\n  --tf-page-bg-color: var(--bs-white);\n  --tf-footer-bg-color: var(--tf-blue4);\n  --tf-projects-bg-color: var(--tf-blue4);\n}\n\nh1,h2,h3,h4 {\n  color: var(--tf-blue1);\n}\n\n/* Format social media icons */\n.tf-social {\n  display: inline-block;\n  fill: var(--tf-blue1);\n  height: 1.5em;\n  vertical-align: -.1em;\n  width: 1.5em;\n}\n\na {\n  text-decoration: none;\n}\n')),(0,i.kt)("h2",{id:"modify-headline-font"},"Modify headline font"),(0,i.kt)("p",null,"Finally, I rather liked the Rubik font from the pre-built theme, so I'll copy over the definition and use of that font into my skyblue theme. Here's the final theme definition file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'/* Skyblue Theme: modifies the default theme to use blue in various places. */\n\n/* Use Open Sans as the default font. */\n@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Source+Code+Pro:300,400,500,700");\n@import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,700");\n\n/* See https://getbootstrap.com/docs/5.2/customize/css-variables/#root-variables for variables to override. */\n:root {\n  --tf-blue1: #076db3;\n  --tf-blue2: #1b6fa9;\n  --tf-blue3: #2f8ed0;\n  --tf-blue4: #bde3f0;\n  --bs-font-sans-serif: "Open Sans", sans-serif;\n  --bs-link-color: var(--tf-blue1);\n  --tf-pill-bg: var(--tf-blue3);\n  --tf-icon-fill: var(--tf-blue1);\n  --tf-page-bg-color: var(--bs-white);\n  --tf-footer-bg-color: var(--tf-blue4);\n  --tf-projects-bg-color: var(--tf-blue4);\n}\n\nh1,h2,h3,h4,h5 {\n  color: var(--tf-blue1);\n  font-family: Rubik;\n}\n\n/* Format social media icons */\n.tf-social {\n  display: inline-block;\n  fill: var(--tf-blue1);\n  height: 1.5em;\n  vertical-align: -.1em;\n  width: 1.5em;\n}\n\na {\n  text-decoration: none;\n}\n')),(0,i.kt)("p",null,"And here's what the skyblue.css theme looks like:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7729).Z,width:"1500",height:"1224"})),(0,i.kt)("h2",{id:"going-further-bootstrap-css-variables"},"Going further: Bootstrap CSS Variables"),(0,i.kt)("p",null,"You can get much more elaborate with your customization of the fonts and colors, all it takes is an understanding of ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.2/customize/css-variables/"},"Bootstrap 5 CSS Variables"),"."),(0,i.kt)("p",null,"If you come up with something you really like, please use the ",(0,i.kt)("a",{parentName:"p",href:"../help"},"Help")," page to contact us---perhaps we'd like to feature your work in our ",(0,i.kt)("a",{parentName:"p",href:"../gallery"},"Gallery"),"!"))}m.isMDXComponent=!0},7729:function(e,t,n){t.Z=n.p+"assets/images/theme-skyblue-32b723e437b1d1811f900faca1ec9150.png"}}]);
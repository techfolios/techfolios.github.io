"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[3753],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),g=o,p=f["".concat(c,".").concat(g)]||f[g]||h[g]||i;return n?r.createElement(p,a(a({ref:t},u),{},{components:n})):r.createElement(p,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={slug:"syntax-highlighting-fix",title:"Syntax highlighting fix",authors:"johnson",tags:["bug"]},c=void 0,s={permalink:"/blog/syntax-highlighting-fix",source:"@site/blog/2017-12-03-syntax-highlighting-fixed.md",title:"Syntax highlighting fix",description:"There has been a longstanding bug in Techfolios which prevented fenced code blocks from being highlighted.",date:"2017-12-03T00:00:00.000Z",formattedDate:"December 3, 2017",tags:[{label:"bug",permalink:"/blog/tags/bug"}],readingTime:.35,truncated:!1,authors:[{name:"Philip Johnson",title:"Professor, University of Hawaii",url:"https://philipmjohnson.org",imageURL:"https://github.com/philipmjohnson.png",key:"johnson"}],frontMatter:{slug:"syntax-highlighting-fix",title:"Syntax highlighting fix",authors:"johnson",tags:["bug"]},prevItem:{title:"Techfolio Designer",permalink:"/blog/techfolio-designer"},nextItem:{title:"TechFolio Workshops",permalink:"/blog/workshops-2016"}},u={authorsImageUrls:[void 0]},h=[],f={toc:h};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There has been a longstanding bug in Techfolios which prevented ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-and-highlighting-code-blocks/"},"fenced code blocks")," from being highlighted."),(0,i.kt)("p",null,"We finally figured out the problem: Techfolios need to load a rouge style file, and they weren't. With today's commit, the Techfolio header will load a rouge style sheet from the css/rouge directory.  There are a selection of rouge style files stored in there; you can change the default selected file by editing _config.yml."))}g.isMDXComponent=!0}}]);
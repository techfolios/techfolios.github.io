"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[223],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||h[p]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Change theme",hide_table_of_contents:!0},c=void 0,l={unversionedId:"quick-start/change-theme",id:"quick-start/change-theme",title:"Change theme",description:"What's a theme?",source:"@site/docs/quick-start/change-theme.md",sourceDirName:"quick-start",slug:"/quick-start/change-theme",permalink:"/docs/quick-start/change-theme",draft:!1,tags:[],version:"current",frontMatter:{title:"Change theme",hide_table_of_contents:!0},sidebar:"publicSidebar",previous:{title:"Configure resume",permalink:"/docs/quick-start/configure-resume"},next:{title:"Next steps",permalink:"/docs/quick-start/next-steps"}},u={},h=[{value:"What&#39;s a theme?",id:"whats-a-theme",level:2},{value:"bitter.css",id:"bittercss",level:2},{value:"lime.css",id:"limecss",level:2},{value:"rubik.css",id:"rubikcss",level:2}],f={toc:h};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"whats-a-theme"},"What's a theme?"),(0,a.kt)("p",null,'In TechFolios, "theme" refers to the colors and fonts associated with a portfolio, and "layout" refers to the way the various components are laid out on the page. '),(0,a.kt)("p",null,"The default theme associated with the template uses the Open Sans font and a few off-white hues to provide a modern, professional look. But perhaps you are looking for something a little more colorful and offbeat? The template provides a few alternative themes for you to choose from which are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"css/techfolio-theme")," directory:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4274).Z,width:"2142",height:"1506"})),(0,a.kt)("p",null,'At the time of writing, there are four pre-built themes available: "bitter.css", "default.css", "lime.css", and "rubik.css".'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"_config.yml"),' file contains a line that specifies the theme associated with a portfolio. By default, it\'s "default.css":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"techfolio-theme: default.css\n")),(0,a.kt)("p",null,"To change the theme, edit this line to specify any of the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"css/techfolio-theme"),' directory, then commit your changes. Here\'s what the three alternatives to "default.css" do:'),(0,a.kt)("h2",{id:"bittercss"},"bitter.css"),(0,a.kt)("p",null,'This theme changes the font to "Bitter":'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5690).Z,width:"1500",height:"971"})),(0,a.kt)("h2",{id:"limecss"},"lime.css"),(0,a.kt)("p",null,"This theme injects a wee bit of green into the theme:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5737).Z,width:"1500",height:"1433"})),(0,a.kt)("h2",{id:"rubikcss"},"rubik.css"),(0,a.kt)("p",null,"This theme changes just the header text to use the chunkier Rubik font:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1335).Z,width:"1500",height:"989"})))}p.isMDXComponent=!0},4274:function(e,t,n){t.Z=n.p+"assets/images/css-techfolio-theme-dir-cac47cc1d4dd84ceac2b3a406bd47650.png"},5690:function(e,t,n){t.Z=n.p+"assets/images/theme-bitter-a26e653c7e1ce2ac2a83f04ea45dc5f4.png"},5737:function(e,t,n){t.Z=n.p+"assets/images/theme-lime-08b3d532684745f9fbc769e183d8171e.png"},1335:function(e,t,n){t.Z=n.p+"assets/images/theme-rubik-3a973b9f1c9a3eca2057ae1e43000218.png"}}]);
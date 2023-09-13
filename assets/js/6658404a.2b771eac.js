"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[7275],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var r=a.createContext({}),h=function(e){var t=a.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=h(o),m=i,d=p["".concat(r,".").concat(m)]||p[m]||c[m]||n;return o?a.createElement(d,l(l({ref:t},u),{},{components:o})):a.createElement(d,l({ref:t},u))}));function d(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var h=2;h<n;h++)l[h]=o[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7651:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var a=o(7462),i=(o(7294),o(3905));const n={title:"Customize layout"},l=void 0,s={unversionedId:"user-guide/customize-layout",id:"user-guide/customize-layout",title:"Customize layout",description:'Let\'s say you want to add additional pages to your portfolio, or change the way projects appear on the home page from a horizontal to a vertical orientation.  These kinds of changes go beyond the "theme" (i.e. colors and fonts) and instead require changes to the "layout".  This section provides guidance on how you can make these more significant changes to your portfolio.',source:"@site/docs/user-guide/customize-layout.md",sourceDirName:"user-guide",slug:"/user-guide/customize-layout",permalink:"/docs/user-guide/customize-layout",draft:!1,tags:[],version:"current",frontMatter:{title:"Customize layout"},sidebar:"publicSidebar",previous:{title:"Customize theme",permalink:"/docs/user-guide/customize-theme"},next:{title:"Missing pages",permalink:"/docs/user-guide/missing-page"}},r={},h=[{value:"Jekyll",id:"jekyll",level:2},{value:"Bootstrap",id:"bootstrap",level:2},{value:"Layout Walkthrough",id:"layout-walkthrough",level:2},{value:"Customizing bio.json",id:"customizing-biojson",level:2},{value:"Custom layout examples",id:"custom-layout-examples",level:2},{value:"Katie Amberg-Johnson",id:"katie-amberg-johnson",level:3},{value:"Philip Johnson",id:"philip-johnson",level:3},{value:"Cam Moore",id:"cam-moore",level:3},{value:"Developing from a custom layout",id:"developing-from-a-custom-layout",level:2},{value:"Show us what you got!",id:"show-us-what-you-got",level:2}],u={toc:h},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Let\'s say you want to add additional pages to your portfolio, or change the way projects appear on the home page from a horizontal to a vertical orientation.  These kinds of changes go beyond the "theme" (i.e. colors and fonts) and instead require changes to the "layout".  This section provides guidance on how you can make these more significant changes to your portfolio.'),(0,i.kt)("h2",{id:"jekyll"},"Jekyll"),(0,i.kt)("p",null,"First, it's important to know that a TechFolio professional portfolio is simply a customized ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/"},"Jekyll")," static site.  The layout of TechFolio source files corresponds to ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/structure/"},"Jekyll default directory structure"),". The pages in the site are defined using the ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/liquid/"},"Liquid Template Language"),"."),(0,i.kt)("p",null,"The most important Jekyll aspects of TechFolios is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/techfolios/template/blob/main/_config.yml"},"_config.yml"),", the files in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/techfolios/template/tree/main/_layouts"},"_layouts/")," directory, and the files in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/techfolios/template/tree/main/_includes"},"_includes/")," directory."),(0,i.kt)("p",null,"So, if you want to customize the set of pages in your portfolio, or change the header or footer, you will need to be at least a little bit familiar with Jekyll. "),(0,i.kt)("h2",{id:"bootstrap"},"Bootstrap"),(0,i.kt)("p",null,"TechFolio uses the ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/"},"Bootstrap 5")," CSS framework. Bootstrap provides convenient ways to organize the layout of content within a single page."),(0,i.kt)("p",null,"If you want to customize the way content is displayed within a single page, then you'll need to be familiar with Bootstrap."),(0,i.kt)("h2",{id:"layout-walkthrough"},"Layout Walkthrough"),(0,i.kt)("p",null,"To get a sense for how a layout for a TechFolio is constructed, let's look at the default home page. Here's the contents of the top-level index.html page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ntitle: Home\nlayout: home\n---\n\n{% include about/about.html %}\n{% include projects/projects.html limit=4 %}\n{% include essays/essays.html limit=6 %}\n")),(0,i.kt)("p",null,'It specifies that the layout for this page is "home", which is located in ',(0,i.kt)("inlineCode",{parentName:"p"},"_layouts/home.html"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nlayout: default\n---\n{% include header.html %}\n{{ content }}\n{% include footer.html %}\n")),(0,i.kt)("p",null,'This layout specifies yet another layout ("default", which we won\'t show but provides the ',(0,i.kt)("inlineCode",{parentName:"p"},"<head>"),' portion of the HTML to be included in all pages). The body of this layout includes header.html, the "content" from the page that uses this layout, followed by the footer.  This means (excluding the default layout), that the index.html page is constructed from five include files, organized as follows:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"{% include header.html %}\n{% include about/about.html %}\n{% include projects/projects.html limit=4 %}\n{% include essays/essays.html limit=6 %}\n{% include footer.html %}\n")),(0,i.kt)("p",null,"If you look at the home page for the template, you can see the correspondence to these five sections."),(0,i.kt)("p",null,'The "layout" files allow you to flexibly compose and organize bits of HTML, which are provided in "include" files. Let\'s look at the header.html include file, which is located in ',(0,i.kt)("inlineCode",{parentName:"p"},"_includes/header.html"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<header class="navbar navbar-expand navbar-light bg-light bg-gradient border-bottom">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="{{ \'/\' | prepend: site.baseurl }}">{{ site.data.bio.basics.name }}</a>\n    <div class="ms-auto">\n      <ul class="navbar-nav mb-2 mb-lg-0">\n        <a class="nav-link" href="{{ \'/#projects\' | prepend: site.baseurl }}">Projects</a>\n        <a class="nav-link" href="{{ \'/#essays\' | prepend: site.baseurl }}">Essays</a>\n        <a class="nav-link" href="{{ \'/bio/\' | prepend: site.baseurl }}">Resume</a>\n      </ul>\n    </div>\n  </div>\n</header>\n')),(0,i.kt)("p",null,"An include file consists of a mixture of HTML, Bootstrap CSS classes, and ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/liquid/"},"Liquid")," template directives, which enable you to insert data from ",(0,i.kt)("inlineCode",{parentName:"p"},"bio.json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"_config.yml"),"."),(0,i.kt)("p",null,"So, to create your own custom layout, you can do two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Change one or more layout files, or add new ones. This enables you to modify and/or add new "sections" to one or more pages in your site.'),(0,i.kt)("li",{parentName:"ol"},"Change one or more include files, or add new ones. This enables you to modify the way a specific section within a page looks. For example, you might do this to change the Bootstrap CSS associated with a part of your portfolio.")),(0,i.kt)("h2",{id:"customizing-biojson"},"Customizing bio.json"),(0,i.kt)("p",null,"It is possible to add fields to bio.json without violating the schema.  In some cases, a good way to implement your customization is by first extending the bio.json format in a backward compatible manner, then creating a custom layout that accesses these additional fields."),(0,i.kt)("p",null,"An example of this approach is ",(0,i.kt)("a",{parentName:"p",href:"https://philipmjohnson.github.io/cv.html"},"Philip Johnson's CV page"),".  This page provides separate sections for various forms of publications (i.e. journals, conferences, etc.) as well as a separate section listing awards that are grants.  To implement this approach, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/philipmjohnson/philipmjohnson.github.io/blob/main/_data/bio.json"},"Philip's bio.json")," extends the default bio.json format with additional fields, and then his template checks for those fields when laying out the page."),(0,i.kt)("h2",{id:"custom-layout-examples"},"Custom layout examples"),(0,i.kt)("p",null,"Here are some examples of custom layouts."),(0,i.kt)("h3",{id:"katie-amberg-johnson"},"Katie Amberg-Johnson"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(4080).Z,width:"1500",height:"1621"})),(0,i.kt)("p",null,"This portfolio customizes the default template in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"About section is modified to put the summary paragraph below the headshot and network icons."),(0,i.kt)("li",{parentName:"ul"},'A new section called "Papers" provides access to publications.'),(0,i.kt)("li",{parentName:"ul"},'A new "About" page provides a brief biographical sketch.'),(0,i.kt)("li",{parentName:"ul"},'The navbar has a "CV" link that goes directly to a PDF version of the CV. There is no HTML page.'),(0,i.kt)("li",{parentName:"ul"},"The site is available at a custom domain (kambergjohnson.com).")),(0,i.kt)("p",null,"Yes, in case you were wondering at the resemblence, Katie agreed to allow her headshot to be used for the Molly Maluhia template!"),(0,i.kt)("p",null,"Source code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kambergjohnson/kambergjohnson.github.io"},"https://github.com/kambergjohnson/kambergjohnson.github.io")),(0,i.kt)("p",null,"Live site: ",(0,i.kt)("a",{parentName:"p",href:"https://kambergjohnson.com"},"https://kambergjohnson.com")),(0,i.kt)("h3",{id:"philip-johnson"},"Philip Johnson"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(1058).Z,width:"1500",height:"1441"})),(0,i.kt)("p",null,"This portfolio customizes the default template in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The headshot is smaller, and the Interests and Network icons are full-width and below the picture and summary."),(0,i.kt)("li",{parentName:"ul"},'There are more than 4 projects and 6 essays, illustrating the (built-in) "See all" feature for projects and essays.'),(0,i.kt)("li",{parentName:"ul"},"The site provides a curriculum vitae rather than a resume. This is implemented by:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Extensions to bio.json to include publications."),(0,i.kt)("li",{parentName:"ul"},"A new cv.html page to replace resume.html."),(0,i.kt)("li",{parentName:"ul"},'Modifications to header.html to provide "CV" as the label which links to the cv.html page.'))),(0,i.kt)("li",{parentName:"ul"},"The projecturl and essayurl features are used to link to external sites in some cases."),(0,i.kt)("li",{parentName:"ul"},"The site is available at a custom domain (philipmjohnson.org).")),(0,i.kt)("p",null,"Source code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/philipmjohnson/philipmjohnson.github.io"},"https://github.com/philipmjohnson/philipmjohnson.github.io")),(0,i.kt)("p",null,"Live site: ",(0,i.kt)("a",{parentName:"p",href:"https://philipmjohnson.org"},"https://philipmjohnson.org")),(0,i.kt)("h3",{id:"cam-moore"},"Cam Moore"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(6424).Z,width:"1500",height:"1041"})),(0,i.kt)("p",null,"This portfolio customizes the default template in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Provides a custom theme, "skyblue.css" that adds blue highlights in various places and changes the header font to Rubik.'),(0,i.kt)("li",{parentName:"ul"},"Removed essays and awards.")),(0,i.kt)("p",null,"Source code: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cammoore/cammoore.github.io"},"https://github.com/cammoore/cammoore.github.io")),(0,i.kt)("p",null,"Live site: ",(0,i.kt)("a",{parentName:"p",href:"https://cammoore.github.io"},"https://cammoore.github.io")),(0,i.kt)("h2",{id:"developing-from-a-custom-layout"},"Developing from a custom layout"),(0,i.kt)("p",null,"If you find that one of the above custom layout portfolio examples align more closely with your needs than the default template, then you might want to base your portfolio off it rather than the default template. Here's how you might do it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"../quick-start/initialization"},"Initialization")," steps, which have you build and deploy the default template as your own portfolio."),(0,i.kt)("li",{parentName:"ol"},"Follow the instructions in ",(0,i.kt)("a",{parentName:"li",href:"tool-installation"},"Tool Installation")," and ",(0,i.kt)("a",{parentName:"li",href:"local-development"},"Local Development")," to set up your computer for local development. "),(0,i.kt)("li",{parentName:"ol"},'Go to the GitHub repo for the custom layout portfolio, make sure you are in the "main" branch, then click on "Code", and then "Download ZIP". You\'ll now have a ZIP file containing the contents of the custom layout. '),(0,i.kt)("li",{parentName:"ol"},"Replace your portfolio files by the custom layout portfolio files. "),(0,i.kt)("li",{parentName:"ol"},"Edit the first section of ",(0,i.kt)("inlineCode",{parentName:"li"},"_config.yml")," to correspond to your portfolio."),(0,i.kt)("li",{parentName:"ol"},"Build and run your portfolio locally. It should now look like the custom portfolio. "),(0,i.kt)("li",{parentName:"ol"},"Edit the bio.json, projects, essays, and other files to reflect your own work."),(0,i.kt)("li",{parentName:"ol"},"Push your portfolio to GitHub to publish it.")),(0,i.kt)("h2",{id:"show-us-what-you-got"},"Show us what you got!"),(0,i.kt)("p",null,"If you come up with an interesting layout, please contact us via the ",(0,i.kt)("a",{parentName:"p",href:"../help"},"Help")," page. Perhaps we'd like to showcase your work in our ",(0,i.kt)("a",{parentName:"p",href:"/docs/gallery"},"Gallery"),"!"))}c.isMDXComponent=!0},6424:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cammoore-47c651bc8d058eaf94f5219e1e7ccafa.png"},4080:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/kambergjohnson-com-bea1f5063a4658f5ea25c4f2aea8af9d.png"},1058:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/philipmjohnson-77514d45ee806ac2135132b01434c50b.png"}}]);
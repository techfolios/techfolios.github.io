"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[6756],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=i,y=p["".concat(s,".").concat(h)]||p[h]||f[h]||n;return o?r.createElement(y,a(a({ref:t},c),{},{components:o})):r.createElement(y,a({ref:t},c))}));function y(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6994:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=o(7462),i=(o(7294),o(3905));const n={title:"V2 Migration"},a=void 0,l={unversionedId:"user-guide/v2-migration",id:"user-guide/v2-migration",title:"V2 Migration",description:"If you already have a professional portfolio built with TechFolios prior to June 2022, then you might want to migrate over to Version 2 in order to take advantage of the improvements in TechFolios 2.",source:"@site/docs/user-guide/v2-migration.md",sourceDirName:"user-guide",slug:"/user-guide/v2-migration",permalink:"/docs/user-guide/v2-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"V2 Migration"},sidebar:"publicSidebar",previous:{title:"Error: Invalid US-ASCII character",permalink:"/docs/user-guide/locale-problem"},next:{title:"Gallery",permalink:"/docs/gallery"}},s={},u=[{value:"Backup your portfolio source files",id:"backup-your-portfolio-source-files",level:2},{value:"Delete your TechFolio repository",id:"delete-your-techfolio-repository",level:2},{value:"Follow the Quick Start",id:"follow-the-quick-start",level:2},{value:"Set up local development",id:"set-up-local-development",level:2},{value:"Migrate your portfolio source files",id:"migrate-your-portfolio-source-files",level:2},{value:"Commit your changes",id:"commit-your-changes",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you already have a professional portfolio built with TechFolios prior to June 2022, then you might want to migrate over to Version 2 in order to take advantage of the ",(0,i.kt)("a",{parentName:"p",href:"/blog/2022/06/13/techfolios-2"},"improvements in TechFolios 2"),". "),(0,i.kt)("p",null,"Here are the steps:"),(0,i.kt)("h2",{id:"backup-your-portfolio-source-files"},"Backup your portfolio source files"),(0,i.kt)("p",null,"First, go to your current TechFolio GitHub repository home page, and ",(0,i.kt)("strong",{parentName:"p"},'make sure you are viewing the "master" branch.'),' Then, click on the green "Code" button, and select "Download ZIP". This will download a zip file containing the source files for your current portfolio to your computer.'),(0,i.kt)("h2",{id:"delete-your-techfolio-repository"},"Delete your TechFolio repository"),(0,i.kt)("p",null,'Yes, this scary, but necessary, and you did just download a backup of all your files. Click on the "Settings" tab of your repository home page, scroll all the way down to the "Danger Zone", and click on "Delete this repository".  '),(0,i.kt)("h2",{id:"follow-the-quick-start"},"Follow the Quick Start"),(0,i.kt)("p",null,"Now you can follow the ",(0,i.kt)("a",{parentName:"p",href:"../quick-start/overview"},"Quick Start")," instructions to re-create your professional portfolio using the Version 2 template.  You don't necessarily have to use the browser-based editor to configure essays, projects, and resume, but you should at least follow the instructions through configuring bio.json so that ",(0,i.kt)("a",{parentName:"p",href:"https://USERNAME.github.io"},"https://USERNAME.github.io")," (where USERNAME is your own GitHub username) displays the template portfolio."),(0,i.kt)("h2",{id:"set-up-local-development"},"Set up local development"),(0,i.kt)("p",null,"Now follow the first few sections of the ",(0,i.kt)("a",{parentName:"p",href:"overview"},"User Guide")," to install the latest version of Jekyll, an editor, and GitHub Desktop (if you haven't installed those tools already). Check that you can display your portfolio site in your browser at ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/"},"http://127.0.0.1:4000/"),"."),(0,i.kt)("h2",{id:"migrate-your-portfolio-source-files"},"Migrate your portfolio source files"),(0,i.kt)("p",null,"Unzip the backup file so that you can get at your bio.json file, your project files, and your essays. "),(0,i.kt)("p",null,"First, update the bio.json file in your new repo with the bio.json file from your backup.  Check to see that the resume page displays correctly. There have not been any changes to the format of bio.json, so there should not be any problems with this step."),(0,i.kt)("p",null,"Next, migrate your essays and projects from the backup to your new site. Here are the steps:"),(0,i.kt)("p",null,'First, copy all your images from the "/images" directory in your old site to the "/img" directory in the new site.'),(0,i.kt)("p",null,'Next, in the projects/ and essays/ directories, do a global search-and-replace of "/images" to "/img".'),(0,i.kt)("p",null,"Next, you will need to change any uses of Semantic UI CSS classes to Bootstrap 5 CSS classes. For example, for small images, try something similar to: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img width="200px" \n     class="rounded float-start pe-4" \n     src="../img/difficulty/degree_difficulty.jpg">\n')),(0,i.kt)("p",null,"For full-width images, try something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img class="img-fluid" \n     src="../img/manoa_dining_landing.jpg">\n')),(0,i.kt)("h2",{id:"commit-your-changes"},"Commit your changes"),(0,i.kt)("p",null,"Once your portfolio displays correctly in your browser, then use GitHub Desktop to commit your changes to GitHub. This will trigger a GitHub action to rebuild and redeploy your site.  Enjoy your new portfolio!"))}f.isMDXComponent=!0}}]);
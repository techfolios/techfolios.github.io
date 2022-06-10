"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[6756],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return y}});var r=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(o),y=i,h=f["".concat(u,".").concat(y)]||f[y]||p[y]||n;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function y(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<n;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6994:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=o(7462),i=o(3366),n=(o(7294),o(3905)),a=["components"],l={title:"V2 Migration"},u=void 0,s={unversionedId:"user-guide/v2-migration",id:"user-guide/v2-migration",title:"V2 Migration",description:"If you already have a professional portfolio built with TechFolios prior to June 2022, then you might want to migrate over to Version 2 in order to take advantage of the improvements in TechFolios 2.",source:"@site/docs/user-guide/v2-migration.md",sourceDirName:"user-guide",slug:"/user-guide/v2-migration",permalink:"/docs/user-guide/v2-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"V2 Migration"},sidebar:"publicSidebar",previous:{title:"Error: Invalid US-ASCII character",permalink:"/docs/user-guide/locale-problem"},next:{title:"Gallery",permalink:"/docs/gallery"}},c={},p=[{value:"Backup your portfolio source files",id:"backup-your-portfolio-source-files",level:2},{value:"Delete your TechFolio repository",id:"delete-your-techfolio-repository",level:2},{value:"Follow the Quick Start",id:"follow-the-quick-start",level:2},{value:"Set up local development",id:"set-up-local-development",level:2},{value:"Migrate your portfolio source files",id:"migrate-your-portfolio-source-files",level:2},{value:"Commit your changes",id:"commit-your-changes",level:2}],f={toc:p};function y(e){var t=e.components,o=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you already have a professional portfolio built with TechFolios prior to June 2022, then you might want to migrate over to Version 2 in order to take advantage of the ",(0,n.kt)("a",{parentName:"p",href:"/blog/2022/06/15/version-2"},"improvements in TechFolios 2"),". "),(0,n.kt)("p",null,"Here are the steps:"),(0,n.kt)("h2",{id:"backup-your-portfolio-source-files"},"Backup your portfolio source files"),(0,n.kt)("p",null,'First, go to your current TechFolio GitHub repository home page, click on the green "Code" button, and select "Download ZIP". This will download a zip file containing the source files for your current portfolio to your computer.'),(0,n.kt)("h2",{id:"delete-your-techfolio-repository"},"Delete your TechFolio repository"),(0,n.kt)("p",null,'Yes, this scary, but necessary, and you did just download a backup of all your files. Click on the "Settings" tab of your repository home page, scroll all the way down to the "Danger Zone", and click on "Delete this repository".  '),(0,n.kt)("h2",{id:"follow-the-quick-start"},"Follow the Quick Start"),(0,n.kt)("p",null,"Now you can follow the ",(0,n.kt)("a",{parentName:"p",href:"../quick-start/overview"},"Quick Start")," instructions to re-create your professional portfolio using the Version 2 template.  You don't necessarily have to use the browser-based editor to configure essays, projects, and resume, but you should at least follow the instructions through configuring bio.json so that ",(0,n.kt)("a",{parentName:"p",href:"https://USERNAME.github.io"},"https://USERNAME.github.io")," (where USERNAME is your own GitHub username) displays the template portfolio."),(0,n.kt)("h2",{id:"set-up-local-development"},"Set up local development"),(0,n.kt)("p",null,"Now follow the first few sections of the ",(0,n.kt)("a",{parentName:"p",href:"overview"},"User Guide")," to install the latest version of Jekyll, an editor, and GitHub Desktop (if you haven't installed those tools already). Check that you can display your portfolio site in your browser at ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/"},"http://127.0.0.1:4000/"),"."),(0,n.kt)("h2",{id:"migrate-your-portfolio-source-files"},"Migrate your portfolio source files"),(0,n.kt)("p",null,"Unzip the backup file so that you can get at your bio.json file, your project files, and your essays. "),(0,n.kt)("p",null,"First, update the bio.json file in your new repo with the bio.json file from your backup.  Check to see that the resume page displays correctly. There have not been any changes to the format of bio.json, so there should not be any problems with this step."),(0,n.kt)("p",null,"Next, migrate your essays and projects from the backup to your new site. If you have used Semantic UI CSS classes for things like display of images, then you will need to update that code to use Bootstrap 5.  Consult this User Guide for details."),(0,n.kt)("h2",{id:"commit-your-changes"},"Commit your changes"),(0,n.kt)("p",null,"Once your portfolio displays correctly in your browser, then use GitHub Desktop to commit your changes to GitHub. This will trigger a GitHub action to rebuild and redeploy your site.  Enjoy!"))}y.isMDXComponent=!0}}]);
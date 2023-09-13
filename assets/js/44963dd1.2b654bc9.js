"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[3142],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),y=l,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return o?n.createElement(f,r(r({ref:t},c),{},{components:o})):n.createElement(f,r({ref:t},c))}));function f(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<a;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},8915:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(7462),l=(o(7294),o(3905));const a={title:"Tool installation"},r=void 0,i={unversionedId:"user-guide/tool-installation",id:"user-guide/tool-installation",title:"Tool installation",description:"Tool installation",source:"@site/docs/user-guide/tool-installation.md",sourceDirName:"user-guide",slug:"/user-guide/tool-installation",permalink:"/docs/user-guide/tool-installation",draft:!1,tags:[],version:"current",frontMatter:{title:"Tool installation"}},s={},u=[{value:"Tool installation",id:"tool-installation",level:3},{value:"Install GitHub Desktop (or another git client)",id:"install-github-desktop-or-another-git-client",level:4},{value:"Install an editor",id:"install-an-editor",level:4},{value:"Install Jekyll",id:"install-jekyll",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"tool-installation"},"Tool installation"),(0,l.kt)("p",null,"To more easily manage your portfolio, you should install three tools on your computer: (a) a git client so you you can download and upload the GitHub repository containing your site's files, (b) an editor so you can edit your source files, and (c) Jekyll so you can build your site locally and see changes quickly."),(0,l.kt)("h4",{id:"install-github-desktop-or-another-git-client"},"Install GitHub Desktop (or another git client)"),(0,l.kt)("p",null,"If you are using MacOS or Windows, the easiest way to manage your portfolio repository is with ",(0,l.kt)("a",{parentName:"p",href:"https://desktop.github.com/"},"GitHub Desktop"),".  GitHub Desktop provides an extremely easy way to download your portfolio files from GitHub to your computer for editing, and then push the files back to GitHub for deployment once you're ready for that to happen."),(0,l.kt)("p",null,"If you are using Linux, then you will need to install a different git client. If you are using Linux, you probably know this already and already have a git client installed."),(0,l.kt)("h4",{id:"install-an-editor"},"Install an editor"),(0,l.kt)("p",null,"You cannot use a word processor like Microsoft Word to edit your professional portfolio.  Instead, you need a text editor such as Emacs, Vim, IntelliJ IDEA, Microsoft Visual Studio, Eclipse, Atom, or similar."),(0,l.kt)("p",null,"Please be sure to install a text editor on your computer.  Any one will do."),(0,l.kt)("h4",{id:"install-jekyll"},"Install Jekyll"),(0,l.kt)("p",null,"The final step is to ",(0,l.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/installation/"},"install Jekyll"),". Jekyll runs on all platforms."),(0,l.kt)("p",null,"To verify that you've installed Jekyll correctly, please go through the ",(0,l.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/"},"Jekyll Quickstart")," instructions to be sure that you can create a simple Jekyll site and display it on your computer."),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"You need to run ",(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"bundle add webrick")),(0,l.kt)("p",{parentName:"admonition"},'The Jekyll documentation for the Quick Start notes that "Step 5 may fail".  Yes, it almost certainly will.  As instructed, go ahead and run:  '),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"bundle install webbrick\n")),(0,l.kt)("p",{parentName:"admonition"},"Then run ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," and things should work correctly.")),(0,l.kt)("p",null,"If you have followed the Quickstart instructions successfully, then you should be able to go to ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:4000/"},"http://127.0.0.1:4000/")," and see the following page:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:o(622).Z,width:"1874",height:"1478"})),(0,l.kt)("p",null,"Make sure you can see this page after running ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),".  Once you can, then you know you have successfully installed Jekyll."),(0,l.kt)("p",null,"Now that you have GitHub Desktop, an editor, and Jekyll, let's see how to build and view your professional portfolio locally."))}d.isMDXComponent=!0},622:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/jekyll-quick-start-page-b10966624495e0ef627b9332a4cb7c3a.png"}}]);
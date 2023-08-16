"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[3184],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var o=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],a={title:"Cloud development"},s=void 0,u={unversionedId:"user-guide/cloud-development",id:"user-guide/cloud-development",title:"Cloud development",description:"Cloud Development",source:"@site/docs/user-guide/cloud-development.md",sourceDirName:"user-guide",slug:"/user-guide/cloud-development",permalink:"/docs/user-guide/cloud-development",draft:!1,tags:[],version:"current",frontMatter:{title:"Cloud development"},sidebar:"publicSidebar",previous:{title:"Local development",permalink:"/docs/user-guide/local-development"},next:{title:"Anatomy of bio.json",permalink:"/docs/user-guide/anatomy-of-bio-json"}},p={},d=[{value:"Cloud Development",id:"cloud-development",level:2},{value:"Initial setup",id:"initial-setup",level:3},{value:"The edit-build-debug-preview-publish cycle",id:"the-edit-build-debug-preview-publish-cycle",level:3},{value:"1. Edit",id:"1-edit",level:4},{value:"2. Build",id:"2-build",level:4}],c={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cloud-development"},"Cloud Development"),(0,l.kt)("p",null,"The easiest way to develop and maintain your TechFolio portfolio is with ",(0,l.kt)("a",{parentName:"p",href:"https://gitpod.io"},"GitPod"),', a cloud-based service. This avoids the need to install an editor, a git client, and Jekyll on your laptop. (We will cover this "local development" approach in the next section.)'),(0,l.kt)("p",null,"Before starting this section, we assume you have already completed the ",(0,l.kt)("a",{parentName:"p",href:"/docs/quick-start/initialization.html"},"QuickStart: Initialization")," section, so that you have a running version of a portfolio in your GitHub account. (The portfolio doesn't need to have the right contents, just be configured to build correctly.)"),(0,l.kt)("h3",{id:"initial-setup"},"Initial setup"),(0,l.kt)("p",null,"Start by going to ",(0,l.kt)("a",{parentName:"p",href:"https://gitpod.io"},"https://gitpod.io"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9733).Z,width:"1500",height:"1137"})),(0,l.kt)("p",null,'Click "Continue with GitHub" and do whatever authentication is necessary to login to GitHub.'),(0,l.kt)("p",null,'Now you should see the "Workspaces" page:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9151).Z,width:"1500",height:"1137"})),(0,l.kt)("p",null,'Click "New Workspace", then select the repo containing your professional portfolio. After selecting it, you should see a page like this:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5748).Z,width:"1500",height:"1137"})),(0,l.kt)("p",null,'You can click the "Autostart with these options..." (or not), but then click the "Continue" button.'),(0,l.kt)("p",null,"After a few seconds, the screen will show a VS Code Editor user interface, and an open Terminal window indicating that various libraries are being installed in a green font. You'll now need to wait a minute or so for this installation process to finish. When it's finished, you'll see a Unix command prompt at the bottom of the terminal window with a blue font. For example:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4077).Z,width:"1500",height:"1137"})),(0,l.kt)("p",null,"Now type ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," into the Terminal window and hit return. You should see a few lines of text printed out indicating that jekyll has started working, and the last line should say ",(0,l.kt)("inlineCode",{parentName:"p"},"Server running... press control-c to stop"),'. At that point, a window should pop up asking if you want to make the running service "public".  For example:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9420).Z,width:"1500",height:"1137"})),(0,l.kt)("p",null,"After that, if you hover over ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4000"),' on the second to last line, a "Follow link" button will appear. For example:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2921).Z,width:"2198",height:"1666"})),(0,l.kt)("p",null,"Click it to open a new browser window with a preview of your professional portfolio:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(328).Z,width:"1500",height:"1080"})),(0,l.kt)("h3",{id:"the-edit-build-debug-preview-publish-cycle"},"The edit-build-debug-preview-publish cycle"),(0,l.kt)("p",null,"To develop your portfolio, you will follow the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Edit:"),"  You make changes to the files defining your professional portfolio."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Build:")," You run ",(0,l.kt)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")," to run jekyll and build your portfolio. (You might have to type ",(0,l.kt)("inlineCode",{parentName:"li"},"control-c")," first if jekyll is already running.)"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Debug:")," Sometimes your edits result in an invalid system that cannot be built. For example: your bio.json file is not in valid JSON format. In this case, the build will fail. You will need to read the error message and figure out how to fix it."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Preview"),": Once the build step completes successfully (and the Terminal window indicates that the server is running, hover over ",(0,l.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:4000")," to get the link to display your revised portfolio. Alternatively, if the page is already displayed, just refresh the page to see the changes. "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Publish"),": Once you have made all the edits you want to the system, and you are ready to make your revised portfolio available to world, commit your changes to GitHub. ")),(0,l.kt)("p",null,"Let's look at examples of each of these steps:"),(0,l.kt)("h4",{id:"1-edit"},"1. Edit"),(0,l.kt)("p",null,'Let\'s say I want to add a new Interest called "Community Gardening" to my portfolio. I could do this by expanding the ',(0,l.kt)("inlineCode",{parentName:"p"},"_data"),' directory in the left pane, then double clicking on "bio.json" to open that file for editing. For example:'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7501).Z,width:"1500",height:"1242"})),(0,l.kt)("p",null,"Next, I might use the current Interests section as a guide to adding a new one for Community Gardening. For example:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(9365).Z,width:"1500",height:"1242"})),(0,l.kt)("p",null,"Now I press command-S to save out my file. I've now made an edit."),(0,l.kt)("h4",{id:"2-build"},"2. Build"),(0,l.kt)("p",null,"To build the system, I first need to stop the currently running Jekyll process. To do this, I click into the Terminal window and type ",(0,l.kt)("inlineCode",{parentName:"p"},"control-c"),". This should result in the program stopping and the appearance of a Unix command prompt in blue at the bottom of the Terminal window. For example:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6809).Z,width:"1500",height:"1242"})," "),(0,l.kt)("p",null,"If you type ",(0,l.kt)("inlineCode",{parentName:"p"},"control-c")," and there is no running process, don't worry, nothing bad will happen."),(0,l.kt)("p",null,"Now, to run the build, I type ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," and hit return. In this case, the build was successful and I get the following:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4256).Z,width:"1500",height:"1242"})," "),(0,l.kt)("p",null,'Click "Open Browser" to open the portfolio in a new browser tab, or if you already have it displayed, just refresh that page. Either way, you will see your revised version. For example, here is my portfolio with the new interest:'))}h.isMDXComponent=!0},9733:function(e,t,n){t.Z=n.p+"assets/images/cloud-1-e0187b9e62f97519b4a7a80cefc4ecdc.png"},6809:function(e,t,n){t.Z=n.p+"assets/images/cloud-10-70e97d47f4079a44bb76594f4f917689.png"},4256:function(e,t,n){t.Z=n.p+"assets/images/cloud-11-f9e6d35a32e0018eaad2b564dcade1b9.png"},9151:function(e,t,n){t.Z=n.p+"assets/images/cloud-2-d923365832c67861f01b97802ad94da9.png"},5748:function(e,t,n){t.Z=n.p+"assets/images/cloud-3-bb4ea3ac7d27df83563209171e24e641.png"},4077:function(e,t,n){t.Z=n.p+"assets/images/cloud-4-e5b16f6f8a93591cd728e0600af00850.png"},9420:function(e,t,n){t.Z=n.p+"assets/images/cloud-5-25017a38d508414f7c1dafcc56dfbc39.png"},2921:function(e,t,n){t.Z=n.p+"assets/images/cloud-6-f41e704a33550dcfa442f673eb3f81ff.png"},328:function(e,t,n){t.Z=n.p+"assets/images/cloud-7-79408b3c90faad68dafba855745eef40.png"},7501:function(e,t,n){t.Z=n.p+"assets/images/cloud-8-5bfb4263eb83e0306b226623b58f9b99.png"},9365:function(e,t,n){t.Z=n.p+"assets/images/cloud-9-8df9a7254e3b0e879ca2a01e506b523a.png"}}]);
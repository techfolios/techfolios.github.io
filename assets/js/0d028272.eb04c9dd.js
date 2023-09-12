"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[3184],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(o),h=i,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||a;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,l=new Array(a);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<a;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1762:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var n=o(7462),i=o(3366),a=(o(7294),o(3905)),l=["components"],r={title:"Cloud development"},s=void 0,d={unversionedId:"user-guide/cloud-development",id:"user-guide/cloud-development",title:"Cloud development",description:"Cloud Development",source:"@site/docs/user-guide/cloud-development.md",sourceDirName:"user-guide",slug:"/user-guide/cloud-development",permalink:"/docs/user-guide/cloud-development",draft:!1,tags:[],version:"current",frontMatter:{title:"Cloud development"},sidebar:"publicSidebar",previous:{title:"Overview",permalink:"/docs/user-guide/overview"},next:{title:"Local development",permalink:"/docs/user-guide/local-development"}},u={},p=[{value:"Cloud Development",id:"cloud-development",level:2},{value:"Initial setup",id:"initial-setup",level:3},{value:"The edit-build-debug-preview-publish cycle",id:"the-edit-build-debug-preview-publish-cycle",level:3},{value:"1. Edit",id:"1-edit",level:4},{value:"2. Build",id:"2-build",level:4},{value:"3. Preview",id:"3-preview",level:4},{value:"4. Debug",id:"4-debug",level:4},{value:"5. Publish",id:"5-publish",level:4},{value:"But I don&#39;t like the cloud!",id:"but-i-dont-like-the-cloud",level:2}],c={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cloud-development"},"Cloud Development"),(0,a.kt)("p",null,"The easiest way to develop and maintain your TechFolio portfolio is with ",(0,a.kt)("a",{parentName:"p",href:"https://gitpod.io"},"GitPod"),', a cloud-based service. This avoids the need to install an editor, a git client, and Jekyll on your laptop. (We will cover this "local development" approach in the next section.)'),(0,a.kt)("p",null,"Before starting this section, we assume you have already completed the ",(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start/initialization.html"},"QuickStart: Initialization")," section, so that you have a running version of a portfolio in your GitHub account. (The portfolio doesn't need to have the right contents, just be configured to build correctly.)"),(0,a.kt)("h3",{id:"initial-setup"},"Initial setup"),(0,a.kt)("p",null,"Start by going to ",(0,a.kt)("a",{parentName:"p",href:"https://gitpod.io"},"https://gitpod.io"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9733).Z,width:"1500",height:"1137"})),(0,a.kt)("p",null,'Click "Continue with GitHub" and do whatever authentication is necessary to login to GitHub.'),(0,a.kt)("p",null,'Now you should see the "Workspaces" page:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9151).Z,width:"1500",height:"1137"})),(0,a.kt)("p",null,'Click "New Workspace", then select the repo containing your professional portfolio. After selecting it, you should see a page like this:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5748).Z,width:"1500",height:"1137"})),(0,a.kt)("p",null,'You can click the "Autostart with these options..." (or not), but then click the "Continue" button.'),(0,a.kt)("p",null,"After a few seconds, the screen will show a VS Code Editor user interface, and an open Terminal window indicating that various libraries are being installed in a green font. You'll now need to wait a minute or so for this installation process to finish. When it's finished, you'll see a Unix command prompt at the bottom of the terminal window with a blue font. For example:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4077).Z,width:"1500",height:"1137"})),(0,a.kt)("p",null,"Now type ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," into the Terminal window and hit return. You should see a few lines of text printed out indicating that jekyll has started working, and the last line should say ",(0,a.kt)("inlineCode",{parentName:"p"},"Server running... press control-c to stop"),'. At that point, a window should pop up asking if you want to make the running service "public".  For example:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9420).Z,width:"1500",height:"1137"})),(0,a.kt)("p",null,"After that, if you hover over ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4000"),' on the second to last line, a "Follow link" button will appear. For example:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2921).Z,width:"2198",height:"1666"})),(0,a.kt)("p",null,"Click it to open a new browser window with a preview of your professional portfolio:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(328).Z,width:"1500",height:"1080"})),(0,a.kt)("h3",{id:"the-edit-build-debug-preview-publish-cycle"},"The edit-build-debug-preview-publish cycle"),(0,a.kt)("p",null,"To develop your portfolio, you will follow the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Edit:"),"  You make changes to the files defining your professional portfolio."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Build:")," You run ",(0,a.kt)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")," to run jekyll and build your portfolio. (You might have to type ",(0,a.kt)("inlineCode",{parentName:"li"},"control-c")," first if jekyll is already running.)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Debug:")," Sometimes your edits result in an invalid system that cannot be built. For example: your bio.json file is not in valid JSON format. In this case, the build will fail. You will need to read the error message and figure out how to fix it."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Preview"),": Once the build step completes successfully (and the Terminal window indicates that the server is running, hover over ",(0,a.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:4000")," to get the link to display your revised portfolio. Alternatively, if the page is already displayed, just refresh the page to see the changes. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Publish"),": Once you have made all the edits you want to the system, and you are ready to make your revised portfolio available to world, commit your changes to GitHub. ")),(0,a.kt)("p",null,"Let's look at examples of each of these steps:"),(0,a.kt)("h4",{id:"1-edit"},"1. Edit"),(0,a.kt)("p",null,'Let\'s say I want to add a new Interest called "Community Gardening" to my portfolio. I could do this by expanding the ',(0,a.kt)("inlineCode",{parentName:"p"},"_data"),' directory in the left pane, then double clicking on "bio.json" to open that file for editing. For example:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7501).Z,width:"1500",height:"1242"})),(0,a.kt)("p",null,"Next, I might use the current Interests section as a guide to adding a new one for Community Gardening. For example:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9365).Z,width:"1500",height:"1242"})),(0,a.kt)("p",null,"Now I press command-S to save out my file. I've now made an edit."),(0,a.kt)("h4",{id:"2-build"},"2. Build"),(0,a.kt)("p",null,"To build the system, I first need to stop the currently running Jekyll process. To do this, I click into the Terminal window and type ",(0,a.kt)("inlineCode",{parentName:"p"},"control-c"),". This should result in the program stopping and the appearance of a Unix command prompt in blue at the bottom of the Terminal window. For example:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(6809).Z,width:"1500",height:"1242"})," "),(0,a.kt)("p",null,"If you type ",(0,a.kt)("inlineCode",{parentName:"p"},"control-c")," and there is no running process, don't worry, nothing bad will happen."),(0,a.kt)("p",null,"Now, to run the build, I type ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," and hit return. In this case, the build was successful and I get the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4256).Z,width:"1500",height:"1242"})," "),(0,a.kt)("h4",{id:"3-preview"},"3. Preview"),(0,a.kt)("p",null,'Click "Open Browser" to open the portfolio in a new browser tab, or if you already have it displayed, just refresh that page. Either way, you will see a "preview" of your revised version. By "preview", I mean a version of your portfolio that only you can see--it is not publicly available yet.'),(0,a.kt)("p",null,"For example, here is my portfolio with the new interest:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8555).Z,width:"2314",height:"1916"})," "),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro Tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In Unix ",(0,a.kt)("inlineCode",{parentName:"p"},"control-P")," recalls the last command and places it onto the command line. So, you can type ",(0,a.kt)("inlineCode",{parentName:"p"},"control-c control-p return")," to quickly stop the running build and restart a new one."))),(0,a.kt)("h4",{id:"4-debug"},"4. Debug"),(0,a.kt)("p",null,'Sometimes you make edits that "break the build".  For example, let\'s say that I added my community gardening interest as the last line of the file:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4180).Z,width:"2314",height:"1916"})," "),(0,a.kt)("p",null,"If I now type ",(0,a.kt)("inlineCode",{parentName:"p"},"control-c control-p return")," in the Terminal window, I get the following error message:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(864).Z,width:"1500",height:"1242"})," "),(0,a.kt)("p",null,'As you can see, there\'s no "Running server" message, just a bunch of gobbledy-gook.'),(0,a.kt)("p",null,"At this point, the best thing to do is to scroll back through the error log to see if something useful appears. In this case, scrolling back reveals an  error message:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4997).Z,width:"1500",height:"1242"})," "),(0,a.kt)("p",null,'Aha! There is a problem with the Interests section: it appears that the parser was expecting a "," but did not find it. In fact, there is a missing comma on the line with the Educational Technology interest. If I add a comma to that line, and then type ',(0,a.kt)("inlineCode",{parentName:"p"},"control-c control-p return"),", the build runs successfully and refreshing my browser window shows the reordered list of Interests:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(3693).Z,width:"1500",height:"1242"})," "),(0,a.kt)("h4",{id:"5-publish"},"5. Publish"),(0,a.kt)("p",null,"Once you've edited, built, previewed, and debugged your portfolio for a while, you will want to publish it so that others can see it. "),(0,a.kt)("p",null,'To do that, click on the "Source Control" icon on the left side of the screen. It should have a circle with a number in it indicating the edits you have made. After clicking the icon, the Source Control window is displayed. For example:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(6936).Z,width:"1500",height:"1242"})," "),(0,a.kt)("p",null,'It shows that two files were modified. Type a short message into the Message text field to document what you did (for example, "Fix Interests"), the click the dropdown icon on the Commit button to display some options:'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4430).Z,width:"1500",height:"1242"})),(0,a.kt)("p",null,'Select either "Commit and Push" or "Commit and Sync". Quite quickly, the Commit button will be grayed out, because you have no edits that have not been committed. '),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"GitPod won't give me the option to push or sync!")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'If this is the first time you are using GitPod, you have to explicitly give it permission to push or sync code to your GitHub repo in order for the "Commit and Push" or "Commit and Sync" menu items to appear. '),(0,a.kt)("p",{parentName:"div"},"To give GitPod permission to modify your GitHub account:"),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},'Click on the avatar associated with you at the top right of the page to pull down a menu of items, then select "User Settings" to go to the User Settings page.'),(0,a.kt)("li",{parentName:"ol"},'On the left side menu, select "Git Providers" to go to the Git Providers page.'),(0,a.kt)("li",{parentName:"ol"},'Click on the three vertical dots next to GitHub, then select "Edit Permissions" to bring up the Edit permissions dialog.'),(0,a.kt)("li",{parentName:"ol"},'Make sure all possible permissions are checked, then click "Update Permissions".')))),(0,a.kt)("p",null,'Once you have successfully invoked "Commit and Push" or "Commit and Sync",  you can now go to GitHub and click on the Actions pane associated with your portfolio. '),(0,a.kt)("p",null,"You will see that the result of either of those actions is to trigger a build of your portfolio.  Once that completes, the public portfolio site should display your updated portfolio. For example:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(6375).Z,width:"1500",height:"1242"})),(0,a.kt)("h2",{id:"but-i-dont-like-the-cloud"},"But I don't like the cloud!"),(0,a.kt)("p",null,"If, for some reason, you don't want to use GitPod, the next section explains how to install and develop your portfolio locally."))}h.isMDXComponent=!0},9733:function(e,t,o){t.Z=o.p+"assets/images/cloud-1-e0187b9e62f97519b4a7a80cefc4ecdc.png"},6809:function(e,t,o){t.Z=o.p+"assets/images/cloud-10-70e97d47f4079a44bb76594f4f917689.png"},4256:function(e,t,o){t.Z=o.p+"assets/images/cloud-11-f9e6d35a32e0018eaad2b564dcade1b9.png"},8555:function(e,t,o){t.Z=o.p+"assets/images/cloud-12-f2db0107446893204fa3522cf7ebc15f.png"},4180:function(e,t,o){t.Z=o.p+"assets/images/cloud-13-462989019fa1622477c7241b94c92eb0.png"},864:function(e,t,o){t.Z=o.p+"assets/images/cloud-14-a81e86df1815c0f0eab7773444aebdd7.png"},4997:function(e,t,o){t.Z=o.p+"assets/images/cloud-15-f8730e0d940a134c69633095acf229e4.png"},3693:function(e,t,o){t.Z=o.p+"assets/images/cloud-16-689213442e3800c81a1ba212e87d94fe.png"},6936:function(e,t,o){t.Z=o.p+"assets/images/cloud-17-5ec5e3006d3afb46fd33c4171cbf0e9b.png"},4430:function(e,t,o){t.Z=o.p+"assets/images/cloud-18-b290b8563f7e7db9b70df1469f57e419.png"},6375:function(e,t,o){t.Z=o.p+"assets/images/cloud-19-28c76670193407a8629642d10a61a41c.png"},9151:function(e,t,o){t.Z=o.p+"assets/images/cloud-2-d923365832c67861f01b97802ad94da9.png"},5748:function(e,t,o){t.Z=o.p+"assets/images/cloud-3-bb4ea3ac7d27df83563209171e24e641.png"},4077:function(e,t,o){t.Z=o.p+"assets/images/cloud-4-e5b16f6f8a93591cd728e0600af00850.png"},9420:function(e,t,o){t.Z=o.p+"assets/images/cloud-5-25017a38d508414f7c1dafcc56dfbc39.png"},2921:function(e,t,o){t.Z=o.p+"assets/images/cloud-6-f41e704a33550dcfa442f673eb3f81ff.png"},328:function(e,t,o){t.Z=o.p+"assets/images/cloud-7-79408b3c90faad68dafba855745eef40.png"},7501:function(e,t,o){t.Z=o.p+"assets/images/cloud-8-5bfb4263eb83e0306b226623b58f9b99.png"},9365:function(e,t,o){t.Z=o.p+"assets/images/cloud-9-8df9a7254e3b0e879ca2a01e506b523a.png"}}]);
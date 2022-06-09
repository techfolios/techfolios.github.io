"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[4310],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return u}});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=p(o),u=a,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return o?n.createElement(m,i(i({ref:e},c),{},{components:o})):n.createElement(m,i({ref:e},c))}));function u(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},4498:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],l={title:"Configure projects"},s=void 0,p={unversionedId:"quick-start/configure-projects",id:"quick-start/configure-projects",title:"Configure projects",description:"The default projects",source:"@site/docs/quick-start/configure-projects.md",sourceDirName:"quick-start",slug:"/quick-start/configure-projects",permalink:"/docs/quick-start/configure-projects",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure projects"},sidebar:"publicSidebar",previous:{title:"Configure bio.json",permalink:"/docs/quick-start/configure-bio-json"},next:{title:"Configure essays",permalink:"/docs/quick-start/configure-essays"}},c={},d=[{value:"The default projects",id:"the-default-projects",level:2},{value:"Project front matter",id:"project-front-matter",level:2},{value:"Project body",id:"project-body",level:2},{value:"Create new project",id:"create-new-project",level:2},{value:"Update project image",id:"update-project-image",level:2},{value:"Unpublish template projects",id:"unpublish-template-projects",level:2}],h={toc:d};function u(t){var e=t.components,l=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-default-projects"},"The default projects"),(0,r.kt)("p",null,"The template comes with three sample projects: Vacay, Micromouse, and Cotton:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(1188).Z,width:"2330",height:"2238"})),(0,r.kt)("p",null,"To define a project in TechFolios, you create a file in the projects/ directory.  So, in the template/projects directory, there are three files, one for each project:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4136).Z,width:"1984",height:"1462"})),(0,r.kt)("p",null,"Projects are implemented using a format called ",(0,r.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),', and project files should have the extension ".md" to indicate they are in this format. If you click on the cotton.md file, GitHub will display the page like this:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4375).Z,width:"2286",height:"2280"})),(0,r.kt)("p",null,'I personally find this display quite confusing. Click on the "Raw" button to see what the file contents actually look like:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(6350).Z,width:"2286",height:"2280"})),(0,r.kt)("h2",{id:"project-front-matter"},"Project front matter"),(0,r.kt)("p",null,'There are two parts to a project file.  The first part is called the "front matter". Every project file must have front matter, which is at the top of the file and delineated by lines containing exactly three dashes. In the case of cotton.md, the front matter section of the file consists of:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'---\nlayout: project\ntype: project\nimage: img/cotton/cotton-square.png\ntitle: "Cotton"\n# All dates must be YYYY-MM-DD format!\ndate: 2014-04-12\npublished: true\nlabels:\n  - Lisp\n  - GitHub\nsummary: "A text adventure game I developed for ICS 313."\n---\n')),(0,r.kt)("p",null,"Here's a little bit about each of these fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout:"),(0,r.kt)("td",{parentName:"tr",align:null},'For projects, must be "project"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type:"),(0,r.kt)("td",{parentName:"tr",align:null},'For projects, must be "project"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image:"),(0,r.kt)("td",{parentName:"tr",align:null},"The path to the file containing an image to be displayed on your TechFolio home page with the project. We highly recommend that you crop this image to be a square.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title:"),(0,r.kt)("td",{parentName:"tr",align:null},"The title of your project. It's best to always put your title in quotation marks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date:"),(0,r.kt)("td",{parentName:"tr",align:null},"The date associated with your project, in YYYY-MM-DD format. TechFolios uses this field to display your projects in reverse chronological order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"published:"),(0,r.kt)("td",{parentName:"tr",align:null},'A boolean, either "true" or "false". You can set this to false to prevent TechFolios from presenting this project file in your portfolio. This is useful if you want to keep one of the default project files in your repo as an example, but not actually publish it as part of your portfolio.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labels:"),(0,r.kt)("td",{parentName:"tr",align:null},"An indented list of strings that show up as labels in the project description.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"summary:"),(0,r.kt)("td",{parentName:"tr",align:null},"One or two sentences that summarize your project. It's best to always put the summary in quotation marks.")))),(0,r.kt)("h2",{id:"project-body"},"Project body"),(0,r.kt)("p",null,'Following the front matter is the project body. A formatted version of the project body appears when you click the "Read More" button on the home page for a specific project. In the case of the Cotton project, the following page appears:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(2441).Z,width:"2004",height:"2048"})),(0,r.kt)("p",null,"This was generated from the following markdown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'\n<img class="img-fluid" src="../img/cotton/cotton-header.png">\n\nCotton is a horror-esque text-based adventure game I developed using the functions and macros built from The Wizard\'s Game in [Conrad Barski\'s Land of Lisp](http://landoflisp.com/). Slightly more interesting and convoluted! (It is not that scary.)\n\nTo give you a flavor of the game, here is an excerpt from one run:\n\n<hr>\n\n<pre>\nYou open your eyes, and you are greeted by an unfamiliar ceiling.\nStartled, you get to your feet and quickly scan your surroundings. It\'s\ndark except for the stream of light coming from a crack on the only boarded\nwindow in the room. You try to peek through the crack, but you cannot see\nanything. You wonder where you are and who could have possibly brought you here.\n\n<--------------------help------------------------\x3e\nEnter quit or one of the following commands -\nWeld light look walk pickup inventory help h ?\n<------------------------------------------------\x3e\n\nlook\nThe room is a picture of decay with only a faded number identifying it as room-4. The bed you were\n lying on is stained with what looks like dried blood. Could it be your blood? No - it is not. The\n only way out of the room aside from the door to the corridor is a window that is boarded shut. It\n looks like it has been like that for decades. There is a door going west from here. You see a candle\n on the floor. You see a match on the floor.\n\npickup candle\n- you are now carrying the candle -\n\npickup match\n- you are now carrying the match -\n\nlight match candle\n\nThe candle is now lit. It illuminates everything in the room.\n\nwalk west\nThe corridor is lit with the candle. It is so long that you cannot see to the end. You notice that\n there are words written on the wall. There is a door going east from here. There is a way going north\n from here. There is a door going south from here.\n</pre>\n\n<hr>\n\nSource: <a href="https://github.com/jogarces/ics-313-text-game"><i class="large github icon "></i>jogarces/ics-313-text-game</a>\n')),(0,r.kt)("p",null,"To create a professional portfolio using TechFolios, you will need to learn how to write Markdown. Don't worry, it's really, really easy.  Here's a good ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"},"Markdown Tutorial")," to get you started if you don't have any prior experience with it."),(0,r.kt)("h2",{id:"create-new-project"},"Create new project"),(0,r.kt)("p",null,"Now that you understand a little about how projects are structured, let's create a new one. The easiest way to do that is to copy the contents of an existing project definition into a new file in the projects folder, then edit the contents."),(0,r.kt)("p",null,"To start, navigate to one of the projects in the projects folder, such as micromouse.md:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(3129).Z,width:"2386",height:"1824"})),(0,r.kt)("p",null,'As shown above, there is a button you can press to "copy raw contents". Click it to copy the contents of this file to your browser clipboard.'),(0,r.kt)("p",null,'Now navigate up to the projects directory, and click the "Add File" button, which gives you the option to "Create new file":'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(6997).Z,width:"2386",height:"1824"})),(0,r.kt)("p",null,"Click create new file, then click into the Edit new file text area, and paste the contents of the clipboard. The result should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(386).Z,width:"2386",height:"1824"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Soft wrap is better")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'To make your life way easier, click on the "No wrap" button and select "Soft wrap" instead. Now all of the text will appear in the browser window without horizontal scrolling.'))),(0,r.kt)("p",null,"Now edit this file to create your first project:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"File Name:"),' Give the file a name with the extension ".md" at the top of the page. Make sure the file name does not include any spaces.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Front Matter:")," Edit the title, date, labels, and summary fields of the front matter to reflect your project. Don't worry about the image for now."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Project Body:")," Write a short paragraph or two about your project.  Don't worry about fancy formatting for now.")),(0,r.kt)("p",null,"Here's what mine looks like after making these changes:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(2712).Z,width:"2386",height:"1824"})),(0,r.kt)("p",null,'Scroll to the bottom and press "Commit new file" to create it. Now the projects directory should show your new project file:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(6346).Z,width:"2332",height:"1726"})),(0,r.kt)("p",null,"Importantly, your change to the repo kicked off the GitHub Actions to rebuild and redeploy your portfolio. Go to the Actions page and wait until those two actions complete:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(9755).Z,width:"2332",height:"1538"})),(0,r.kt)("p",null,"Now check out your portfolio. Mine looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(2801).Z,width:"1500",height:"1732"})),(0,r.kt)("p",null,"This is pretty good, but there's two problems:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The RadGrad project displays the image from the Micromouse project."),(0,r.kt)("li",{parentName:"ol"},"My portfolio still contains projects from the template.")),(0,r.kt)("p",null,"Let's fix both of these problems now."),(0,r.kt)("h2",{id:"update-project-image"},"Update project image"),(0,r.kt)("p",null,"First, find an image to represent your project and crop it to a square image at least 300 pixels wide. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.groovypost.com/howto/crop-images-photos/"},"this tutorial")," for instructions on how to crop images on Macintosh, Windows, or Linux."),(0,r.kt)("p",null,"Once you've found your image, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"img"),' directory of your professional portfolio, and click on the "Add file" button:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4567).Z,width:"2302",height:"1882"})),(0,r.kt)("p",null,'Select "Upload files", which brings you to this page:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(6366).Z,width:"2302",height:"1882"})),(0,r.kt)("p",null,'Upload the file, then scroll to the bottom of the page and click "Commit changes".  When you are done, the ',(0,r.kt)("inlineCode",{parentName:"p"},"img"),' directory should contain your new project file. In my case, it\'s named "radgrad_logo.png":'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(995).Z,width:"2302",height:"1918"})),(0,r.kt)("p",null,"The last step is to edit the front matter of your project description to specify the path to this image:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(7933).Z,width:"2302",height:"1918"})),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the images for the template projects are in subdirectories of the ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," directory, but in this example, I uploaded the file to the top-level of the img directory. So, make sure you get the path to your file correct."),(0,r.kt)("p",{parentName:"div"},"It's a good practice to create subdirectories to organize your images, but you can wait to do that until you are developing your portfolio locally. See the User Guide for details on how to do that."))),(0,r.kt)("p",null,"Scroll to the bottom, commit the change, go to the Actions tab, wait for the build to finish, and (in my case) the portfolio now looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4997).Z,width:"1500",height:"1499"})),(0,r.kt)("h2",{id:"unpublish-template-projects"},"Unpublish template projects"),(0,r.kt)("p",null,"The only thing left to do is remove the template projects from your portfolio.  An easy way to do that is to simply delete the template project files from the ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/")," directory."),(0,r.kt)("p",null,'But, you might find those files to be useful examples in future, so a better approach is to "unpublish" them.  That way, the files are still available to you to look at for reference purposes, but they won\'t appear in your portfolio.  To unpublish a project file, bring up the browser-based editor for the file:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(1159).Z,width:"2276",height:"1594"})),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"published:")," field from true to false, and commit the change."),(0,r.kt)("p",null,"Go ahead and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"published:")," field to false for all three template projects. Monitor the Actions page until all of the builds complete and your portfolio is deployed.  Your portfolio will now display only the project that you've actually worked on:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(5042).Z,width:"1500",height:"1682"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Developing locally is way easier")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're like me, you will find that editing your portfolio files using the browser and waiting for your portfolio to be re-deployed in order to see your changes is very tedious and time-consuming."),(0,r.kt)("p",{parentName:"div"},"The good news is that there's a much better faster and easier way to work on your portfolio. You just have to install a few tools on your computer, and then you can edit a local copy of your portfolio files, see the changes to your portfolio almost instantly, and then commit the changes to GitHub when you are ready. We cover this in the User Guide.  "))),(0,r.kt)("p",null,"Now that you have one of your own projects in your portfolio, let's fix the essays section."))}u.isMDXComponent=!0},4567:function(t,e,o){e.Z=o.p+"assets/images/add-img-file-b8c8028a0459cfe9cb3d9c6350b501f8.png"},3129:function(t,e,o){e.Z=o.p+"assets/images/copy-raw-project-contents-e2794fd5b95c76bdc047298fc9b61f38.png"},6350:function(t,e,o){e.Z=o.p+"assets/images/cotton-file-display-raw-1fa6d1723c9f9bb4862356d8c43f12b6.png"},4375:function(t,e,o){e.Z=o.p+"assets/images/cotton-file-display-01681b0126c52870c5f264378ee78b9f.png"},2441:function(t,e,o){e.Z=o.p+"assets/images/cotton-page-body-bbd505beb5058442639d6a44ebd5c4fd.png"},6997:function(t,e,o){e.Z=o.p+"assets/images/create-new-project-file-0cbf4546a7a9f5f32b449c6151cbad0e.png"},1188:function(t,e,o){e.Z=o.p+"assets/images/default-projects-0be000cb2db60313721b60cfc44c8ad8.png"},6366:function(t,e,o){e.Z=o.p+"assets/images/drag-files-1a5cd85b5a96063aae0b383ecfb97478.png"},7933:function(t,e,o){e.Z=o.p+"assets/images/img-field-update-ad69ed0decf688107530a6a66a6a71c7.png"},386:function(t,e,o){e.Z=o.p+"assets/images/pasted-project-contents-622212232b176cd1e1144148671914cc.png"},5042:function(t,e,o){e.Z=o.p+"assets/images/portfolio-with-one-project-c6bf180483017e035dc432af2894c4b1.png"},4997:function(t,e,o){e.Z=o.p+"assets/images/portfolio-with-radgrad-logo-33bf5bab6eb3f4a44e196f4c537ccda4.png"},2801:function(t,e,o){e.Z=o.p+"assets/images/portfolio-with-radgrad-b301d854edca9f05450df5b75e416b8c.png"},4136:function(t,e,o){e.Z=o.p+"assets/images/projects-dir-ca42034a2baffbb3d2987fa516ff03d2.png"},1159:function(t,e,o){e.Z=o.p+"assets/images/published-true-77fda1826f4f9e1c67111f665e7f9781.png"},2712:function(t,e,o){e.Z=o.p+"assets/images/radgrad-edits-9a0236765c612069e924392a356164d3.png"},9755:function(t,e,o){e.Z=o.p+"assets/images/rebuild-with-radgrad-7f827bfa5711f6633e285082ee815d52.png"},995:function(t,e,o){e.Z=o.p+"assets/images/updated-img-dir-2571cfc05d80785a849c81d6d7f7399a.png"},6346:function(t,e,o){e.Z=o.p+"assets/images/updated-projects-directory-8492435cdf2bd8392cdcf685652e264a.png"}}]);
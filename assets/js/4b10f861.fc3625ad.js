"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[690],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(o),h=l,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,r=new Array(i);r[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4342:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var n=o(7462),l=o(3366),i=(o(7294),o(3905)),r=["components"],a={title:"Local development"},s=void 0,u={unversionedId:"user-guide/local-development",id:"user-guide/local-development",title:"Local development",description:"Clone your repository to your computer",source:"@site/docs/user-guide/local-development.md",sourceDirName:"user-guide",slug:"/user-guide/local-development",permalink:"/docs/user-guide/local-development",draft:!1,tags:[],version:"current",frontMatter:{title:"Local development"},sidebar:"publicSidebar",previous:{title:"Local installation",permalink:"/docs/user-guide/local-installation"},next:{title:"Reference Guide",permalink:"/docs/user-guide/reference-guide"}},c={},d=[{value:"Clone your repository to your computer",id:"clone-your-repository-to-your-computer",level:2},{value:"Install libraries",id:"install-libraries",level:2},{value:"Run jekyll",id:"run-jekyll",level:2},{value:"Customize your content",id:"customize-your-content",level:2},{value:"Modify theme &amp; navbar",id:"modify-theme--navbar",level:3},{value:"Unpublish modules",id:"unpublish-modules",level:3},{value:"Create a new  module",id:"create-a-new--module",level:3},{value:"Publish your changes",id:"publish-your-changes",level:2},{value:"Summary",id:"summary",level:2},{value:"Continuing on",id:"continuing-on",level:2}],p={toc:d};function h(e){var t=e.components,a=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"clone-your-repository-to-your-computer"},"Clone your repository to your computer"),(0,i.kt)("p",null,'The first step in setting up local development is to "clone" the GitHub repository containing your professional portfolio source files to your computer. To do this, go to your repo, click on "Code", and then select "Open with GitHub Desktop":'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(3610).Z,width:"2270",height:"1886"})),(0,i.kt)("p",null,"That will bring up GitHub Desktop, which will ask you where in your file system you want to locate the files associated with this repository:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(2810).Z,width:"1910",height:"1302"})),(0,i.kt)("p",null,'Adjust the "Local Path" to your liking, then click "Clone" to create a copy of your repository on your computer. You will now have a local directory containing files similar to this:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(1384).Z,width:"1972",height:"1324"})),(0,i.kt)("h2",{id:"install-libraries"},"Install libraries"),(0,i.kt)("p",null,"Next, you need to install the libraries associated with your Morea site. To do this, open a Terminal (or shell), change directories to your repository directory, and invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ bundle install\nUsing public_suffix 4.0.6\nUsing addressable 2.8.0\nUsing bundler 2.2.24\n  :    :\nUsing jekyll 4.2.0\nUsing webrick 1.7.0\nBundle complete! 6 Gemfile dependencies, 38 gems now installed.\nUse `bundle info [gemname]` to see where a bundled gem is installed.\n")),(0,i.kt)("h2",{id:"run-jekyll"},"Run jekyll"),(0,i.kt)("p",null,"Now, build the Morea site and enable it to be displayed locally on your laptop by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ bundle exec jekyll serve\nConfiguration file: /Users/philipjohnson/github/uhmanoa/cs299fall21/_config.yml\nConfiguration file: /Users/philipjohnson/github/uhmanoa/cs299fall21/_config.yml\n            Source: /Users/philipjohnson/github/uhmanoa/cs299fall21\n       Destination: /Users/philipjohnson/github/uhmanoa/cs299fall21/_site\n Incremental build: disabled. Enable with --incremental\n      Generating...\n          Conflict: The following destination is shared by multiple files.\n                    The written file may end up with unexpected contents.\n                    /Users/philipjohnson/github/uhmanoa/cs299fall21/_site/schedule/schedule-info.js\n                     - /Users/philipjohnson/github/uhmanoa/cs299fall21/schedule/schedule-info.js\n                     - /Users/philipjohnson/github/uhmanoa/cs299fall21/schedule/schedule-info.js\n\n                    done in 0.166 seconds.\n Auto-regeneration: enabled for '/Users/philipjohnson/github/uhmanoa/cs299fall21'\n    Server address: http://127.0.0.1:4000/cs299fall21/\n  Server running... press ctrl-c to stop.\n")),(0,i.kt)("p",null,'You can ignore the "Conflict" warning if it appears.'),(0,i.kt)("p",null,'Now look for the "Server address:" field on the second to last line. In this case, it\'s ',(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4000/cs299fall21/"),". Cut and paste the value from your terminal window into a browser, and the default site should appear:"),(0,i.kt)("h2",{id:"customize-your-content"},"Customize your content"),(0,i.kt)("p",null,"Now let's make some simple changes to your site. To do this, you'll need to bring up your text editor and point it at your repository directory.  Here is an example of using IntelliJ IDEA to create a \"project\" that enables manipulation of the repository directory and its contents:"),(0,i.kt)("h3",{id:"modify-theme--navbar"},"Modify theme & navbar"),(0,i.kt)("p",null,'To begin, let\'s change the theme of the site from spacelab to cerulean, and get rid of the "Prerequisites" navbar menu item (because your course will not include any prerequisite modules).  Change the morea_theme: to cerulean, and comment out the Prerequisites entry in morea_navbar_items:'),(0,i.kt)("p",null,"Now go back to your terminal window, press ",(0,i.kt)("inlineCode",{parentName:"p"},"control-c")," to terminate the Jekyll process, and ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," to restart. Refresh the browser window and it now should look like this:"),(0,i.kt)("p",null,"The Prerequisites menu item is gone, and the color theme is now blue."),(0,i.kt)("h3",{id:"unpublish-modules"},"Unpublish modules"),(0,i.kt)("p",null,"The example modules provide useful guidance on the syntax of Morea, but you don't want them to be part of your actual site. The easiest way to do that is to unpublish them. To unpublish the Introduction module, go into morea/modules/example-introduction/module-introduction.md, and change the published: field to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("p",null,"Jekyll may report some errors in the terminal window after you save this change. You can ignore them. Just type ",(0,i.kt)("inlineCode",{parentName:"p"},"control-c")," followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve")," as before to restart Jekyll. The first thing you'll notice is that the Introduction module no longer appears on the Modules page:"),(0,i.kt)("p",null,"More significantly, the outcomes, readings, experiences, and assessments associated with that module have also disappeared."),(0,i.kt)("p",null,"Now go ahead and unpublish the remaining three example modules in the same fashion. Restart Jekyll, and now there's no modules at all:"),(0,i.kt)("h3",{id:"create-a-new--module"},"Create a new  module"),(0,i.kt)("p",null,"Let's start creating our own course content. Do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make a copy of the example-introduction directory and call it introduction."),(0,i.kt)("li",{parentName:"ol"},"Once you've made the copy, delete the example-introduction directory."),(0,i.kt)("li",{parentName:"ol"},"In morea/introduction/module-introduction.md, edit the published: field from false to true."),(0,i.kt)("li",{parentName:"ol"},"Edit the title: field to your course number."),(0,i.kt)("li",{parentName:"ol"},"Edit the morea_id: field from example-introduction to introduction."),(0,i.kt)("li",{parentName:"ol"},"Edit the morea_icon_url: field from /example-introduction/ to /introduction/."),(0,i.kt)("li",{parentName:"ol"},"Delete all of the morea_readings: except for reading-syllabus."),(0,i.kt)("li",{parentName:"ol"},"Delete all of the morea_experiences except for experience-introduce-yourself"),(0,i.kt)("li",{parentName:"ol"},"Edit the text following the front matter to refer to your course name.")),(0,i.kt)("p",null,"When you're done, module-introduction.md might look similar to this:"),(0,i.kt)("p",null,"Restart Jekyll, and the modules page might look like this:"),(0,i.kt)("p",null,"And the readings page might look like this:"),(0,i.kt)("p",null,"Whoops! The reading still refers to ICS 199!  Go into the reading-syllabus.md file and edit the title: field (as well as any other content you want).  Now restart Jekyll, and the readings page might look like this:"),(0,i.kt)("h2",{id:"publish-your-changes"},"Publish your changes"),(0,i.kt)("p",null,"Of course, there's lots more that needs to be done to this site, but let's now see how to publish these local modifications.  Go to GitHub Desktop, which will look similar to this:"),(0,i.kt)("p",null,'It shows all of the files which have been changed recently. Next, in the text field labeled "Summary (required)", type in a brief message, such as "Start work on Introduction module".'),(0,i.kt)("p",null,'At that point, the "Commit to main" button should become active. Press it to commit your changes:'),(0,i.kt)("p",null,"Now your changes have gone from being local changes in your laptop file system to part of the history of the local repository."),(0,i.kt)("p",null,'The final step is to "push" these changes in your local repository to your repository on GitHub. To do that, press the "Push origin" button in the top right corner. After pressing it, GitHub Desktop will look like this:'),(0,i.kt)("p",null,'Morea is configured so that every time you push changes to GitHub, a GitHub Action is triggered to rebuild the site. In your browser, go back to your repository and click on "Actions". You should see something similar to this:'),(0,i.kt)("p",null,'This page indicates that the commit "Start work on Introduction module" triggered a build, which took 1 minute and 1 second. It successfully completed (as indicated by the green checkmark).'),(0,i.kt)("p",null,"Let's confirm that our local changes are published by retrieving the URL to our site:"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This might seem complicated the very first time you do it, but with a little bit of practice, you'll find that content development with Morea is pretty pleasant."),(0,i.kt)("p",null,"To review, there are a couple of one-time setup actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download your newly created site to your computer via GitHub Desktop."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle install")," in your directory to install libraries.")),(0,i.kt)("p",null,"Once that's done, develop your site by an iterative process of:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")," to build your site and make it visible locally."),(0,i.kt)("li",{parentName:"ol"},"Edit source files and directories to change your course content."),(0,i.kt)("li",{parentName:"ol"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"control-c")," followed by ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle exec jekyll serve")," to rebuild and redisplay your site.")),(0,i.kt)("p",null,"Finally, once you're ready to publish your changes, go into GitHub Desktop:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Commit your changes to your local repository."),(0,i.kt)("li",{parentName:"ol"},"Push your changes to your local repository to the GitHub version of your repository."),(0,i.kt)("li",{parentName:"ol"},"Check to see that your changes are public (usually takes about one minute).")),(0,i.kt)("h2",{id:"continuing-on"},"Continuing on"))}h.isMDXComponent=!0},2810:function(e,t,o){t.Z=o.p+"assets/images/desktop-clone-dialog-94fcf8366b8046701ad28e03ce880212.png"},1384:function(e,t,o){t.Z=o.p+"assets/images/local-repo-dir-b3f0c1b5fa744ce8ba03d196f6402c03.png"},3610:function(e,t,o){t.Z=o.p+"assets/images/portfolio-download-desktop-56cae31b113747aea9e938a8a44f0490.png"}}]);
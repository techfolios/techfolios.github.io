"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[1056],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(i),d=n,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return i?o.createElement(m,r(r({ref:t},p),{},{components:i})):o.createElement(m,r({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<a;u++)r[u]=i[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},873:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=i(7462),n=(i(7294),i(3905));const a={title:"Initialization"},r=void 0,l={unversionedId:"quick-start/initialization",id:"quick-start/initialization",title:"Initialization",description:"You only have to do the following initialization tasks when you are setting up your TechFolio for the very first time.",source:"@site/docs/quick-start/initialization.md",sourceDirName:"quick-start",slug:"/quick-start/initialization",permalink:"/docs/quick-start/initialization",draft:!1,tags:[],version:"current",frontMatter:{title:"Initialization"},sidebar:"publicSidebar",previous:{title:"Overview",permalink:"/docs/quick-start/overview"},next:{title:"Configure bio.json",permalink:"/docs/quick-start/configure-bio-json"}},s={},u=[{value:"Join GitHub",id:"join-github",level:2},{value:"Copy the template",id:"copy-the-template",level:2},{value:"Set workflow permissions to &quot;Read and write&quot;",id:"set-workflow-permissions-to-read-and-write",level:2},{value:"Select GitHub Actions for deployment",id:"select-github-actions-for-deployment",level:2},{value:"Configure <code>_config.yml</code>",id:"configure-_configyml",level:2},{value:"Monitor the build",id:"monitor-the-build",level:2},{value:"View your portfolio",id:"view-your-portfolio",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You only have to do the following initialization tasks when you are setting up your TechFolio for the very first time. "),(0,n.kt)("h2",{id:"join-github"},"Join GitHub"),(0,n.kt)("p",null,"To get started with TechFolios using this Quick Start, all you need is an account at GitHub. You don't need to download any software or even know how to use git. Everything you need to do for this Quick Start can be done in a browser."),(0,n.kt)("p",null,"If you haven't already, ",(0,n.kt)("a",{parentName:"p",href:"https://help.github.com/articles/signing-up-for-a-new-github-account"},"sign up for GitHub")," and ",(0,n.kt)("a",{parentName:"p",href:"https://help.github.com/articles/verifying-your-email-address/"},"verify your email address"),". Choose your username wisely, as that will become part of the URL to your portfolio site."),(0,n.kt)("admonition",{title:"Username recommendations",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'Keep your username professional and close to your real name: "the3Gr8est" might seem super clever to you right now, but will be awkward and embarrassing to you during an interview next year. Restrict yourself to lowercase characters, numbers, and hyphens to make it simple to remember. Uppercase adds unnecessary confusion.  Don\'t make your username location-specific: "philip-at-manoa" will be confusing if you move next year to San Francisco.')),(0,n.kt)("p",null,"If you decide your current GitHub username could use some improvement, it is very easy to ",(0,n.kt)("a",{parentName:"p",href:"https://help.github.com/articles/changing-your-github-username/"},"change your GitHub username")," to something more professional."),(0,n.kt)("p",null,"Before proceeding, ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/login"},"login")," to your GitHub account."),(0,n.kt)("h2",{id:"copy-the-template"},"Copy the template"),(0,n.kt)("p",null,"In this step, you'll make your personal copy of the TechFolio template."),(0,n.kt)("admonition",{title:"Your screens may look a little different",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"GitHub makes changes to their user interface quite frequently. We try to keep these screenshots up to date, but your browser might display something slightly different. Let us know if things look ",(0,n.kt)("strong",{parentName:"p"},"really")," different.")),(0,n.kt)("p",null,"First, go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/techfolios/template"},"https://github.com/techfolios/template"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(6800).Z,width:"2482",height:"1436"})),(0,n.kt)("p",null,"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Use this template"),' button, then select "Create a new repository". (If you don\'t see the "Use this template" button, make sure you are signed in to GitHub.) Select your account as the "Owner", and specify the repository name as your account name plus ".github.io". It should look similar to this:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(6665).Z,width:"2426",height:"1964"})),(0,n.kt)("p",null,"Then press the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create repository")," button. GitHub will make a new copy of the template in your account and display a page like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(636).Z,width:"2232",height:"1906"})),(0,n.kt)("admonition",{title:"Verify your repository name",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},'Make sure the repository name is correct. As you can see in this example, since my GitHub username is "philipmjohnson", the repository name must be "philipmjohnson.github.io". If the first part of the repository name does not match your GitHub username exactly, then you need to rename your repository right now to make it match. Click on the Settings link to rename your repo, it\'s easy to fix.')),(0,n.kt)("p",null,'Now let\'s fix the "About" section to link to your portfolio. Click on the gear icon next to the "About" label, which brings up a dialog box. Add "Professional Portfolio" as the description, add "',(0,n.kt)("a",{parentName:"p",href:"https://USERNAME.github.io%22"},'https://USERNAME.github.io"'),' (where USERNAME is your username) as the website, and (if you want) add "professional-portfolio" as a topic.  The result should look like this:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(6021).Z,width:"2372",height:"1762"})),(0,n.kt)("p",null,"After saving the changes, you'll have a convenient link to your professional portfolio on the home page for this repo."),(0,n.kt)("h2",{id:"set-workflow-permissions-to-read-and-write"},'Set workflow permissions to "Read and write"'),(0,n.kt)("p",null,"Now click on the Settings tab near the top of the window, then Actions and General in the left sidebar to display the Actions permissions page:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(5526).Z,width:"1200",height:"1384"})),(0,n.kt)("p",null,'Check that Workflow permissions is set to "Read and write permissions". If not, click the radio button and press "Save".'),(0,n.kt)("h2",{id:"select-github-actions-for-deployment"},"Select GitHub Actions for deployment"),(0,n.kt)("p",null,'Next, click on the Pages link in the left sidebar, and make sure the "GitHub Actions" is selected as the "Source" for Build and Deployment:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(597).Z,width:"2558",height:"2040"})),(0,n.kt)("h2",{id:"configure-_configyml"},"Configure ",(0,n.kt)("inlineCode",{parentName:"h2"},"_config.yml")),(0,n.kt)("p",null,"Now that your repository is set up, we can start editing the template files to make this professional portfolio your own."),(0,n.kt)("p",null,'Scroll down the repository home page until you find the file named "_config.yml", and click on it, which will bring up a page that looks like this:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(7193).Z,width:"2260",height:"1738"})),(0,n.kt)("p",null,"Click the pencil icon on the right hand side to edit the file:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2935).Z,width:"2260",height:"1738"})),(0,n.kt)("p",null,'The first section of the file, "Required Changes", contains the three lines you have to change.\nEdit ',(0,n.kt)("inlineCode",{parentName:"p"},"title:")," to specify your own name, edit ",(0,n.kt)("inlineCode",{parentName:"p"},"url:")," to specify your portfolio, and edit ",(0,n.kt)("inlineCode",{parentName:"p"},"baseurl:")," to be the empty string. When you're done editing, that section of _config.yml should look similar to this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(7486).Z,width:"2260",height:"1738"})),(0,n.kt)("p",null,'Click "Commit changes" to save these changes. (It will pop up a dialog box, just click "Commit Changes" again to confirm.)'),(0,n.kt)("h2",{id:"monitor-the-build"},"Monitor the build"),(0,n.kt)("p",null,"Every time you commit a change to your portfolio, GitHub will attempt to build and deploy your revised portfolio. It does this through a technology called ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions"),".  In fact, GitHub is trying to build a new version of your portfolio right now.  Let's watch."),(0,n.kt)("p",null,'First, click on the "Actions" label on the home page of your repository.  That will take you to a page that looks like this:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2160).Z,width:"2426",height:"1964"})),(0,n.kt)("p",null,'This page indicates that two GitHub Actions (i.e. "workflows") named "pages-build-deployment" have previously run and completed successfully (indicated by the green checkmarks).  There is a workflow called "Jekyll Deploy" that is running right now (indicated by the yellow dot).  GitHub labels this workflow execution instance using the commit message associated with the change to the repository that triggered the Action. In this case, it was "Update _config.yml".'),(0,n.kt)("admonition",{title:"Your action name may differ",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"GitHub occasionally changes the name of their build actions. ")),(0,n.kt)("p",null,'You can watch the build in more detail by clicking on the "Update _config.yml" line, which takes you to a page like this:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4646).Z,width:"2426",height:"1964"})),(0,n.kt)("p",null,'Clicking on the "build_and_deploy" label takes you to a page that shows the actual progress through the build:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(747).Z,width:"2426",height:"1964"})),(0,n.kt)("p",null,"Finally, you can click on the arrow next to any build step and see what happened during it:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(8395).Z,width:"2232",height:"1906"})),(0,n.kt)("p",null,"After a few minutes, the Jekyll Deploy workflow will complete and the Actions page will look like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(7434).Z,width:"2426",height:"1856"})),(0,n.kt)("p",null,'Notice that there is a green checkmark beside the "Update _config.yml" workflow run, indicating that it has completed successfully.'),(0,n.kt)("admonition",{title:"Why monitor the build?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There are two reasons it is useful to know how to monitor the build:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"By monitoring the build, you'll know when your updated portfolio is ready to be viewed."),(0,n.kt)("li",{parentName:"ol"},"Monitoring the build lets you know if any errors occurred during the build.")),(0,n.kt)("p",{parentName:"admonition"},"Also, please note that the very first time you try to build your portfolio, it takes about five minutes, which is a long time!  Don't worry, though: after this very first build, GitHub will cache the build artifacts and your future builds should take less than a minute to complete.")),(0,n.kt)("admonition",{title:"Oh no! My very first build failed!",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Unfortunately, some users have reported that their first build failed with an error like this:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"error: RPC failed; curl 55 Failed sending HTTP2 data\nfatal: the remote end hung up unexpectedly\nfatal: the remote end hung up unexpectedly\n")),(0,n.kt)("p",{parentName:"admonition"},"This is not your fault (or ours): it means that there was a network connection problem on GitHub's side that resulted in a timeout.  In our experience, all you have to do is re-trigger the build one more time. (You can do this by editing the ",(0,n.kt)("inlineCode",{parentName:"p"},"_config.yml")," file and adding a space or newline, then committing the change). "),(0,n.kt)("p",{parentName:"admonition"},"The good news is that the files retrieved over the network for the first build are cached for the future, so it is unlikely you'll run into this particular error again upon subsequent builds of your portfolio.")),(0,n.kt)("h2",{id:"view-your-portfolio"},"View your portfolio"),(0,n.kt)("p",null,"Click the link to see your brand new professional portfolio:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9285).Z,width:"2232",height:"1906"})),(0,n.kt)("p",null,'Congratulations! The URL "',(0,n.kt)("a",{parentName:"p",href:"https://philipmjohnson.github.io%22"},'https://philipmjohnson.github.io"')," now shows the portfolio for...  Molly Maluhia?"))}h.isMDXComponent=!0},6021:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/about-dialog-4c316d9b8931182cbd3c4f80b9fc900b.png"},5526:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/action-permissions-257697e4b90f46127e966cf28b037d6a.png"},2160:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/actions-page-26102115676e6ca08648f369c15abce6.png"},4646:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/actions-page2-61b4f6c4e261f76bdc2a8e6e9902d3c8.png"},747:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/actions-page3-ad0c8102a1bd05f99f2c15492a4af758.png"},8395:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/actions-page4-a3aa301956c2fb33989f7dede4f695f4.png"},7434:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/actions-page6-0b8c0c3c795e35cdfe6f152c384cff65.png"},2935:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/config-yml-edit1-323604dcc42fc4c5ffa9232c8aaa1813.png"},7486:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/config-yml-edit2-58b8764ed69327452ae38ccaf01e9fc3.png"},7193:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/config-yml-ce50af5f02e3bbb47f0d9a8426b1f466.png"},6665:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/create-repository-8a65531ac29fb8efecef9dbeb4f9a9f5.png"},9285:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/initial-portfolio-9580a327cbdc7f3ef3da26eed9351c07.png"},597:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/pages-build-and-deployment-14a0cec5ad6d07ebe21137f4b2583097.png"},636:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/template-copy-173308700e9e58287b0f03ec69c836ce.png"},6800:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/template-page-9371f1ec1dc932b87725b6c27b7b59a5.png"}}]);
"use strict";(self.webpackChunktechfolios=self.webpackChunktechfolios||[]).push([[2968],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(9943),s=["components"],u={title:"Configure resume"},c=void 0,l={unversionedId:"quick-start/configure-resume",id:"quick-start/configure-resume",title:"Configure resume",description:'We\'re almost done with the Quick Start.  The only thing left to fix is the resume page.  Right now, the top part of the resume page is OK, but the "Skills", "Education", "Work", "Activities", and "Awards" sections still contain the content from the template:',source:"@site/docs/quick-start/configure-resume.md",sourceDirName:"quick-start",slug:"/quick-start/configure-resume",permalink:"/docs/quick-start/configure-resume",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure resume"},sidebar:"publicSidebar",previous:{title:"Configure essays",permalink:"/docs/quick-start/configure-essays"},next:{title:"Change theme",permalink:"/docs/quick-start/change-theme"}},p={},f=[],d={toc:f};function h(e){var t=e.components,u=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'We\'re almost done with the Quick Start.  The only thing left to fix is the resume page.  Right now, the top part of the resume page is OK, but the "Skills", "Education", "Work", "Activities", and "Awards" sections still contain the content from the template:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1007).Z,width:"2296",height:"2766"})),(0,i.kt)("p",null,"To change the contents of the resume page, you need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"_data/bio.json"),' file.  Find that file in the browser, click the pencil icon to edit it, and then make sure "Soft wrap" is set. It will look like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4247).Z,width:"2364",height:"2766"})),(0,i.kt)("p",null,'The "basics" and "interests" sections of this JSON file should be OK. You need to edit the "skills", "education", "work", "volunteer", and "awards" sections.'),(0,i.kt)("p",null,"Here are some things to keep in mind as you make your edits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The "Volunteer" section in bio.json will appear as "Activities" in the resume page.'),(0,i.kt)("li",{parentName:"ul"},"Remember that the entries inside the square brackets must be separated by commas, except for the last entry, which should not have a comma."),(0,i.kt)("li",{parentName:"ul"},"The square brackets indicate that you can have multiple entries. So, if you have more than one entry for education, you can add it. Just make sure all the entries, except the last one, have a comma after them."),(0,i.kt)("li",{parentName:"ul"},'If you don\'t (for example) have any awards, then omit that entire section from the file and it won\'t show up. (Note that the "basics" and "interests" sections are required.)'),(0,i.kt)("li",{parentName:"ul"},"If the build fails, then use an online JSON checker to figure out where you made a syntax error.")),(0,i.kt)("p",null,"Here's what my resume page looks like after editing the bio.json file:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3558).Z,width:"2374",height:"2742"})),(0,i.kt)("p",null,"Note that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are now two Education entries."),(0,i.kt)("li",{parentName:"ul"},"There's only one Work entry"),(0,i.kt)("li",{parentName:"ul"},"There are no Awards.")),(0,i.kt)("p",null,"Here is the bio.json file used to create this page so you can see how I did it:"),(0,i.kt)(a.Z,{id:"06912b9e8bca5eea6e40d6473cfa3525",mdxType:"Gist"}),(0,i.kt)("p",null,"So, go ahead and edit your bio.json file to reflect your actual Skills, Education, Work, Activities, and Awards. I suggest that you edit a single section at a time, then commit your changes and watch the Actions page to see if your portfolio builds and deploys successfully. Deploying after editing each section takes a little longer, but the advantage is that if you make a mistake, it will be easier to figure out where in the file the problem is."),(0,i.kt)("p",null,"When you've finished updating your bio.json, sit back and enjoy. You've now finished the first draft of your professional portfolio!"))}h.isMDXComponent=!0},9943:function(e,t,n){var r=n(7294);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var i=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var a=i.prototype;return a.componentDidMount=function(){this._updateIframeContent()},a.componentDidUpdate=function(e,t){this._updateIframeContent()},a._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},a._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,r=this.iframeNode,o=r.document;r.contentDocument?o=r.contentDocument:r.contentWindow&&(o=r.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},a.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},i}(r.PureComponent);t.Z=i},1007:function(e,t,n){t.Z=n.p+"assets/images/portfolio-original-resume-0540a69ad7143a87bcd2eee130e3ea71.png"},4247:function(e,t,n){t.Z=n.p+"assets/images/portfolio-resume-edit-cc78e5a86bfc6d33e22f4bb06f799185.png"},3558:function(e,t,n){t.Z=n.p+"assets/images/updated-resume-39ddad9ab1fee5473fc7ac11349ef3d1.png"}}]);
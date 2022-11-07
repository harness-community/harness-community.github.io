"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={slug:"delegate-minikube-install",title:"Installing Harness Kubernetes(K8s) delegate via MiniKube",authors:["krishikasingh"],tags:["continuous-integration","continuous-delivery","connectors","harness","cme"]},l=void 0,s={permalink:"/blog/delegate-minikube-install",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-09-install-delegate-minikube/installing_kubernetes_delegate.md",source:"@site/blog/2022-10-09-install-delegate-minikube/installing_kubernetes_delegate.md",title:"Installing Harness Kubernetes(K8s) delegate via MiniKube",description:"Before we begin :",date:"2022-10-09T00:00:00.000Z",formattedDate:"October 9, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"continuous-delivery",permalink:"/blog/tags/continuous-delivery"},{label:"connectors",permalink:"/blog/tags/connectors"},{label:"harness",permalink:"/blog/tags/harness"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:2.06,hasTruncateMarker:!1,authors:[{name:"Krishika Singh",title:"Community Engineer @ Harness",url:"https://github.com/krishi0408",imageURL:"https://github.com/krishi0408.png",key:"krishikasingh"}],frontMatter:{slug:"delegate-minikube-install",title:"Installing Harness Kubernetes(K8s) delegate via MiniKube",authors:["krishikasingh"],tags:["continuous-integration","continuous-delivery","connectors","harness","cme"]},prevItem:{title:"Beginners Guide to Git Connectors",permalink:"/blog/git-connector"},nextItem:{title:"Getting started with the Harness Platform",permalink:"/blog/harness-getting-started"}},o={authorsImageUrls:[void 0]},u=[{value:"Before we begin :",id:"before-we-begin-",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Harness Delegate",id:"installing-harness-delegate",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"before-we-begin-"},"Before we begin :"),(0,r.kt)("p",null,"Let us understand what do we mean by delegates and why is it needed "),(0,r.kt)("p",null,"A Harness delegate is a software that you install in your deployment target environment such as local network ,VPC,or cluster and run as a service.The delegate performs all operations including deployment and integration.\nThe delegate connects all your artifacts,infrastructure,collaboration,verification and other providers with the Harness Manager."),(0,r.kt)("p",null,"Below we have discussed the detailed explanation of how we can install Kubernetes(K8s) delegate."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hypervisor technology (VirtualBox, VMWare, etc) is a mandate pre-requisite for Minikube and we have to choose the right one based on the platform we are on."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/#what-youll-need"},"Prequisites for minikube"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Installation section in the Minikube Getting Started documentation is well crafted and has steps for all Linux, Mac & Windows along with the architecture and installer type details and the user just has to choose the required details, get the commands and run them!"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Installing Minikube"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minikube will download the required kubectl as part of the installation and configures it."))),(0,r.kt)("h2",{id:"installing-harness-delegate"},"Installing Harness Delegate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to  ",(0,r.kt)("a",{parentName:"p",href:"https://app.harness.io"},"Harness"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to Builds and under Project setup click delegates and then click on new delegates\n",(0,r.kt)("img",{alt:"delegate",src:n(5032).Z,width:"546",height:"1212"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on kubernetes"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"kubernetes",src:n(1016).Z,width:"2520",height:"1598"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Name")," your delegate and select the ",(0,r.kt)("strong",{parentName:"p"},"size of delegate")," and also select delegate permissions.\nPlease follow the correct naming convention for naming a delegate."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It will show error when you insert any special characters except \u2018-\u2019 and make  sure name should not start or end with a number\n",(0,r.kt)("img",{alt:"delegate",src:n(4717).Z,width:"2520",height:"1628"}))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE:These sizing requirements are for the Delegate only.Your cluster will require more memory for Kubernetes, the operating system, and other services,preferably one should have double the memory and node present in the cluster than that of required for the delegate for smooth functioning.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the yaml file\n",(0,r.kt)("img",{alt:"yaml",src:n(2557).Z,width:"2536",height:"1624"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After clicking on continue open the new terminal and open the directory where you have downloaded the yaml file  and then run the following command:"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply -f harness-delegate.yml")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"download",src:n(6264).Z,width:"1562",height:"914"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It may take few minutes for verification,after successful installation of delegate following message will be displayed:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"download2",src:n(9723).Z,width:"2656",height:"1602"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can go to the delegate section in the project setup and see the delegate you have installed:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delegate option",src:n(5111).Z,width:"3512",height:"794"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can also delete your delegate when no longer in use  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Our Kubernetes Delegates are immutable , that is you can only create and delete the delegate but you can\u2019t make any changes to them.")))}p.isMDXComponent=!0},5111:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/10-bbb497d1205bd8d218372b37076185b8.png"},5032:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-3d3ab345f80bfaaa7d0868a7ae0c8426.png"},1016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-fc22d84375eaafdb64ecaa549ed76e29.png"},4717:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-2ab53979d9fa452d721843836c6bbcb9.png"},2557:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/7-f6c7dc52fedc72a554761b28156a1024.png"},6264:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/8-051e887d0f26a1810ef908356d226731.png"},9723:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/9-74a1daad9b9b29a72a40aa64ea147698.png"}}]);
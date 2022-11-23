"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[2995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||s;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={slug:"maven-testing-in-harness-ci",title:"Using Harness CI for Maven Testing",authors:["debabrata"],tags:["continuous-integration","harness","maven","cme"]},i=void 0,o={permalink:"/blog/maven-testing-in-harness-ci",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-11-11-maven-testing-in-harness/maven-testing-in-harness.md",source:"@site/blog/2022-11-11-maven-testing-in-harness/maven-testing-in-harness.md",title:"Using Harness CI for Maven Testing",description:"Introduction",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"harness",permalink:"/blog/tags/harness"},{label:"maven",permalink:"/blog/tags/maven"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:2.65,hasTruncateMarker:!1,authors:[{name:"Debabrata Panigrahi",title:"Software Engineer",url:"https://github.com/Debanitrkl",imageURL:"https://github.com/Debanitrkl.png",key:"debabrata"}],frontMatter:{slug:"maven-testing-in-harness-ci",title:"Using Harness CI for Maven Testing",authors:["debabrata"],tags:["continuous-integration","harness","maven","cme"]},nextItem:{title:"Harness Cloud Cost Management - an active cloud cost solution",permalink:"/blog/ccm-active-cloud-cost-solution"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:3},{value:"Pre-Requisite:",id:"pre-requisite",level:4},{value:"Step-1:",id:"step-1",level:4},{value:"Step-2:",id:"step-2",level:4},{value:"Step-3:",id:"step-3",level:4},{value:"Step-4:",id:"step-4",level:4},{value:"Step-5:",id:"step-5",level:4},{value:"Step-6:",id:"step-6",level:4},{value:"What\u2019s Next?",id:"whats-next",level:4}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we will go through a step-by-step example, on how to use the Harness CI for Maven testing. "),(0,r.kt)("h4",{id:"pre-requisite"},"Pre-Requisite:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/u9bsd77g5a-docker-registry-connector-settings-reference#docker-connector-settings-reference"},"Docker Connector")," to fetch public Docker images of ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rvancea/maven-chrome-jdk8"},"maven chrome jdk8")),(0,r.kt)("p",null,"Let\u2019s now deepdive into the step-by-step tutorial, wherein we will now use the Harness SaaS platform to set-up the maven testing:"),(0,r.kt)("h4",{id:"step-1"},"Step-1:"),(0,r.kt)("p",null,"Start with the ",(0,r.kt)("strong",{parentName:"p"},"build module"),", and give it a name test, make sure to keep the clone codebase slider \u201coff\u201d as it is not required in this example."),(0,r.kt)("h4",{id:"step-2"},"Step-2:"),(0,r.kt)("p",null,"Now let\u2019s move to the next part of the pipeline, which is to select the infrastructure and select ",(0,r.kt)("strong",{parentName:"p"},"Harness Hosted Builds")," under the same."),(0,r.kt)("h4",{id:"step-3"},"Step-3:"),(0,r.kt)("p",null,"Moving on to the execution step, let\u2019s add a ",(0,r.kt)("strong",{parentName:"p"},"Run Step")," and name it as \u201ctestrun\u201d and under the container registry add the already created Docker Connector, and under the image add the \u201crvancea/maven-chrome-jdk8\u201d. Now let\u2019s add a shell command to run ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn clean compile -DsuiteXmlFile=Batch1 test"),"  and apply the changes. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"testrun",src:n(2999).Z,width:"3456",height:"1936"})),(0,r.kt)("h4",{id:"step-4"},"Step-4:"),(0,r.kt)("p",null,"Now, let\u2019s add another ",(0,r.kt)("strong",{parentName:"p"},"Run Step")," similar to the above and name it as reports, just here contrary to the above step the command changes to ",(0,r.kt)("inlineCode",{parentName:"p"},'find . -name "*.xml"'),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"filesgen",src:n(3911).Z,width:"3282",height:"1176"})),(0,r.kt)("h4",{id:"step-5"},"Step-5:"),(0,r.kt)("p",null,"It\u2019s time to add the failure strategy now as a ",(0,r.kt)("strong",{parentName:"p"},"Run Step"),", with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'actualFailedTestsStatus=<+execution.steps.testrun.status>\necho $actualFailedTestsStatus\nif [ "$actualFailedTestsStatus" = "IGNORE_FAILED" ]\nthen\n echo "tests have failed"\n exit 1\nelse\n echo "Failure reruns have passed"\n exit 0\nfi\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"faliurestrat",src:n(6688).Z,width:"3450",height:"1618"})),(0,r.kt)("h4",{id:"step-6"},"Step-6:"),(0,r.kt)("p",null,"Now, since the pipeline is complete, let\u2019s save and run the same and the results looks like the following on the console logs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"result",src:n(3921).Z,width:"1782",height:"438"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reports",src:n(7038).Z,width:"3456",height:"1372"})),(0,r.kt)("p",null,"Once the run is successful, the above list of files are generated and can be further stored and processed as the test reports. "),(0,r.kt)("p",null,"For, further reference following is the pipeline yaml of the above mentioned example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  name: yaml\n  identifier: yaml\n  projectIdentifier: HarnessDemo1\n  orgIdentifier: default\n  tags: {}\n  stages:\n    - stage:\n        name: test\n        identifier: test\n        type: CI\n        spec:\n          cloneCodebase: true\n          infrastructure:\n            type: KubernetesHosted\n            spec:\n              identifier: k8s-hosted-infra\n          execution:\n            steps:\n              - step:\n                  type: Run\n                  name: testrun\n                  identifier: testrun\n                  spec:\n                    connectorRef: account.harnessImage\n                    image: rvancea/maven-chrome-jdk8\n                    shell: Sh\n                    command: |+\n                      mvn clean compile -DsuiteXmlFile=Batch1 test\n\n                    privileged: false\n                    reports:\n                      type: JUnit\n                      spec:\n                        paths:\n                          - target/surefire-reports/junitreports/*.xml\n                  failureStrategies:\n                    - onFailure:\n                        errors:\n                          - AllErrors\n                        action:\n                          type: Ignore\n              - step:\n                  type: Run\n                  name: reports\n                  identifier: failstrat\n                  spec:\n                    connectorRef: account.harnessImage\n                    image: rvancea/maven-chrome-jdk8\n                    shell: Sh\n                    command: find . -name "*.xml"\n                  when:\n                    stageStatus: All\n                  failureStrategies: []\n              - step:\n                  type: Run\n                  name: failstrategy\n                  identifier: step3\n                  spec:\n                    connectorRef: account.harnessImage\n                    image: rvancea/maven-chrome-jdk8\n                    shell: Sh\n                    command: |-\n                      actualFailedTestsStatus=<+execution.steps.testrun.status>\n                      echo $actualFailedTestsStatus\n                      if [ "$actualFailedTestsStatus" = "IGNORE_FAILED" ]\n                      then\n                        echo "tests have failed"\n                        exit 1\n                      else \n                        echo "Failure reruns have passed"\n                        exit 0\n                      fi \n                  when:\n                    stageStatus: All\n                  failureStrategies: []\n  properties:\n    ci:\n      codebase:\n        connectorRef: harnessRud\n        build: <+input> \n')),(0,r.kt)("h4",{id:"whats-next"},"What\u2019s Next?"),(0,r.kt)("p",null,"The above pipeline and use case was the requirement of one our community user and was built according to their requirements by the community engineering team so, feel free to ask questions at ",(0,r.kt)("a",{parentName:"p",href:"https://community.harness.io/c/harness/7"},"community.harness.io")," or  ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw"},"join community slack")," to chat with our engineers in product-specific channels like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/share/enQtMzkwNjIzMDIxMDEwMy1mYjM2M2FlY2Y3ZWM5ZTRiMGM0MzI1ZTA2YzIxNDYzYjFiODVjZjZlZmE5ZTRmZmZlZjEzYWY1YzU4ODdmNmVj"},"#continuous-delivery"),"  Get support regarding the CD Module of Harness."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/share/enQtMzkyMzI1ODcxNzAxMi05MTI2M2VlNmVhZDY4NTlkM2JiODgxNWQ5NzY4NGU4MjE0MDQ1MDhlZTM0ZjA1ZjAyNjc3N2E4YmY2ZTc2YWY0"},"#continuous-integration")," Get support regarding the CI Module of Harness.")))}p.isMDXComponent=!0},6688:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/failurestrat-035bb8d12561bbd5dd36e9af91b132bf.png"},3911:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filesgen-6787d65bf0d69cb44c4c40e6014b064d.png"},7038:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reports-bf785b61040aacde4131e20dcb20b49b.png"},3921:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-a7ba9e44701bf919eb1781eef869bf56.png"},2999:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/testrun-dd7560c6c6ddb06d3ea8783fe33bbfb4.png"}}]);
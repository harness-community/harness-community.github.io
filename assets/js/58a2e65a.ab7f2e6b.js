"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[7400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={slug:"configure-run-step",title:"Configure Run Step in Harness CI",authors:["dhrubajyoti"],tags:["continuous-integration","harness-ci","troubleshooting-guide","cme"]},o=void 0,s={permalink:"/blog/configure-run-step",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-10-20-run-step/run-step.md",source:"@site/blog/2022-10-20-run-step/run-step.md",title:"Configure Run Step in Harness CI",description:"Introduction",date:"2022-10-20T00:00:00.000Z",formattedDate:"October 20, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"harness-ci",permalink:"/blog/tags/harness-ci"},{label:"troubleshooting-guide",permalink:"/blog/tags/troubleshooting-guide"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:5.485,hasTruncateMarker:!1,authors:[{name:"Dhrubajyoti Chakraborty",title:"Community Engineering Intern",url:"https://github.com/codewdhruv",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQFvCMGToV9LMQ/profile-displayphoto-shrink_800_800/0/1631719718974?e=1670457600&v=beta&t=vWbeVBiAvAYLTdxYcAnIqzuvveJ8IWleCDV0A5Fdbp0",key:"dhrubajyoti"}],frontMatter:{slug:"configure-run-step",title:"Configure Run Step in Harness CI",authors:["dhrubajyoti"],tags:["continuous-integration","harness-ci","troubleshooting-guide","cme"]},prevItem:{title:"Provision AWS Infrastructure for Delegates",permalink:"/blog/aws-infra-for-delegates"},nextItem:{title:"Provision Azure Infrastructure for Delegates",permalink:"/blog/azure-infra-for-delegates"}},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Before We Begin",id:"before-we-begin",level:3},{value:"Configuration Parameters in a Run Step",id:"configuration-parameters-in-a-run-step",level:3},{value:"Name",id:"name",level:3},{value:"ID",id:"id",level:3},{value:"Description",id:"description",level:3},{value:"Container Registry",id:"container-registry",level:3},{value:"Image",id:"image",level:3},{value:"Namespaces (C#)",id:"namespaces-c",level:3},{value:"Build Tool",id:"build-tool",level:3},{value:"Packages",id:"packages",level:3},{value:"Run Only Selected Tests",id:"run-only-selected-tests",level:3},{value:"Test Annotations",id:"test-annotations",level:3},{value:"Pre-Command &amp; Post-Command",id:"pre-command--post-command",level:3},{value:"Report Paths",id:"report-paths",level:3},{value:"Environment Variables &amp; Output Variables",id:"environment-variables--output-variables",level:3},{value:"Image Pull Policy",id:"image-pull-policy",level:3},{value:"Container Resources",id:"container-resources",level:3},{value:"Timeout",id:"timeout",level:3},{value:"NOT ABLE TO TROUBLESHOOT THE ENCOUNTERED ERROR",id:"not-able-to-troubleshoot-the-encountered-error",level:3}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This beginner guide aims to help learners learn the configuration management for run steps settings in Harness CI. We will learn about different settings and permissions for the Harness CI Run Tests step which executes one or more tests on a container image."),(0,r.kt)("h3",{id:"before-we-begin"},"Before We Begin"),(0,r.kt)("p",null,"Are you confused with terminologies like Container Resources, Image Pull Policy etc while creating & configuring a run step for your CI pipeline? In this article we will discuss a few such terminologies on the Harness CI platform and how you can configure them to set up your run step in the pipeline settings according to your requirements."),(0,r.kt)("h3",{id:"configuration-parameters-in-a-run-step"},"Configuration Parameters in a Run Step"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name"),(0,r.kt)("li",{parentName:"ul"},"ID"),(0,r.kt)("li",{parentName:"ul"},"Description"),(0,r.kt)("li",{parentName:"ul"},"Container Registry"),(0,r.kt)("li",{parentName:"ul"},"Image"),(0,r.kt)("li",{parentName:"ul"},"Namespaces"),(0,r.kt)("li",{parentName:"ul"},"Build Tool"),(0,r.kt)("li",{parentName:"ul"},"Language"),(0,r.kt)("li",{parentName:"ul"},"Packages"),(0,r.kt)("li",{parentName:"ul"},"Run Only Selected Tests"),(0,r.kt)("li",{parentName:"ul"},"Test Annotations"),(0,r.kt)("li",{parentName:"ul"},"Pre-Command & Post-Command"),(0,r.kt)("li",{parentName:"ul"},"Report Paths & Environment Variables"),(0,r.kt)("li",{parentName:"ul"},"Output variables"),(0,r.kt)("li",{parentName:"ul"},"Image Pull Policy"),(0,r.kt)("li",{parentName:"ul"},"Container Resources")),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"The unique name for the run step. Each run step must have a unique name & it is recommended to use a name which describes the step."),(0,r.kt)("h3",{id:"id"},"ID"),(0,r.kt)("p",null,"Most of the Harness entities and resources include a unique Id also referred as entity Identifier that's not modifiable once the entity is created. It provides a constant way to refer to an entity and avoid issues that can arise when a name is changed."),(0,r.kt)("p",null,"Initially Harness automatically generates an identifier for an entity which can be modified when you are creating the entity but not after the entity is saved."),(0,r.kt)("p",null,"Even if you rename the entity the Identifier remains the same. The automatically generated Identifier is based on the entity name and follows the identifier naming conventions.\nIf an entity name cannot be used because it's already occupied by another entity Harness automatically adds a prefix in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-2"),", etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ngdocs.harness.io/article/li0my8tcz3-entity-identifier-reference"},"Check out the documentation to know more about Entity Identifier Reference"))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This is generally a text string describing the run step and it\u2019s working."),(0,r.kt)("h3",{id:"container-registry"},"Container Registry"),(0,r.kt)("p",null,"Container Registry refers to the Harness Connector for a container registry. This is the container registry for the image Harness will use run build commands on such as DockerHub."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.harness.io/article/my8n93rxnw-connect-to-harness-container-image-registry-using-docker-connector"},"Check out the documentation to know more about Harness Container Image Registry"))),(0,r.kt)("h3",{id:"image"},"Image"),(0,r.kt)("p",null,"Image is the name of the Docker image to use when running commands.For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"alpine-node"),"\nThis image name should include the tag and will by default refer to the latest tag if not specified. You can use any docker image from any docker registry including docker images from private registries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Different container registries has different name formats:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker Registry: enter the name of the artifact you want to deploy, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"library/tomcat"),". Wildcards are not supported."),(0,r.kt)("li",{parentName:"ul"},"GCR: enter the name of the artifact you want to deploy. Images in repos need to reference a path starting with the project ID that the artifact is in, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"us.gcr.io/playground-243019/quickstart-image:latest"),"."),(0,r.kt)("li",{parentName:"ul"},"ECR: enter the name of the artifact you want to deploy. Images in repos need to reference a path, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},"40000005317.dkr.ecr.us-east-1.amazonaws.com/todolist:0.2"),".")),(0,r.kt)("h3",{id:"namespaces-c"},"Namespaces (C#)"),(0,r.kt)("p",null,"A comma-separated list of the Namespace prefixes that you want to test."),(0,r.kt)("h3",{id:"build-tool"},"Build Tool"),(0,r.kt)("p",null,"This is where you select the build automation tool & the source code language to build, such as Java or C#."),(0,r.kt)("h3",{id:"packages"},"Packages"),(0,r.kt)("p",null,"This are the list of source code package prefixes separated by a comma. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"com.company."),", ",(0,r.kt)("inlineCode",{parentName:"p"},"io.company.migrations")),(0,r.kt)("h3",{id:"run-only-selected-tests"},"Run Only Selected Tests"),(0,r.kt)("p",null,"If this option is unchecked, Test Intelligence is disabled and all tests will run."),(0,r.kt)("h3",{id:"test-annotations"},"Test Annotations"),(0,r.kt)("p",null,"This is where you enter the list of test annotations used in unit testing separated by commas.\nAny method annotated with this will be treated as a test method. The defaults are: ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.Test"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"org.junit.jupiter.api.Test"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"org.testng.annotations.Test")),(0,r.kt)("h3",{id:"pre-command--post-command"},"Pre-Command & Post-Command"),(0,r.kt)("p",null,"In pre-command you enter the commands for setting up the environment before running the tests. For example, printenv prints all or part of the environment."),(0,r.kt)("p",null,"In post-command you enter the commands used for cleaning up the environment after running the tests. For example, sleep ",(0,r.kt)("inlineCode",{parentName:"p"},"600")," suspends the process for 600 seconds."),(0,r.kt)("h3",{id:"report-paths"},"Report Paths"),(0,r.kt)("p",null,"This refers to the path to the file(s) that store results in the JUnit XML format. You can enter multiple paths. Glob is supported."),(0,r.kt)("h3",{id:"environment-variables--output-variables"},"Environment Variables & Output Variables"),(0,r.kt)("p",null,"Environment variables refers to the variables passed to the container as environment variables and used in the Commands."),(0,r.kt)("p",null,"Output variables expose Environment Variables for use by other steps/stages of the Pipeline. You can reference the output variable of a step using the step ID and the name of the variable in Output Variables."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"output-var",src:n(7180).Z,width:"564",height:"139"})),(0,r.kt)("h3",{id:"image-pull-policy"},"Image Pull Policy"),(0,r.kt)("p",null,"This is where you make the choice to set the pull policy for the image."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Always:")," The kubelet queries the container image registry to resolve the name to an image digest every time the kubelet launches a container. If the kubelet encounters an exact digest cached locally, it uses its cached image; otherwise, the kubelet downloads (pulls) the image with the resolved digest, and uses that image to launch the container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If Not Present:")," The image is pulled only if it isn't already present locally.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Never:")," The kubelet assumes that the image exists locally and doesn't try to pull the image."))),(0,r.kt)("h3",{id:"container-resources"},"Container Resources"),(0,r.kt)("p",null,"The container resources configuration specifies the maximum resources used by the container at runtime."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Limit Memory"),"\nMaximum memory that the container can use. You can express memory as a plain integer or as a fixed-point number using the suffixes G or M. You can also use the power-of-two equivalents Gi and Mi."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Limit CPU"),"\nThe maximum number of cores that the container can use. CPU limits are measured in cpu units. Fractional requests are allowed: you can specify one hundred millicpu as 0.1 or 100m. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes"},"See Resource units in Kubernetes"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is not applicable in case you have opted for Hosted by Harness in your Infrastructure settings of the step.")),(0,r.kt)("h3",{id:"timeout"},"Timeout"),(0,r.kt)("p",null,"This specifies the timeframe until which the step shall execute. Once the timeout is reached the step fails and the Pipeline execution continues."),(0,r.kt)("h3",{id:"not-able-to-troubleshoot-the-encountered-error"},"NOT ABLE TO TROUBLESHOOT THE ENCOUNTERED ERROR"),(0,r.kt)("p",null,"In case the user is unable to troubleshoot the application error or pipeline execution failures the user can log/submit a ticket to Harness Support. To log a ticket follow the process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Help")," button in the Harness Manager"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Submit a Ticket")," or ",(0,r.kt)("strong",{parentName:"li"},"Send Screenshot")),(0,r.kt)("li",{parentName:"ol"},"Fill out the pop up form and click ",(0,r.kt)("strong",{parentName:"li"},"Submit Ticket")," or ",(0,r.kt)("strong",{parentName:"li"},"Send Feedback"))))}c.isMDXComponent=!0},7180:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);
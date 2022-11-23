"use strict";(self.webpackChunkharness_community=self.webpackChunkharness_community||[]).push([[1396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={slug:"python-yaml-onboarding",title:"Python Yaml Onboarding for beginners",authors:["krishikasingh"],tags:["continuous-integration","yaml","python","cme"]},o=void 0,l={permalink:"/blog/python-yaml-onboarding",editUrl:"https://github.com/harness-community/harness-community.github.io/tree/main/website/blog/2022-11-09-YAML_ONBOARDING-PYTHON/yaml_onboarding_python.md",source:"@site/blog/2022-11-09-YAML_ONBOARDING-PYTHON/yaml_onboarding_python.md",title:"Python Yaml Onboarding for beginners",description:"In this blog ,we are going to talk about how easily you can set up your pipeline using YAML.",date:"2022-11-09T00:00:00.000Z",formattedDate:"November 9, 2022",tags:[{label:"continuous-integration",permalink:"/blog/tags/continuous-integration"},{label:"yaml",permalink:"/blog/tags/yaml"},{label:"python",permalink:"/blog/tags/python"},{label:"cme",permalink:"/blog/tags/cme"}],readingTime:5.725,hasTruncateMarker:!1,authors:[{name:"Krishika Singh",title:"Community Engineer @ Harness",url:"https://github.com/krishi0408",imageURL:"https://github.com/krishi0408.png",key:"krishikasingh"}],frontMatter:{slug:"python-yaml-onboarding",title:"Python Yaml Onboarding for beginners",authors:["krishikasingh"],tags:["continuous-integration","yaml","python","cme"]},prevItem:{title:"Harness Cloud Cost Management - an active cloud cost solution",permalink:"/blog/ccm-active-cloud-cost-solution"},nextItem:{title:"Provision AWS Infrastructure for Delegates",permalink:"/blog/aws-infra-for-delegates"}},p={authorsImageUrls:[void 0]},s=[{value:"Before we begin",id:"before-we-begin",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started",id:"getting-started-1",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Run the Pipeline",id:"run-the-pipeline",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this blog ,we are going to talk about how easily you can set up your pipeline using YAML."),(0,i.kt)("p",null,"Harness includes visual and YAML editors for creating and editing Pipelines, Triggers, Connectors, and other entities. Everything you can do in the visual editor you can also do in YAML."),(0,i.kt)("p",null,"For detailed information about using Harness YAML visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/xs2dfgq7s2-yaml-reference-cd-pipeline"},"Harness YAML Reference")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harness.io/article/1eishcolt3-harness-yaml-quickstart"},"Harness YAML Quickstart"),"."),(0,i.kt)("h2",{id:"before-we-begin"},"Before we begin"),(0,i.kt)("p",null,"Make sure you have the following set up before you begin this tutorial:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GitHub Account: This tutorial clones a codebase from a Github repo. You will need a GitHub account so Harness can connect to GitHub."),(0,i.kt)("li",{parentName:"ul"},"Docker Hub account and repo: You will need to push and pull the image you build to Docker Hub. You can use any repo you want, or create a new one for this tutorial.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fork the repository"),(0,i.kt)("p",{parentName:"li"},"For this demo, we are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harness-community/python-pipeline-samples"},"Python-pipeline-samples"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login into Harness UI"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://app.harness.io"},"Harness"),".\n",(0,i.kt)("img",{src:n(2169).Z,width:"3582",height:"1674"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sign up for the Harness platform.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once you signup you will enter the Harness UI as shown below.\n",(0,i.kt)("img",{src:n(1132).Z,width:"3582",height:"1674"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Builds")," and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Create a Project"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Give the name of the Project -> `Save and Continue"),(0,i.kt)("li",{parentName:"ul"},"You can also invite collaborators, it's optional.\n",(0,i.kt)("img",{src:n(6729).Z,width:"3582",height:"1674"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After ",(0,i.kt)("inlineCode",{parentName:"p"},"Save and Continue")," select the module as `Continous Integration."),(0,i.kt)("p",{parentName:"li"},"After selecting the module as Continous Integration you will see the screen as shown in the below screenshot.\n",(0,i.kt)("img",{src:n(9349).Z,width:"3582",height:"1674"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Create a Pipeline"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name your ",(0,i.kt)("inlineCode",{parentName:"li"},"Pipeline"),"."),(0,i.kt)("li",{parentName:"ul"},"Choose the setup as ",(0,i.kt)("inlineCode",{parentName:"li"},"Inline"),"."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Start"),".\nRefer to the below screenshot:\n",(0,i.kt)("img",{src:n(8198).Z,width:"3582",height:"1674"}))))))),(0,i.kt)("h2",{id:"getting-started-1"},"Getting Started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After the Creation of the Pipeline, you will enter the pipeline studio as shown below\n",(0,i.kt)("img",{src:n(503).Z,width:"3582",height:"1674"})),(0,i.kt)("li",{parentName:"ul"},"As you can see in the pipeline studio we have two options, one is ",(0,i.kt)("inlineCode",{parentName:"li"},"VISUAL")," and the other is ",(0,i.kt)("inlineCode",{parentName:"li"},"YAML"),".\nNavigate to the YAML editor, as shown below.\n",(0,i.kt)("img",{src:n(826).Z,width:"3582",height:"1674"})),(0,i.kt)("li",{parentName:"ul"},"Copy and Paste the below YAML file into the editor.")),(0,i.kt)("p",null,"Note:- Paste the below YAML file just below the ",(0,i.kt)("inlineCode",{parentName:"p"},"tags{}"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  properties:\n    ci:\n      codebase:\n        connectorRef: <+input>\n        build: <+input>\n        depth: <+input>\n        prCloneStrategy: <+input>\n  stages:\n    - stage:\n        name: build test and run\n        identifier: build_test_and_run\n        type: CI\n        spec:\n          cloneCodebase: true\n          infrastructure:\n             type: KubernetesHosted\n             spec:\n               identifier: k8s-hosted-infra\n          execution:\n            steps:\n              - step:\n                  type: Run\n                  name: Code compile\n                  identifier: Code_compile\n                  spec:\n                    connectorRef: <+input>\n                    image: python:3.10.6-alpine\n                    shell: Sh\n                    command: python -m compileall ./\n              - step:\n                  type: Run\n                  name: Create dockerfile\n                  identifier: Create_dockerfile\n                  spec:\n                    connectorRef: <+input>\n                    image: alpine\n                    shell: Sh\n                    command: |-\n                      touch pythondockerfile\n                      cat > pythondockerfile <<- EOM\n                      FROM python:3.10.6-alpine\n                      WORKDIR /python-pipeline-sample\n                      ADD . /python-pipeline-sample\n                      RUN pip install -r requirements.txt\n                      CMD ["python3" , "./app.py"]\n                      EOM\n                      cat python-docker file\n              - step:\n                  type: BuildAndPushDockerRegistry\n                  name: Build and Push an image to the docker registry\n                  identifier: Build_and_Push_an_image_to_docker_registry\n                  spec:\n                    connectorRef: <+input>\n                    repo: <+input>\n                    tags:\n                      - latest\n                    dockerfile: pythondockerfile\n                    optimize: true\n        variables:\n          - name: container\n            type: String\n            description: ""\n            value: docker\n    - stage:\n        name: Integration test\n        identifier: Integration_test\n        type: CI\n        spec:\n          cloneCodebase: true\n          infrastructure:\n            useFromStage: build_test_and_run\n          execution:\n            steps:\n              - step:\n                  type: Background\n                  name: "python server "\n                  identifier: python_server\n                  spec:\n                    connectorRef: <+input>\n                    image: <+input>\n                    shell: Sh\n                    command: python3 ./app.py\n              - step:\n                  type: Run\n                  name: "test connection to server "\n                  identifier: test_connection_to_server\n                  spec:\n                    connectorRef: <+input>\n                    image: curlimages/curl:7.73.0\n                    shell: Sh\n                    command: |-\n                      sleep 10\n                      curl localhost:5000\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"VISUAL")," and now you can see your two-stage pipeline ready as shown below in the screenshot. That's the beauty of YAML in Harness."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(7993).Z,width:"3582",height:"1674"})),(0,i.kt)("p",{parentName:"li"},"You can navigate through all the steps in the pipeline and explore the pipeline."))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"Before running the pipeline, let's create a GitHub and Docker connector."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GitHub Connector"),(0,i.kt)("p",{parentName:"li"},"Under Project setup select ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors"),"."),(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New Connector")),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Code Repositories")," and Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Github"),"."),(0,i.kt)("p",{parentName:"li"},"You can refer to the below screenshot.\n",(0,i.kt)("img",{src:n(5795).Z,width:"3582",height:"1674"})),(0,i.kt)("p",{parentName:"li"},"Change the Connector settings as follows:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Overview"),(0,i.kt)("p",{parentName:"li"},"Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"python-sample-connector")),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Details"),(0,i.kt)("p",{parentName:"li"},"URL Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"Repository")),(0,i.kt)("p",{parentName:"li"},"Connection Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP")),(0,i.kt)("p",{parentName:"li"},"GitHub Repository URL: Paste the link of your forked repository"),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Credentials"),(0,i.kt)("p",{parentName:"li"},"Username: (Your Github Username)"),(0,i.kt)("p",{parentName:"li"},"Personal Access Token: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Check out how to create personal access token")),(0,i.kt)("p",{parentName:"li"},"Secret Name: ",(0,i.kt)("inlineCode",{parentName:"p"},"Git-Token")),(0,i.kt)("p",{parentName:"li"},"Secret Value: PAT value generated in Github"),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Enable API access (recommended)")),(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"API Authentication"),"-> ",(0,i.kt)("inlineCode",{parentName:"p"},"Personal Acess Token")," select the name of the secret created in the previous step."),(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Connectivity Mode"),(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect to the provider"),"-> Select `Connect through Harness Platform."),(0,i.kt)("p",{parentName:"li"},"Select `Save and Continue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connection Test"),(0,i.kt)("p",{parentName:"li"},"You will see ",(0,i.kt)("inlineCode",{parentName:"p"},"Verification Successful")," which means your connector is connected successfully to your codebase."),(0,i.kt)("p",{parentName:"li"},"For reference, you can also check out this video on our Harness Community youtube channel"),(0,i.kt)("div",{className:"iframe-wrapper"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/0UHBK4vfzcI",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}," ")),"To develop more understanding of Connectors [check out the docs here](https://docs.harness.io/category/o1zhrfo8n5-connectors)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a Docker Connector"),(0,i.kt)("p",{parentName:"li"},"  Under Project setup select ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors"),"."),(0,i.kt)("p",{parentName:"li"},"  Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+ New Connector")),(0,i.kt)("p",{parentName:"li"},"  Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Artifacts Repositories")," and Choose `Docker Registry."),(0,i.kt)("p",{parentName:"li"},"  You can refer to the screenshot below"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{src:n(6036).Z,width:"3582",height:"1646"})),(0,i.kt)("p",{parentName:"li"},"  Change the settings as follows"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Overview\nName- ",(0,i.kt)("inlineCode",{parentName:"p"},"docker quickstart"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Details"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Docker registry URL - ",(0,i.kt)("inlineCode",{parentName:"li"},"https://index.docker.io/v1/")),(0,i.kt)("li",{parentName:"ul"},"Provider type - ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker Hub")),(0,i.kt)("li",{parentName:"ul"},"Authentication - `Username and Password"),(0,i.kt)("li",{parentName:"ul"},"Username - Docker hub username"),(0,i.kt)("li",{parentName:"ul"},"Secret Token - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/harness-community/python-pipeline-samples/blob/main/docs/DockerPat.md"},"Check out how to create docker PAT")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select Connectivity Mode"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  Under `Connect to the provider`-> Select `Connect through Harness Platform.\n\n  Select `Save and Continue.\n")),(0,i.kt)("p",{parentName:"li"},"  For your reference you can also check out this video on our Harness Community YouTube channel:"),(0,i.kt)("div",{className:"iframe-wrapper"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/zJ--nKMCdZQ",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}," "))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a Docker Repository"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Log in to ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com"},"Docker Hub")),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Repositories")," -> Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Repositories"),"."),(0,i.kt)("li",{parentName:"ol"},"Give a name to your repository and you can choose whether you want you repo to be public or repo.")))),(0,i.kt)("h2",{id:"run-the-pipeline"},"Run the Pipeline"),(0,i.kt)("p",null,"Navigate back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline studio")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Run"),"."),(0,i.kt)("p",null,"On Clicking, you will see a page asking for inputs so as to run the pipeline, you can refer to the below screenshot"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3135).Z,width:"1806",height:"1682"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"CI Codebase"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Connector"),"- Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Github Connector")," you created in the previous step."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stage: build test and run"),(0,i.kt)("p",{parentName:"li"},"Step: Code compile"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Container Registry"),"- Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker Connector")," you created in the previous step.")),(0,i.kt)("p",{parentName:"li"},"Step: Create dockerfile"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Container Registry"),"- Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker Connector"),".")),(0,i.kt)("p",{parentName:"li"},"Step: Build and Push an image to Docker Registry"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Docker Connector"),"- Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker Connector"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Docker Repository"),"- ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-hub-username/repository-name")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Stage: Integration Test"),(0,i.kt)("p",{parentName:"li"},"Execution"),(0,i.kt)("p",{parentName:"li"},"Step: python server"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Container registry"),"- Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker Connector"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Image"),"- ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-hub-username/repository-name"))),(0,i.kt)("p",{parentName:"li"},"Step: test connection to the server"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Container registry"),"- Select the ",(0,i.kt)("inlineCode",{parentName:"li"},"Docker Connector"),".")))),(0,i.kt)("p",null,"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Run Pipeline"),"."),(0,i.kt)("p",null,"It will take around less than 3 mins to execute your Pipeline."),(0,i.kt)("p",null,"After successful completion and execution of all the steps you will see something similar to this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9484).Z,width:"3408",height:"1410"})),(0,i.kt)("p",null,"This article explained YAML based onboarding process, if you want to try out Harness UI based onboarding do check out this tutorial:-"),(0,i.kt)("div",{className:"iframe-wrapper"},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/r1GLYtOmJmM",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}," ")))}m.isMDXComponent=!0},9349:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/builds1-accddc76549877b7f58c27bc8518028b.png"},5795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/conn-7f6a1064964a92eba8fc39ba3882e929.png"},6036:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/conn1-3e37db5f0bb8b27036de0707ca2872b2.png"},3135:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/input-b79a95b8ec9caf444ff60653a13bf809.png"},8198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pi1-ed45200c08672c96f5a7452bcb81faa8.png"},503:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pi2-495de2f7afc4651856289bf5759aaefa.png"},7993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pipe-stud-7b712bc4bcd67072d5bf4371f03814df.png"},6729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/proj-2f81383b1271689f2fadebde963f83fc.png"},9484:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-f938f241c1e3c135e25c06b272ca689a.png"},1132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signu1-b3c928933588bd39ae58f4857979a776.png"},2169:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signup-33efae93309c17b42bee0c1e5ef69160.png"},826:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/yaml-e7d3cd0f51751bd4e25eca5bab3a2a7d.png"}}]);
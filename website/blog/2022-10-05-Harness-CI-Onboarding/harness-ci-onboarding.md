---
slug: harness-ci-onboarding
title: Harness CI Onboarding - Beginners Guide
authors: [dhrubajyoti]
tags: [continuous-integration, harness-ci, beginners-guide, getting-started, cme]
---

## Introduction

This beginner guide aims to help learners learn about the basic components of Harness CI and develop an understanding of the DevOps ecosystem involved in the Software Development lifecycle. In this article we will learn about the basic features of Harness CIE and also get started by building the first basic sample pipeline.

Engineering team is usually expected to deliver error-free code at high frequency. A fast and reliable CI/CD pipeline is a major part for implementation of that in a sustainable model over time. Harness Continuous Integration tool which is built with test intelligence, native secrets, fine-grained RBAC, and extensible governance  as one of the best solutions in the marketplace for automated pipelines. Automated pipelines remove user errors, provide feedback loops to developers and helps enable fast product iterations.

**What is a pipeline?**

A Pipeline is an end-to-end process that delivers a new version of your software. It can be considered to be a cyclical process that includes integration, delivery, operations, testing, deployment, real-time updates, and metrics monitoring.

For example: A pipeline can use the CI module of Harness to build, test & push code and then also a CD module to deploy the artifact to the production environment.

### Prerequisites


- Github Account ([Check out the other source code managers here](https://docs.harness.io/article/kqik8km5eb-source-code-manager-settings#source-code-manager-settings))
- Docker Hub Account & Repository ([Other artifactory packages](https://docs.harness.io/article/66ykcm0sf0-build-and-push-to-gcr-step-settings))
- Installation of K8s Delegate for Harness Delegate
- About Harness CI
- Features in Harness CI
- Getting Started with your first pipeline
- Troubleshooting frequently encountered issues
- Conclusion: Developer Feedback on Harness CIE
- What’s Next?

### Environment

- Ubuntu 20.04/22.04

### Requirements
- Kubernetes cluster for Harness Delegate and build farm.
- You'll need a Kubernetes cluster for Harness to use for the Harness Delegate and as a build farm. Ensure you have a cluster that meets the following requirements:
- Number of pods: 3 (two pods for the Harness Delegate, the remaining pod for the build farm).
- Machine type: ```4vCPU```
- Memory: 16GB RAM. The build farm and Delegate requirements are low but the remaining memory is for Kubernetes, the Docker container, and other default services.
- Networking: Outbound ```HTTPS``` for the Harness connection, and to connect to Docker Hub. Allow TCP port 22 for SSH.
- Namespace: When you install the ```Harness Delegate```, it will create the ```harness-delegate``` namespace. You'll use the same namespace for the build farm.

A **Kubernetes service account** with permission to create entities in the target namespace is required. The set of permissions should include ```list```, ```get```, ```create```, and ```delete``` permissions. In general, the cluster-admin permission or namespace admin permission is enough.
For more information see [User-Facing Roles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles) from Kubernetes.

This tutorial implements creation of a pipeline over a github repository thus you’ll be required to create a github account & host a project over a repository. To create a new repository on github follow these steps:

1. Move to the upper-right corner on the github webapp & use the  drop-down menu to select New repository option.

![create-new-repository](./repo-create.png)

2. Type the name of the repository. The repository name is unique & cannot be same as already hosted repo names.

![repo-name](./create-repository-desc.png)

3. Select the repository visibility & click on create repository.

![repo-public](./create-repository-public-private.png)

![create-repo](./repo-create.png)

### Installing Docker Engine

To get started with Docker Engine make sure you meet the [prerequisites](https://docs.docker.com/engine/install/ubuntu/#prerequisites) then install Docker. Older versions of Docker were called ```docker```, ```docker.io```, or ```docker-engine```. If these are installed uninstall them with this command.

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

**[Check out this documentation to get your Docker Engine installed](https://docs.docker.com/engine/install/)**


### Installation of K8s Delegate for Harness Delegate

Harness Delegate is the service that connects all the components of the pipeline i.e artifact, infrastructure, collaboration, verification and other providers with the Harness Manager. It performs all the operations in the deployment lifecycle. Here we’ll install Kubernetes Delegate.

1. Move to the Harness Platform, in the Manager section click on setup and select Delegates.
2. In the delegates tab, click on the install delegate option with preference to Kubernetes YAML as the download type.
3. Update the name and profile and download the K8s Delegate or copy the download link.
4. Navigate to the harness-delegate-kubernetes folder that you extracted in the terminal using the following command

```bash
tar -zxvf harness-delegate-kubernetes.tar.gz

cd harness-delegate-kubernetes
```

With this you will directly connect with your cluster from the terminal and thus can easily copy the YAML file over.

5. To verify the connection of your created K8s Delegate with the Harness Platform use the following command

```bash
wget -p https://app.harness.io/ -O /dev/null
```

6. Now we’ll install the harness delegate using the `harness-delegate.yaml` file using this command

```bash
kubectl apply -f harness-delegate.yaml
```

7. To verify that the delegate pod was created run the following command.

```bash
kubectl get pods -n harness-delegate
```

With this now you're ready to connect Harness to your artifact servers, clusters, and so on.


### About Harness CI

Harness CI is powered by Drone the most popular open source CI tool. It’s built for speed and developer experience. Onboarding it is simple and this is what this guide is about.

Harness alongside the open source counterpart Drone introduced new features to scale the developer onboarding experience and reduce the time involved in the process drastically as compared to the industry standards.

**Harness CI’s major features are the following:**

1. Containerized Steps (Zero Dependencies)
2. Visual Pipeline Builder with YAML Config as Code
3. Git Operations, Secrets & Fine grained RBAC for security etc
4. Test Intelligence
5. Integrated Platform

### Getting Started with your first pipeline

Pipelines are a group of one or more stages. They are responsible for managing and automating builds, testing, deployments, and other important build and release stages.

To create a new Pipeline in Harness CI follow the steps below:

1. Move to the Harness Platform, click on projects. Create a new project incase you haven’t already created one.
2. Move to the modules section and click on Continuous Integration & click on create a new pipeline.
3. Enter the name for the pipeline & click on start. It usually takes 2-4 min for the provisioning stage of the pipeline.

<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/251WU_OG0BI"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>


The backbone of the pipeline is the build stage. This is where the user specifies the pipeline configuration details as the codebase to build, the infrastructure, the build workflow and all other additional components. The next step involves establishing the connection of the pipeline with the external resource. We use a ```connector``` in Harness CIE to develop this pipeline connection. The ```connector``` is a configurable object that automatically establishes connection to an external resource. 

To create the Build Stage follow the steps given below: 

1. Move to the newly created pipeline in the Pipeline Studio, add a stage & select build.

2. Add a stage name & under the configure codebase select connect connector.

3. Click on New Creator & give preference to Github Connector from all the available options for connector type. 

To configure the connector successfully provide the following details i.e 
a. URL Type as a Repository
b. Connection Type as HTTP
c. GitHub Repository URL

You’ll also have to verify the github username & PAT’s to make use of the connector. These secrets are stored in the Harness Secret Manager. 

4. Once the connector has been configured with the necessary credentials select Enable API Access.

5. The connectivity medium can be directly through Harness Platform or through an delegate service running in an external resource. 

6. In this guide we’ll install the delegate into the K8s cluster. Select Connect Through An Harness Delegate from the available options.

7. Install the new delegate with infrastructure type as Kubernetes.

8. Configure the delegate information as Name, Size, Permissions etc & install the delegate using the workspace definition YAML file that can be installed directly to the build infrastructure.

9. Download the YAML script and run it on the previously created cluster from the terminal.

10. Login to the K8s cluster from the same terminal and click on connect option.

11. Install the Harness Delegate using the ```harness-delegate.yaml``` file using the following command.



```bash
$ kubectl apply -f harness-delegate.yaml
```

12. Set up the Delegate with the necessary configuration from the Delegate Setup option.

13. Once the delegate is setup successfully you’ll see the connector & repo details in the About your stage component.

14. Select on setup stage and the new stage will be added to the pipeline.

The next step is to set up & define the Build Farm Infrastructure under the pipeline configuration settings. To setup the BFI follow the steps below:

1. Select the newly created K8s cluster & create a new connector. Specify details as Name, Details, Delegates Setup & Connection Test.
2. Once verified click on Finish to add the new connector to the K8s Cluster Field.
3. Verify the namespace carefully and move to the Execution component of the pipeline.

Now we can build & run tests over & against the hosted code. Move to the Execution Tab of the pipeline & add the step to run the steps. Follow the following steps to setup the Execution workflow of the pipeline:

1. Add a run step to the pipeline & configure it as follows: 
    - Give the step an appropriate name
    - Click on add a new connector option under the container registry option.
    - Select the connector type as Docker Registry

2. We’ll now create a new connector to the DockerHub account. Specify the account credentials and configure the secrets.

![docker-img](./ci-tut-04-docker-connector-02-details.png)

3. Verify the connection test & once successful click on Finish. Now we can Configure Run Step pane, with the new Connector in the Container Registry setting. 
Configure the step as follows:
- Give an appropriate step name.
- The Container Registry should show the Docker Hub Connector you just created.
- Image: ```golang:1.15```
- Command:


```bash
go get gotest.tools/gotestsum
gotestsum --format=standard-verbose --junitfile unit-tests.xml || true
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -tags netgo
```

The last line contains the go build command to compile the package, along with its dependencies. Once configured click on Apply changes & save the pipeline.

Now we can add the step to build & push the created image into the DockerHub repository. A repository in DockerHub is required to receive the artifacts from the pipeline. Add a step and specify the DockerHub account credentials. 

Configure the step as follows:

- Select Name as the Step name you defined earlier.
- Select the Docker Hub Connector you set up previously.
- Paste the docker repository URL & specify the tags: ```<+pipeline.sequenceId>```
- After successfully configuring the step components select Apply Changes & save the pipeline.

The pipeline is now ready for execution & can be used for running tests. 
You can also add the Integration Tests to the pipeline. To execute the pipeline click on Run. Select Git Branch and the git branch name when prompted such as main and click on Run Pipeline

You can view the logs of each step by clicking on it or else can also switch to the console view for more tracking down the micro details.
The entire pipeline is also available in YAML. You can directly make changes to the YAML file and save the changes and it will automatically be reflected in the pipeline when executed.

### Conclusion - Developer Feedback on Harness CIE

Developers spend a lot of time into coding & solving the engineering problems. With Harness CIE we can now easily cut down the operational & functional time cost drastically. The added advantage to the features of CIE is the User Interface of CIE which is sleek and easy 
& solves major issues of longer build and testing time. Harness CIE automatically scales up the build, test and deploy cycles. 

The product focuses on developers & is completely developer-centric built around what a developer seeks to be the one stop solution for CI/CD.

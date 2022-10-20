---
slug: configure-run-step
title: "Configure Run Step in Harness CI"
authors: [dhrubajyoti]
tags: [continuous-integration, harness-ci, troubleshooting-guide, cme]
---

## Introduction

This beginner guide aims to help learners learn the configuration management for run steps settings in Harness CI. We will learn about different settings and permissions for the Harness CI Run Tests step which executes one or more tests on a container image.

### Before We Begin

Are you confused with terminologies like Container Resources, Image Pull Policy etc while creating & configuring a run step for your CI pipeline? In this article we will discuss a few such terminologies on the Harness CI platform and how you can configure them to set up your run step in the pipeline settings according to your requirements.

### Configuration Parameters in a Run Step

- Name
- ID
- Description
- Container Registry
- Image
- Namespaces
- Build Tool
- Language
- Packages
- Run Only Selected Tests
- Test Annotations
- Pre-Command & Post-Command
- Report Paths & Environment Variables
- Output variables
- Image Pull Policy
- Container Resources

### Name
The unique name for the run step. Each run step must have a unique name & it is recommended to use a name which describes the step.

### ID
Most of the Harness entities and resources include a unique Id also referred as entity Identifier that's not modifiable once the entity is created. It provides a constant way to refer to an entity and avoid issues that can arise when a name is changed.

Initially Harness automatically generates an identifier for an entity which can be modified when you are creating the entity but not after the entity is saved.

Even if you rename the entity the Identifier remains the same. The automatically generated Identifier is based on the entity name and follows the identifier naming conventions.
If an entity name cannot be used because it's already occupied by another entity Harness automatically adds a prefix in the form of ```-1```, ```-2```, etc.

**[Check out the documentation to know more about Entity Identifier Reference](https://ngdocs.harness.io/article/li0my8tcz3-entity-identifier-reference)**
 
### Description
This is generally a text string describing the run step and it’s working.

### Container Registry
Container Registry refers to the Harness Connector for a container registry. This is the container registry for the image Harness will use run build commands on such as DockerHub.

**[Check out the documentation to know more about Harness Container Image Registry](https://docs.harness.io/article/my8n93rxnw-connect-to-harness-container-image-registry-using-docker-connector)**

### Image
Image is the name of the Docker image to use when running commands.For example: ```alpine-node```
This image name should include the tag and will by default refer to the latest tag if not specified. You can use any docker image from any docker registry including docker images from private registries.

**Different container registries has different name formats:**

- Docker Registry: enter the name of the artifact you want to deploy, such as ```library/tomcat```. Wildcards are not supported.
- GCR: enter the name of the artifact you want to deploy. Images in repos need to reference a path starting with the project ID that the artifact is in, for example: ```us.gcr.io/playground-243019/quickstart-image:latest```.
- ECR: enter the name of the artifact you want to deploy. Images in repos need to reference a path, for example: ```40000005317.dkr.ecr.us-east-1.amazonaws.com/todolist:0.2```.

### Namespaces (C#)
A comma-separated list of the Namespace prefixes that you want to test.

### Build Tool
This is where you select the build automation tool & the source code language to build, such as Java or C#.

### Packages
This are the list of source code package prefixes separated by a comma. For example: ```com.company.```, ```io.company.migrations```

### Run Only Selected Tests
If this option is unchecked, Test Intelligence is disabled and all tests will run.

### Test Annotations
This is where you enter the list of test annotations used in unit testing separated by commas. 
Any method annotated with this will be treated as a test method. The defaults are: ```org.junit.Test```, ```org.junit.jupiter.api.Test```, ```org.testng.annotations.Test```
      
### Pre-Command & Post-Command
In pre-command you enter the commands for setting up the environment before running the tests. For example, printenv prints all or part of the environment.

In post-command you enter the commands used for cleaning up the environment after running the tests. For example, sleep ```600``` suspends the process for 600 seconds.
       
### Report Paths
This refers to the path to the file(s) that store results in the JUnit XML format. You can enter multiple paths. Glob is supported.

### Environment Variables & Output Variables
Environment variables refers to the variables passed to the container as environment variables and used in the Commands.

Output variables expose Environment Variables for use by other steps/stages of the Pipeline. You can reference the output variable of a step using the step ID and the name of the variable in Output Variables.


![output-var](./output-var.png)


### Image Pull Policy
This is where you make the choice to set the pull policy for the image.

- **Always:** The kubelet queries the container image registry to resolve the name to an image digest every time the kubelet launches a container. If the kubelet encounters an exact digest cached locally, it uses its cached image; otherwise, the kubelet downloads (pulls) the image with the resolved digest, and uses that image to launch the container.

- **If Not Present:** The image is pulled only if it isn't already present locally.

- **Never:** The kubelet assumes that the image exists locally and doesn't try to pull the image.


### Container Resources

The container resources configuration specifies the maximum resources used by the container at runtime.

**Limit Memory**
Maximum memory that the container can use. You can express memory as a plain integer or as a fixed-point number using the suffixes G or M. You can also use the power-of-two equivalents Gi and Mi.

**Limit CPU**
The maximum number of cores that the container can use. CPU limits are measured in cpu units. Fractional requests are allowed: you can specify one hundred millicpu as 0.1 or 100m. 

**[See Resource units in Kubernetes](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes)**


:::note

This is not applicable in case you have opted for Hosted by Harness in your Infrastructure settings of the step.

:::
 
### Timeout
This specifies the timeframe until which the step shall execute. Once the timeout is reached the step fails and the Pipeline execution continues.


### NOT ABLE TO TROUBLESHOOT THE ENCOUNTERED ERROR

In case the user is unable to troubleshoot the application error or pipeline execution failures the user can log/submit a ticket to Harness Support. To log a ticket follow the process:

1. Click the **Help** button in the Harness Manager
2. Click **Submit a Ticket** or **Send Screenshot**
3. Fill out the pop up form and click **Submit Ticket** or **Send Feedback**

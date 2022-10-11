---
slug: handbook-troubleshooting-guide
title: A handbook on troubleshooting frequently encountered errors for the users on Harness CI
authors: [dhrubajyoti]
tags: [continuous-integration, harness-ci, troubleshooting-guide, cme]
---

## Introduction

This is a guide to get started with the common use cases for the end users to implement pipeline executions successfully in Harness CI

Harness provides various sources & tools to easily troubleshoot frequently encountered errors to fix pipeline failures. This guide lists some of the common issues faced while implementing and designing pipelines in Harness CI and the possible solutions.

**What’ll we be covering here?**

- Syntax Verification
- Variable Verification
- Troubleshooting Delegate Installation Errors
- Troubleshooting Triggers Errors
- Troubleshooting Git Experience Errors


### Verify Syntax

An early-stage error use case is generally incorrect syntax. In such cases, the pipeline returns an invalid YAML syntax message and does not start running in case any syntax error is detected.

Edit ```pipeline.yaml``` in the pipeline studio

The pipeline editor in the YAML view is recommended for editing experience (rather than the graphical stage view). Major features in the editor include:
- Creation of connectors, secrets & pipelines from scratch
- Realtime schema validation
- Intellisense & auto-completion
- Field descriptions & rich inline documentation
- Free Templates for YAML Samples 

This feature helps the developer to validate the existing pipeline’s correctness and helps in quick modification alongside copying of a pipeline as a code.


### Verify Variables

A very integral part of troubleshooting errors in Harness CI is to verify the variables present in the pipeline and their values. Major configuration in the pipeline depends on the variables and verifying them becomes the easiest way to reach the root cause and potential solution of the problem.

Visit the variables section on the Harness CI platform. Check if the expected variables and their values match and are implemented at the expected stage for the pipeline.

### Delegate Setup Failure

The majority of the encountered errors in Harness CI revolve around delegate setup processes. Make sure you have a complete understanding of how to set up a harness delegate from scratch & understand how the Harness manager and delegate complement each other.

Delegate setup also fails if the SSH key used for deployment to the targeted host is incorrect. This usually happens due to incorrect information about the SSH configuration in the Harness Secrets Management and also if the targeted host is not configured to support SSH connections.

For troubleshooting move to the ```watcher.log``` file that provides information about the deleted version.

### Delegate fails to establish a connection with the Harness Manager

In case of connection failures for the delegate with the Harness Manager, we can use ping on the delegate host to test the response time for app.harness.io and other URLs are consistent or not. We can use the traceroute to check the network route and verify if there is any case of redirection. To verify if the DNS resolution is working fine we can implement nslookup.
We can flush the client's DNS cache (Check for the OS). We can run tests to check for local network errors or NAT license limits. In the case of cloud service providers, we’ll have to ensure that the security groups have outbound traffic allowed on HTTP 443.

### No eligible delegate found for the assigned pipeline execution

This error is encountered when the delegate fails to achieve the URL criteria for validation. All delegates in harness are identified by their Harness account ID with some additional factors. For example, in VMs the delegates are identified with the combination of their hostname and IP address thus in case the IP changes the Harness Manager fails to identify the delegate. In the case of K8s and ECS delegates, the IP changes when the pod is rescheduled.

The delegate sends the heartbeat, deployment data & Time series, and log data for continuous verification to the Harness Manager. The credentials used by the Delegate must have the roles and permissions required to perform the task. For example, if the account used for an AWS Cloud Provider does not have the roles required for ECS deployments then it will fail.

For more information visit [How does Harness Manager Identify Delegates?](https://docs.harness.io/article/migeq3achl-harness-delegate-faqs#how_does_harness_manager_identify_delegates)

### K8s Delegate Deletion Failure

To delete the Harness Delegate from the K8s cluster we’ll have to delete the StateFulSet for the delegate. This ensures that the expected number of pods is running and available. Deletion of the delegate without deletion of the StateFulSet results in a recreation of the pod. 

For example, if the delegate name is ```delegate-sample``` then we can delete StateFulSet with the command below

```bash
$ kubectl delete statefulset -n harness-delegate delegate-sample
```

### Triggers Rejection Failures

This usually happens when the user uses a webhook trigger to execute a pipeline or workflow and the name of the artifact in the cURL command is different from the name of the artifact.

```bash
Trigger Rejected. Reason: Artifacts Are Missing for Service Name(S)
```

This is majorly a result of a bad name for an artifact build version when placed in the cURL command. For example a cURL with build number **v1.0.4-RC8:**

```bash
curl -X POST -H 'content-type: application/json'
--url https://app.harness.io/gateway/api/webhooks/... . .
-d '{"application":"tavXGH . . z7POg","artifacts":[
{"service":"app","buildNumber":"v1.0.4-RC8"}]}'
```

In case the Harness Service artifacts have a different nomenclature the cURL command will fail to execute. Thus ensuring the webhook cURL command has the correct artifact name becomes very important. 

### Failure when executed Git Push in Harness

In case of two-way sync between the Git repository and the Harness Application, the push to Harness will result in failure unless the GIT YAML files and the required settings are configured before pushing the app to Harness.

For example, in case we have a predefined infrastructure definition and the required labels or parameters are not filled or filled in incorrectly the push to git is more likely to encounter a failure.

Using the Harness Manager to configure the app at first is the best way to encounter this error. This generally ensures that all the required settings are configured correctly and synced with the git repository. 

### Triggers: zsh: no matches found

In some of the OS versions specifically in MACOS, the default shell is zsh. The zsh shell requires the cURL command to not use the “?” character or put quotes around the URL.

For example;
```bash
curl -X POST -H 'content-type: application/json' --url https://app.harness.io/gateway/api/webhooks/xxx?accountId=xxx -d '{"application":"fCLnFhwsTryU-HEdKDVZ1g","parameters":{"Environment":"K8sv2","test":"foo"}}'
```

This shall work

```bash
curl -X POST -H 'content-type: application/json' --url "https://app.harness.io/gateway/api/webhooks/xxx?accountId=xxx -d '{"application":"fCLnFhwsTryU-HEdKDVZ1g","parameters":{"Environment":"K8sv2","test":"foo"}}'"
```

### User does not have "Deployment: execute" permission

The error User does not have ```"Deployment: execute"``` permission reflects back to the user’s **Application Permission > Settings** does not involve ```execute```. This can be solved by resolving the application permission configuration. The user can easily modify the Harness Configure as Code YAML files for the harness application. 

To enable editing of the YAML file make sure the user’s Harness User Groups must have the account permission ```Manage Applications``` enabled. Also the Application Permissions ```Update``` enabled for specific applications

### NOT ABLE TO TROUBLESHOOT THE ENCOUNTERED ERROR

In case the user is unable to troubleshoot the application error or pipeline execution failures the user can log/submit a ticket to Harness Support. To log a ticket follow the process:

1. Click the **Help** button in the Harness Manager
2. Click **Submit a Ticket** or **Send Screenshot**
3. Fill out the pop up form and click **Submit Ticket** or **Send Feedback**

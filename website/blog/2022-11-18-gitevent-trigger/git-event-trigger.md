---
slug: git-event-trigger
title: "Create a Trigger for Git Events from scratch"
authors: [dhrubajyoti]
tags: [continuous-integration, harness-ci, beginners-guide, cme]
---

## Introduction

Triggers in Harness CI are used to initiate the execution of Pipelines. We can automate trigger execution of pipelines for Git events. For example when a pull request or push event occurs on a Git repo the trigger is activated and it invokes the pipeline execution.

Triggers enable event driven continuous integration and support the practice of every commit building and/or deploying to a target environment.



### Create a Trigger for Git Events

For a Trigger to process Git events the Pipeline must have a Codebase object that points to the Git repo that sends the events.

The first Build Step in your Pipeline specifies the codebase to build. To edit an existing Codebase you will click the Codebase on the right side of the Pipeline Studio.

**[Check out the documentation on Creating and Configuring a Codebase](https://ngdocs.harness.io/article/mozd8b49td)**

### Step-by-Step Process

**Step 1:** Open your Harness Pipeline in Pipeline Studio & Click Triggers.

**Step 2:** Click New Trigger and select the Git-based Trigger types. 

**Step 3:** Configure the trigger settings

You’ll enter the unique name for the Trigger. In Payload Type select your Git provider. These are auto populated with the provider selected.

Select or create a Connector to the Git account for the Trigger repo. 

**[Check out the documentation on Code Repository Connectors](https://docs.harness.io/category/xyexvcc206-ref-source-repo-provider)**

- If you set up an account-level Code Repository Connector: in Repository Name, enter the name of the repo in the account in the Connector.

- If you set up a repo-level Code Repo Connector: the repo name is immutable

Select the Event in this case we’ll select the Git event for the Webhook. Select the actions for the Webhook (Pull Request, Issue etc) or select Any Actions.

**[For details on these settings check out the documentation on Triggers Reference](https://docs.harness.io/article/rset0jry8q-triggers-reference)**

For details on the payloads of the different repo Webhooks, see **[GitHub Event Types & Payloads](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads)** , **[Bitbucket Event Payloads](https://confluence.atlassian.com/bitbucket/event-payloads-740262817.html)**, and **[Gitlab Events](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html#events)**

Now for some particular cases webhook events can be missed due to a firewall or a network issue and cannot reach Harness. To prevent this we can enter an polling interval in Polling Frequency. The permitted values are listed below.

**Permitted values:**

- minimum value: ```2m```
- maxium value: ```1h```


**Step 4: Set Trigger Conditions**

Conditions mentions the criteria in addition to events and actions. They help to form the overall set of items to trigger a Pipeline based on changes in a given source.
Trigger Conditions support Harness built-in expressions for accessing Trigger settings, Git payload data and headers.

**[To learn more check out the documentation on Triggers Reference.](https://docs.harness.io/article/rset0jry8q-triggers-reference)**


**Step 5: Specify the pipeline inputset**

Provide the values for the pipeline runtime inputs that you have defined. Pipelines often have [Runtime Inputs](https://docs.harness.io/article/f6yobn7iq0-runtime-inputs) like codebase branch names or artifact versions and tags.


**Step 6: Click Create Trigger.**

The Trigger should be now added to the Triggers page.

**Webhook Connection Check**

Once the trigger is created Harness automatically generates the webhook and attaches it to the repository webhooks. You can manually verify the connection and permissions granted to the webhook. Make sure you have added the following permissions to your PAT to support the webhook automation:

- Scopes: select all the repo, user, and admin:repo_hook options
- You should also be repo admin.

Now you can test your trigger with the configured git event successfully.
 
 
 

---
slug: fetch-execution-details-api
title: Fetching Execution Details Using Harness API
authors: [debabrata]
tags: [continuous-integration, continuous-delivery, delegates, api, execution, harness, cme]
---

Harness supports varieties of modules like Continuous Delivery and Continuous Integration to, build and deploy in one platform, to empower developers in software delivery and at the core of it lies the pipeline. A pipeline represents the start of your request to do work inside of Harness when it is triggered by a commit to your git repository or an API request against a project. A pipeline persists a stable pipeline ID along with details about the cause of the trigger, the actor to whom we will attribute the run of the pipeline, and the configuration used to run the workflows in the pipeline.

In this post, I’ll outline the steps to use Harness API([getExecutionDetailV2](https://apidocs.harness.io/tag/Pipeline-Execution-Details#operation/getExecutionDetailV2)) programmatically as a custom webhook to fetch pipeline execution details.

1. Create a custom webhook under triggers, for the pipeline you want to fetch execution details

    ![custom-webhook](website/blog/2022-11-11-fetch-execution-details-api/custom-webhook.png)

2. Copy the webhook URL as a curl command

    ![webhook-link](website/blog/2022-11-11-fetch-execution-details-api/webhook-link.png)
    
    The curl command would look like this:
    ```bash
    curl -X POST \-H 'content-type: application/json' \--url 'https://app.harness.io/gateway/api/webhook/custom?accountIdentifier=<account_identifier>&orgIdentifier=<org_identifier>&projectIdentifier=<project_identifier>&pipelineIdentifier=<pipeline_identifier>&triggerIdentifier=<trigger_identifier>' \-d '{}'
    ```

3. Now let’s look at an example to trigger pipeline using cURL

    ```bash
    curl -X POST \
    -H 'content-type: application/json' \
    --url 'https://app.harness.io/gateway/api/webhook/custom?accountIdentifier=kmpySmUISimoRrJL6NL73w&orgIdentifier=default&projectIdentifier=myproject&pipelineIdentifier=test&triggerIdentifier=myhook' \
    -d '{}'
    ```
    **Response:**

    ```bash
    {
    "status":"SUCCESS",
    "data":"62e2f35160958b611e494564",
    "metaData":null,
    "correlationId":"b452749f-9cb7-484a-a755-ec494dae6071"
    } 
    ```

4. The String returned in the data field is the “eventCorrelationId” for the trigger (“62e2f35160958b611e494564”).

    ```bash
     curl -X GET \
    --url 'https://app.harness.io/gateway/pipeline/api/webhook/triggerExecutionDetails/62e2f35160958b611e494564?accountIdentifier=kmpySmUISimoRrJL6NL73w'
    ```

    **Response:** The “data” field in the response will contain 2 fields:

    - “webhookProcessingDetails”: This is the data currently returned by 
    `/webhook/triggerExecutionDetails` API.
    - “executionDetails”: This is the same data currently returned by the 
    `/pipelines/execution/v2/` API.
   

    **Response Example:**
```bash
    {
  "status": "SUCCESS",
  "data": {
    "webhookProcessingDetails": {
      "eventFound": true,
      "eventId": "62eb058f11d58d120e940a5d",
      "accountIdentifier": "kmpySmUISimoRrJL6NL73w",
      "orgIdentifier": "default",
      "projectIdentifier": "myproject",
      "triggerIdentifier": "myhook",
      "pipelineIdentifier": "test",
      "pipelineExecutionId": "BOvtFC6xRReaPeJiOj2yvA",
      "exceptionOccured": false,
      "status": "TARGET_EXECUTION_REQUESTED",
      "message": "Pipeline execution was requested successfully",
      "payload": "{}",
      "eventCreatedAt": 1659569558794,
      "runtimeInput": "pipeline: {}\n"
    },
    "executionDetails": {
      "pipelineExecutionSummary": {
        "pipelineIdentifier": "test",
        "planExecutionId": "BOvtFC6xRReaPeJiOj2yvA",
        "name": "test",
        "status": "Expired",
        "tags": [],
        "executionTriggerInfo": { ... },
        "governanceMetadata": { ... },
        "moduleInfo": { ... }
        "layoutNodeMap": { ... },
        "modules": ["pms"],
        "startingNodeId": "Usu77wypQum1gB2hdur-8A",
        "startTs": 1659569558476,
        "endTs": 1659655962522,
        "createdAt": 1659569558663,
        "canRetry": true,
        "showRetryHistory": false,
        "runSequence": 9,
        "successfulStagesCount": 0,
        "runningStagesCount": 0,
        "failedStagesCount": 0,
        "totalStagesCount": 1,
        "executionInputConfigured": false,
        "allowStageExecutions": false,
        "stagesExecution": false
      }
    }
  },
  "metaData": null,
  "correlationId": "c793026a-a152-4377-ba97-b10d12f0df5d"
}
```

**The full data inside the “executionDetails” field of the response is omitted for brevity.** 

### Further Reading: 
For more information regarding fetching execution details using REST API, please follow our [documentation](https://docs.harness.io/article/qghequ5vxu-trigger-deployments-using-custom-triggers#get_deployment_status_using_rest). Also you could read more about custom triggers, to trigger the deployment on our [official docs](https://docs.harness.io/article/qghequ5vxu-trigger-deployments-using-custom-triggers#trigger-deployments-using-custom-triggers).



### Need further help? 

Feel free to ask questions at [community.harness.io](https://community.harness.io/c/harness/7) or  [join community slack](https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw) to chat with our engineers in product-specific channels like:

[#continuous-delivery](https://join.slack.com/share/enQtMzkwNjIzMDIxMDEwMy1mYjM2M2FlY2Y3ZWM5ZTRiMGM0MzI1ZTA2YzIxNDYzYjFiODVjZjZlZmE5ZTRmZmZlZjEzYWY1YzU4ODdmNmVj)  Get support regarding the CD Module of Harness.
[#continuous-integration](https://join.slack.com/share/enQtMzkyMzI1ODcxNzAxMi05MTI2M2VlNmVhZDY4NTlkM2JiODgxNWQ5NzY4NGU4MjE0MDQ1MDhlZTM0ZjA1ZjAyNjc3N2E4YmY2ZTc2YWY0) Get support regarding the CI Module of Harness.
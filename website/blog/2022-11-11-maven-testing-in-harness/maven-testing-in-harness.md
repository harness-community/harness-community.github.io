---
slug: maven-testing-in-harness-ci
title: Using Harness CI for Maven Testing
authors: [debabrata]
tags: [continuous-integration, harness, maven, cme]
---

### Introduction

In this tutorial, we will go through a step-by-step example, on how to use the Harness CI for Maven testing. 

#### Pre-Requisite:
[Docker Connector](https://docs.harness.io/article/u9bsd77g5a-docker-registry-connector-settings-reference#docker-connector-settings-reference) to fetch public Docker images of [maven chrome jdk8](https://hub.docker.com/r/rvancea/maven-chrome-jdk8)

Let’s now deepdive into the step-by-step tutorial, wherein we will now use the Harness SaaS platform to set-up the maven testing:

#### Step-1:
Start with the **build module**, and give it a name test, make sure to keep the clone codebase slider “off” as it is not required in this example.

#### Step-2:
Now let’s move to the next part of the pipeline, which is to select the infrastructure and select **harness hosted builds** under the same.

#### Step-3:
Moving on to the execution step, let’s add a **Run Step** and name it as “testrun” and under the container registry add the already created Docker Connector, and under the image add the “rvancea/maven-chrome-jdk8”. Now let’s add a shell command to run `mvn clean compile -DsuiteXmlFile=Batch1 test`  and apply the changes. 

![testrun](website/blog/2022-11-11-maven-testing-in-harness/testrun.png)

#### Step-4:
Now, let’s add another **Run Step** similar to the above and name it as reports, just here contrary to the above step the command changes to `find . -name "*.xml"`.

![filesgen](website/blog/2022-11-11-maven-testing-in-harness/filesgen.png)

#### Step-5:
It’s time to add the failure strategy now as a **Run Step**, with the following command.
```shell
actualFailedTestsStatus=<+execution.steps.testrun.status>
echo $actualFailedTestsStatus
if [ "$actualFailedTestsStatus" = "IGNORE_FAILED" ]
then
 echo "tests have failed"
 exit 1
else
 echo "Failure reruns have passed"
 exit 0
fi
```
![faliurestrat](website/blog/2022-11-11-maven-testing-in-harness/failurestrat.png)

#### Step-6:
Now, since the pipeline is complete, let’s save and run the same and the results looks like the following on the console logs.

![result](website/blog/2022-11-11-maven-testing-in-harness/result.png)

![reports](website/blog/2022-11-11-maven-testing-in-harness/reports.png)

Once the run is successful, the above list of files are generated and can be further stored and processed as the test reports. 

For, further reference following is the pipeline yaml of the above mentioned example

```yaml
pipeline:
  name: yaml
  identifier: yaml
  projectIdentifier: HarnessDemo1
  orgIdentifier: default
  tags: {}
  stages:
    - stage:
        name: test
        identifier: test
        type: CI
        spec:
          cloneCodebase: true
          infrastructure:
            type: KubernetesHosted
            spec:
              identifier: k8s-hosted-infra
          execution:
            steps:
              - step:
                  type: Run
                  name: testrun
                  identifier: testrun
                  spec:
                    connectorRef: account.harnessImage
                    image: rvancea/maven-chrome-jdk8
                    shell: Sh
                    command: |+
                      mvn clean compile -DsuiteXmlFile=Batch1 test

                    privileged: false
                    reports:
                      type: JUnit
                      spec:
                        paths:
                          - target/surefire-reports/junitreports/*.xml
                  failureStrategies:
                    - onFailure:
                        errors:
                          - AllErrors
                        action:
                          type: Ignore
              - step:
                  type: Run
                  name: reports
                  identifier: failstrat
                  spec:
                    connectorRef: account.harnessImage
                    image: rvancea/maven-chrome-jdk8
                    shell: Sh
                    command: find . -name "*.xml"
                  when:
                    stageStatus: All
                  failureStrategies: []
              - step:
                  type: Run
                  name: failstrategy
                  identifier: step3
                  spec:
                    connectorRef: account.harnessImage
                    image: rvancea/maven-chrome-jdk8
                    shell: Sh
                    command: |-
                      actualFailedTestsStatus=<+execution.steps.testrun.status>
                      echo $actualFailedTestsStatus
                      if [ "$actualFailedTestsStatus" = "IGNORE_FAILED" ]
                      then
                        echo "tests have failed"
                        exit 1
                      else 
                        echo "Failure reruns have passed"
                        exit 0
                      fi 
                  when:
                    stageStatus: All
                  failureStrategies: []
  properties:
    ci:
      codebase:
        connectorRef: harnessRud
        build: <+input> 
```
#### What’s Next?
The above pipeline and use case was the requirement of one our community user and was built according to their requirements by the community engineering team so, feel free to ask questions at [community.harness.io](https://community.harness.io/c/harness/7) or  [join community slack](https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw) to chat with our engineers in product-specific channels like:

- [#continuous-delivery](https://join.slack.com/share/enQtMzkwNjIzMDIxMDEwMy1mYjM2M2FlY2Y3ZWM5ZTRiMGM0MzI1ZTA2YzIxNDYzYjFiODVjZjZlZmE5ZTRmZmZlZjEzYWY1YzU4ODdmNmVj)  Get support regarding the CD Module of Harness.
- [#continuous-integration](https://join.slack.com/share/enQtMzkyMzI1ODcxNzAxMi05MTI2M2VlNmVhZDY4NTlkM2JiODgxNWQ5NzY4NGU4MjE0MDQ1MDhlZTM0ZjA1ZjAyNjc3N2E4YmY2ZTc2YWY0) Get support regarding the CI Module of Harness.
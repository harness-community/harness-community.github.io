# Nodejs Starter Workflow Sample

## Node Example

This guide covers configuring continuous integration pipelines for a Node starter workflow in Harness CI. If you’re new to Harness CI, start with Onboarding Guide and Nodejs Sample Pipeline Build Configuration Guides.

**Github Repository: [Click Here](https://github.com/harness-community/nodejs-pipeline-samples)**

**Checkout the Pipeline YAML File: [Click Here](https://github.com/harness-community/nodejs-pipeline-samples/blob/main/.harness/nodejsstarterpipeline.yaml)**

---

### Build & Test

In the below example we demonstrate the YAML snippet that executes npm install command. This command runs under the Harness Hosted Builds Infrastructure. We create a Dockerfile & the use the Build & Push an image to Dockerhub step to push the image to the defined Docker Registry. We use ```node:14``` as the base image to create the Dockerfile but you can use other node images from the official releases as well.



```yaml
    - stage:
        name: build test and run
        identifier: build_test_and_run
        description: ""
        type: CI
        spec:
          cloneCodebase: true
          execution:
            steps:
              - step:
                  type: Run
                  name: install node modules
                  identifier: install_node_modules
                  spec:
                    shell: Sh
                    command: npm install
              - step:
                  type: Run
                  name: create image
                  identifier: create_image
                  spec:
                    shell: Sh
                    command: |-
                      touch nodejsdockerfile
                      cat > nodejsdockerfile <<- EOM
                      FROM node:14
                      WORKDIR /nodejshelloworld
                      COPY package*.json index.js ./
                      RUN npm install
                      EXPOSE 8080
                      CMD ["node", "index.js"]
                      EOM
                      cat nodejsdockerfile
              - step:
                  type: BuildAndPushDockerRegistry
                  name: build and push an image to docker
                  identifier: build_and_push_an_image_to_docker
                  spec:
                    connectorRef: <+input>
                    repo: <+input>
                    tags:
                      - latest
                    dockerfile: Dockerfile
          platform:
            os: Linux
            arch: Amd64
          runtime:
            type: Cloud
            spec: {}
```

Please note that you can use any Docker image in your pipeline from any Docker registry. You can use the official node images, or your can bring your own.

---

### Integration Test

You can use Harness CI's Background Step feature for running services that need to run for the entire lifetime of a Build stage. For example you can set up your pipeline to run multiple background services that implement a local, multi-service app. In this case we will use a background step & then a execute a simple run step for health check of the server connection.

```yaml
    - stage:
        name: integration test
        identifier: integration_test
        type: CI
        spec:
          cloneCodebase: false
          infrastructure:
            useFromStage: build_test_and_run
          execution:
            steps:
              - step:
                  type: Background
                  name: nodejs server
                  identifier: nodejs_server
                  spec:
                    connectorRef: <+input>
                    image: <+input>
                    shell: Sh
                    command: |-
                      cd /nodejshelloworld
                      node index.js
              - step:
                  type: Run
                  name: test connection to server
                  identifier: test_connection_to_server
                  spec:
                    connectorRef: account.harnessImage
                    image: curlimages/curl:7.73.0
                    shell: Sh
                    command: |-
                      sleep 10
                      curl nodejs_server:8080
```

---

### Youtube Tutorial

<div className="iframe-wrapper">
<iframe src="https://www.youtube.com/embed/r1GLYtOmJmM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen > </iframe>
</div>


---

### Questions?

We are always happy to help with questions you might have. Search our **[documentation](docs.harness.io)** or check out answers to common questions. You can also post questions or comments to our **[community forum](community.harness.io)** or **[Slack](https://join.slack.com/t/harnesscommunity/shared_invite/zt-1ioxzr5vo-j8ljQkiTFxoRk8vBT~q8yQ)**.



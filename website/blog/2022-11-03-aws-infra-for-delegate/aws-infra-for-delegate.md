---
slug: aws-infra-for-delegates
title: Provision Azure Infrastructure for Delegates
authors: [debabrata]
tags: [continuous-integration, continuous-delivery, delegates, harness, cme]
---

This tutorial aims at enabling users to set up a Kubernetes cluster on AWS and will serve as the foundation for your CI/CD pipeline infrastructure. After the infrastructure is ready on a free account, you can proceed to create and install a Delegate. 

### Credits for AWS

To avail free credits in AWS please follow the following resources:
- https://www.lastweekinaws.com/blog/how-to-get-free-aws-credits-4-tactics-to-use/
- https://www.argonaut.dev/blog/aws-free-credits

If you are a student please sign in using [AWS Educate](https://aws.amazon.com/education/awseducate/)

> **Note:**
>Under the AWS Free tier the EKS service is not available, so it’s suggested to get some free credits and use them for EKS. 

### Pre-requisites:
There are certain requirements in terms of [access and permissions](https://docs.harness.io/article/2132l9r4gt#permissions) and [memory resources](https://docs.harness.io/article/2132l9r4gt#compute_resources) for the delegate to function properly. 

### Creating a Cluster: 
Considering you are a first-time user, please consider the following specifications along with the above prerequisites, while creating a cluster:
- **Number of nodes:** minimum of 3.
- **Machine type:** 4vCPU
- **Memory:** 12GB RAM and 6GB Disk Space. 8GB RAM is for the Delegate. The remaining memory is for Kubernetes and containers.
- **Networking:** Outbound HTTPS for the Harness connection, and to connect to any container image repo. Allow TCP port 22 for SSH.

For creating a cluster follow the steps mentioned in the [documentation](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html), also you can take the help of the demo in the video below. 

<div className="iframe-wrapper">
<iframe
    src="https://www.youtube.com/embed/p6xDCz00TxU"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

You will be able to see your cluster, after creation on the management console, like the picture below. 

![AWS Dashboard](website/blog/2022-11-03-aws-infra-for-delegate/aws-dashboard.png)

### Authenticate to the cluster:
1. Open a terminal and navigate to where the Delegate file is located.
2. You will connect to your cluster using the terminal so you can simply run the YAML file on the cluster.

![AWS Access](website/blog/2022-11-03-aws-infra-for-delegate/aws-access.png)

3. In the same terminal, log into your Kubernetes cluster. In most platforms, you select the cluster, click Connect, and copy the access command.

![AWS Configure](website/blog/2022-11-03-aws-infra-for-delegate/aws-configure.png)

4. Next, install the Harness Delegate using the harness-delegate.yaml file you just downloaded. In the terminal connected to your cluster, run this command:
    
    ```ssh
    kubectl apply -f harness-delegate.yml
    ```
5. The successful output would look like this

![delegate-install](website/blog/2022-11-03-aws-infra-for-delegate/delegate-install.png)

6. To validate run the following command and check.

    ```ssh
    deba@Debabrata Panigrahi Downloads % kubectl get namespaces
    NAME                  STATUS   AGE
    default               Active   29h
    harness-delegate-ng   Active   24m
    kube-node-lease       Active   29h
    kube-public           Active   29h
    kube-system           Active   29h
    ```

Also, you could check for pods under your AWS cluster to find the delegate

![delegate pods](website/blog/2022-11-03-aws-infra-for-delegate/delegate-pods.png)

7. Now that your cluster is operational, you may add resources to it by using the kubectl utility, as you can see. Please use [Start Deploying in 5 Minutes with a Delegate-first Approach](https://www.harness.io/technical-blog/deploy-in-5-minutes-with-a-delegate-first-approach) tutorial to install Delegate at this time and move forward with creating your CI/CD pipeline.

> **Warning:**
> You have to exit the present pipeline without saving to view delegate details/continue with further steps.


8. You could check about your delegates on the dashboard under Project Setup.

![check-delegate](website/blog/2022-11-03-aws-infra-for-delegate/check-delegate.png)

9. The delegate details would look something similar to this

![delegate-available](website/blog/2022-11-03-aws-infra-for-delegate/delegate-available.png)

> **Note:**
> Apart from the above mentioned way, there are other ways to install delegate on AWS, for eg using EC2. 

### Need further help? 

Feel free to ask questions at [community.harness.io](https://community.harness.io/c/harness/7) or  [join community slack](https://join.slack.com/t/harnesscommunity/shared_invite/zt-y4hdqh7p-RVuEQyIl5Hcx4Ck8VCvzBw) to chat with our engineers in product-specific channels like:

[#continuous-delivery](https://join.slack.com/share/enQtMzkwNjIzMDIxMDEwMy1mYjM2M2FlY2Y3ZWM5ZTRiMGM0MzI1ZTA2YzIxNDYzYjFiODVjZjZlZmE5ZTRmZmZlZjEzYWY1YzU4ODdmNmVj)  Get support regarding the CD Module of Harness.
[#continuous-integration](https://join.slack.com/share/enQtMzkyMzI1ODcxNzAxMi05MTI2M2VlNmVhZDY4NTlkM2JiODgxNWQ5NzY4NGU4MjE0MDQ1MDhlZTM0ZjA1ZjAyNjc3N2E4YmY2ZTc2YWY0) Get support regarding the CI Module of Harness.




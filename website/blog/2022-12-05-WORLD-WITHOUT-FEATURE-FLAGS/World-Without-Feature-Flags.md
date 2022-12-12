# World without Feature Flags 

In a recent survey, we saw that developers spend 30-40% of their time writing codes, now the question arises of where the rest of 70-60% of the time goes. It is spent managing features, fixing deployment issues, and reporting to various stakeholders when things go wrong.

There is a common solution to all these use cases i.e **Feature Flags**. 

Feature Flags are nothing but conditional statements (think of them as an if-else statement), which is what makes them so adaptable in the ways that they solve many use cases that we are going to discuss further in the blog. 

![](feature-flags-best-practices-meme-1.jpg)

With this, I am going to discuss a few use cases in this blog and will be seeing how a particular use case is without FF and then see how it can be done with **Harness Feature Flags**. 

## 1. User Targeting 

User Targeting allows only subsets of user access to a particular feature. This could be a single customer who has requested a new feature or even it can be used for things like only paying customers will have access to a particular feature.

### Without Feature Flags 

In order to target users, devs have to stand up some way to recognize a user based on attributes and then build a mechanism to only show them that feature. This can be done using a combination of runtime environment variables and backend database entries. Usually, these requests come from the customer-facing team and sales. For developers to field these request means taking time out to properly understand who target users are, and what attributes define them and then testing the changes performed in the lower level environment to make sure nothing unusual happens and then pushing the code live and sometimes the app or service needs to be restarted again for these changes to take effect. 

### With Harness Feature Flags 

Harness Feature Flag provides the basic user targeting capabilities that product development teams are looking for and additionally lets you automate the process with progressive delivery: roll out to small user groups, verify behavior, manage changes, expand user groups and repeat until you reach 100%. 

When you create a Feature Flag in Harness, you will be asked to select the type of flag you want to use, and then you will be prompted to define user attributes that will determine whether the feature will be available to them or not. This targeting can be done in the code via the developer or in the UI by a non-developer and the changes will sync instantly.

## 2. Testing in Production 

One cannot validate a feature unless and until it's live in front of real-time users - **something you can not replicate in pre-prod**. Without a technique to test in production with real-time users, you might take 3-4x as long to release the feature to the customers.

### Without Feature Flag 

Without Feature Flags, testing a new feature is the same as deploying a completed feature to production. That is super stressful, especially if you are making a major change like overhauling the UI or migrating to a new database. I am sure you don't want a new ticket telling you that your implementation was wrong and that you need to redo it. You just don't know what is going to actually happen in production and that is a tough reality. 

### With Harness Feature Flag 

How you want to test in production with Harness depends on what kind of feature you are planning to test. There are some common things Harness helps with as you instrument and run your tests.

- First, you have flag evaluation metrics which will be helpful to see how often a flag is being evaluated, by which sets of target groups, who are making the changes internally, and what changes are being made. 

- Second, If you know you want to test the feature, you can automate the setup of these tests using a pipeline that sequentially setups and runs for a defined amount of time. You can say, you want to test a feature with 10% of users for 2-3 days after getting approval from you, and then roll it out to different 25% of users with slight variation and repeat this until the test is completed. 

## 3. Trunk-Based Deployment

In trunk-based development, each developer divides their work into small batches and merges that into the trunk at least once or several times a day.

## Without Feature Flag 

Suppose a feature that is being developed takes more than one sprint. There are two options:-

1. Merge the unfinished code to master making sure nothing breaks. 
2. Let the branch be there for a long and risk the code base changing significantly by the time PR is raised and deal with merge conflicts.

Both of the above two scenarios aren't ideal because they take a significant amount of devs' time for something that isn't core to the job and also a lot of risks are involved if something breaks in the productions side of the house then a lot of rework is needed to once again separate the code. 

## With Harness Feature Flag

Once a new code is wrapped up inside a feature flag it enters a safe one and won't cause disruptions in the main application and it simplifies both scenarios discussed above. 

At its core, Harness Feature Flags by virtue of being used enables trunk-based development. Harness makes it easy by ensuring all releases meet governance standards no matter how small or large is the change. Also, you can set up your own governance guardrails as part of your feature release pipeline to ensure every time the feature is merged into the main trunk and set for release it can be run against a release pipeline to make sure it meets standards and reduce the risk associated. And for the code sitting around for a while, Harness also calls out stale flags so that they can be removed from the system altogether. 


## Conclusion 

Feature Flags for sure is a powerful addition to agile development and give teams more control of their codebase and also end-to-end experience. 

So, what you are waiting for visit [Harness](https://app.harness.io/auth/#/signin) and try out Harness Feature flags.

You can also visit [Harness docs](https://docs.harness.io/category/vjolt35atg-feature-flags) to learn more about Feature Flags as well as learn how you can use them in your applications.

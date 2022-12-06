# World without Feature Flags 

In recent survey, we saw that developers spend 30-40% of their time writing codes, now the question arises where the rest 70-60% time goes? It is spent managing features, fixing deployment issues, reporting to various stakeholders when things go wrong.

There is a common solution to all these use cases i.e **Feature Flags**. 

Feature Flags are nothing but conditional statement(think of it as a if-else statement), which is what makes them so adaptable in the ways that they solve many use cases that we are going to discuss further in the blog. 

![](feature-flags-best-practices-meme-1.jpg)

With this, I am going to discuss few use cases in this blog and will be seeing how a particular use case is without FF and then see how it can be done with **Harness Feature Flags**. 

## 1. User Targeting 

User Targeting allows only subsets of user's access to a particular feature.This could be a single customer who has requested for a new feature or even it can be used for things like only paying customers will have access to a particular feature.

### Without Feature Flags 

In order to target users, devs hae to stand up some way to recognize a user based on attributes and then build a mechanism to only show them that feature.This can be done using a combination of runtime environment variables an backend database enteries. Usually,these crequests come from the customer-facing team, sales. For developers to field these request means taking time out to properly understand who target users are, what attributes defines them and then testing the changes performed in the lower level environment to make sure nothing unusual happens and then pushing the code live and sometimes the app or service needs to be restarted again for these changes to take effect. 

### With Harness Feature Flags 

Harness Feature Flag provides the basic user targeting capabilities that product development teams are looking for and additionaly lets you automate the process with progressive delivery: roll out to small user groups, verify behaviour, manage chnages, expand user group and repeat until you reach 100%. 

Whe you create a Feature Flag in Harness, you will be asked to select the type of flag you want to use and then you will be prompted to define user attributes that will determine whether the feature will be avaiable to them or not.This targeting can be done in the code via developer or in the UI by non-developer and the changes will sync instantly.

## 2. Testing in Production 

One cannot validate a feature unless and until it's live in front of real time users - **something you can not replicate in pre-prod**. Without a technique to test in production with real time users, you might take 3-4x as long to release the feature to the customers.

### Without Feature Flag 

Without Feature Flags, testing a new feature is same as deploying a completed feature to the production. That is super sresful, especially if your are making major change like overhauling the UI or migrating to a new database. I am sure you don't want a new ticket telling you that your implementation was wrong and you need to redo it. You just don't know what is going to actually happen in production and that is a tough reality. 

### With Harness Feature Flag 

How you want to test in production with Harness depends on what kind of feature you are planning to test. There are some common things Harness helps with as you instrument and run your tests.

- First, you have a flag evaluation metrics which will be helpful to see how often a flag is being evaluated, by which which sets of target group, who is making the changes internally and what changes are being made. 

- Second,If you know you wat to test the feature, you can automate the setup of these tests using a pipeline that sequentially setups and runs for defined amount of time. You can say, you want to test a feature with 10% of users for 2-3 days and after getting an approval from you, and then roll it out to different 25% of users with slight variation and repeat this until the test is completed. 

## 3. Trunk-Based Deployment

In trunk-based development each developer divides their work into small batches and merge that into the trunk atleast once or several time in a day.

## Without Feature Flag 

Suppose a feature that is being developed takes more than one sprint. There are two options:-

1. Merge the unfinished code to master making sure nothing breaks. 
2. Let the branch be there for long and risk the code base changing significantly by the time PR is raised and deal with merge coonflicts.

Both of the above two scenerios aren't ideal because they take significat amount fo devs time for something that isn't core to the job and also alot of risk is involved and if something breaks in productions side of the house then lot of rework is needed to once again seperate the code. 

## With Harness Feature Flag

Once a new code is wrapped up inside a feture flag it enters a safe one and won't cause disruptions in the main application and it simplifies the both scenerios discusssed above. 

At it's core, Harness Feature Flags by virtue of being used, enables trunk based development. Harness makes it easy by ensuing all releases meet governance standards no matter how small or large is the change. Also you can setup your own governance gaurdtrails as part your feature release pipeline to ensure everytime the feature is merged into the main trunk and set for release it can be run against a release pipeline to make sure it meets standards and reduce the risk assoicated. And for the code sitting around for a while, Harness also calls out stale flags so that they can be removed from the system altogether. 


## Conclusion 

Feature Flags for sure is a powerful addition to agile development and give teams more control of their codebase and also end to end experience. 

So, what you are waiting for visit [Harness](https://app.harness.io/auth/#/signin) and try out Harness Feature flags.

You can also visit [Harness docs](https://docs.harness.io/category/vjolt35atg-feature-flags) to learn more on Feature Flags as well as learn how you can use it in your application.







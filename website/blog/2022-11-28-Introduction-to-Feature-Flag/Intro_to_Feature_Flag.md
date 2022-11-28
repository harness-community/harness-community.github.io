# Introduction to Feature Flags

## What is Feature Toggeles/Feature Flags?

Feature Toggles also called as Feature Flags are a powerful technique, allowing teams to modify system behaviour without chnaging the code.It is a set of patterns which can help a team to deliver a new functionality to users rapidly but safely. They are great for better control and experimentation of features.

## Why Should we use Feature Flags?

- One should use feature flag as part of their regular development process.Any time you release a feature you should wrap it in a feature flag to test it,control who has access to it and gradually roll out to the users. 

- One of the biggest challenge product development team faces is delivering and controlling new features. With continous delivert and feature flag management a team can launch and control their features.

- In Feature flags you can run canary testing, which is a technique that allows a team to test a new feature on a subgroup of new users and see how it is performing before rolling the feature out to wider audience.

- Featue flags allows you to instantly toggles between different version of your product. It allows to modify your system behaviour without making disruptive code chnages. 

## What are the best practices to adapt while using Feature Flags?

- **Using standardization naming scheme**:- People in organization could start naming the flags with same name and gettings flags mixed up which could result in activating the wrong flag leading to potential disruptions in your system. 

- **Control access to flags**:- Setup logging to now which change was made by who, which is important for reducing dependency between the product and engineering team and there will be better productivity a their will be transparency when it comes to making new chnages. 

- **Conduct regular cleanups for your flags**: You need to make sure you are removing flags every now and then which are no longer in use. 

## Why to use Harness Feature Flags?

Harness Feature Flags is made specifically for developers and designed to be fast and easy to use. 

Some salient features are:-

1. **Simple UI-Based feature release workflows**:- Users have the ability to create templates that they can standardize across feature flags that have the same operational needs. 

2. **Governance and Verification**:- Users can ensure production pushes always meet defined organizational standard, and that they can minimize the negative impact of any issues in prod. In addition, users can also automate service verification once a feature is out, ensuring if an issue occurs, the feature is turned off to minimize impact. 

3. **Integeration into CI/CD/2+2=5**:- By preseting feature flag as a pipeline,feature flag management becomes a natureal step in everyday workflow of development teams and is integrated into CI/CD as an unified pipeline.

4. **Management and Governance**: Letting team build rules and processes and automating cleanups and flag lifecycle management.Ensuring teams can keep their systems secure,compliant and standardized wherever posssible is crtical to their goals.















# Introduction to Feature Flags

## What are Feature Toggles/Feature Flags?

Feature Toggles also called Feature Flags are a powerful technique, that allows teams to modify system behavior without changing the code. It is a set of patterns that can help deliver new functionality to users rapidly but safely. They are great for better control and experimentation of features.

## Why Should we use Feature Flags?

- One should use feature flags as part of their regular development process. Any time you release a feature you should wrap it in a feature flag to test it, control who has access to it and gradually roll it out to the users. 

- One of the biggest challenges the product development team faces is delivering and controlling new features. With continuous delivery and feature flag management, a team can launch and control its features.

- In Feature flags, you can run canary testing, a technique that allows a team to test a new feature on a subgroup of new users and see how it is performing before rolling the feature out to a wider audience.

- Feature flags allow you to instantly toggle between different versions of your product. It allows modifying your system behavior without making disruptive code changes. 

## What are the best practices to adopt while using Feature Flags?

- **Using standardization naming scheme**:- People in the organization could start naming the flags with the same name and gettings flags mixed up which could result in activating the wrong flag leading to potential disruptions in your system. 

- **Control access to flags**:- Set up logging to know which change was made by who, which is important for reducing dependency between the product and engineering team and there will be better productivity a there will be transparency when it comes to making new changes. 

- **Conduct regular cleanups for your flags**: You need to make sure you are removing flags every now and then which are no longer in use. 

## Why use Harness Feature Flags?

Harness Feature Flags is made specifically for developers and designed to be fast and easy to use. 

Some salient features are:-

1. **Simple UI-Based feature release workflows**:- Users have the ability to create templates that they can standardize across feature flags that have the exact operational needs. 

2. **Governance and Verification**:- Users can ensure production pushes always meet defined organizational standards, and that they can minimize the negative impact of any issues in prod. In addition, users can also automate service verification once a feature is out, ensuring if an issue occurs, the feature is turned off to minimize impact. 

3. **Integration into CI/CD/2+2=5**:- By presenting the feature flag as a pipeline, feature flag management becomes a natural step in the everyday workflow of development teams and is integrated into CI/CD as a unified pipeline.

4. **Management and Governance**: Letting the team build rules and processes and automating cleanups and flag lifecycle management. Ensuring teams can keep their systems secure, compliant, and standardized wherever possible is critical to their goals.

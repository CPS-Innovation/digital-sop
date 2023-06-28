# How to get started as a developer/development team

## What are the CPS Development Principles

We follow the Central Digital and Data Office [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice#be-open-and-use-open-source)

## What environment do I use for development, and how do I get one?

All development work at CPS must be performed on CPS-provided laptops. To install the required tools on your laptop, you will need local admin access.

To request admin access:

Raise a ticket through [Request Admin access](https://cpsprod1.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=47594fa61b861510729e42a7b04bcbb1).

In the business justification field, specify that you require local admin access for development purposes. 

Provide details about your project, etc.

Please note that your admin account (e.g., username@CPSGOVUK.onmicrosoft.com) will grant you the permissions necessary to install software.

## What development tools can I use?

These are listed in the [starndards section](../../../docs/standards/archtecture/Accepted-Software/code-development.md)
Required Software Tools

A software audit is performed on the machines to help remind people when they forget to use the approved set of tools

## What code repositories do I use, and how do I get access?

CPS source code in GitLab repositories. Here's how you can gain access:

Sign up for a GitLab account if you don't have one.

Share your GitLab username with our GitLab admin, who will grant you access to the relevant CPS repositories.

Please be mindful of the security guidelines and best practices when accessing and working with our code repositories.


## How do I get started with a new repo and pipeline



## How do I get privileged access permissions today, and in the future
Actually the model is different but fine, Modern Workplace  (Russ’s team) and SIAD Michael will ask them to write the model down.

Today this is piece-meal and cumulative. We want to move to a model with standard role profiles and short-term elevations.

Today no distinction between Production AD and Non Production AD(Test and Development accounts). Everything is built upon one AD group.

Just like we require an onboarding process, we also require an offboarding process - where access is revoked.

A single identity that is used end-end rather than the now (user identity and admin identity that is used for giving access in Azure)

## What product provides Identity Management

Azure AD

## How do I manage infrastructure resources e.g. create, update and delete
Today we are operating as multi-disciplinary teams with Cloud Platform Engineers embedded within the development teams.

In the future we could move to a model where there are self-service templates for infrastructure and platform services commonly available to all application development teams

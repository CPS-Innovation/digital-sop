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

These are listed in the [starndards section](../../standards/architecture/development-standards.md)
Required Software Tools
Visual Studio 2022: Integrated Development Environment (IDE) for C# and .NET development.

Visual Studio Code: A lightweight yet powerful code editor ideal for scripting, debugging, and more. You may opt to use this for development if you prefer.

Ngrok: This utility helps expose local servers behind NATs and firewalls to the public internet via secure tunnels. It's useful for testing in development environment.

Postman: An essential tool for working with APIs. Use Postman to test API endpoints and understand their behaviour.

F12 DevTools: An essential tool for browser debugging. 

Please refer to the following Microsoft Edge Development resources for more details: Overview of DevTools

 

A software audit is performed on the machines to help remind people when they forget to use the approved set of tools

CPS Architecture Principles & Guardrails - Architecture Knowledge base - Confluence (atlassian.net)

What code repositories do I use, and how do I get access?
We implement the GDS Technology Code of Practice principle Be open and use open source - GOV.UK (Welcome to GOV.UK ) in particular:

Developer question

Cloud Native AWS

Cloud Native Azure

Third-party Product

Notes

What Tool do we use for Public Code Management

-

Azure Devops

gitlab

We have different tools in different environments. And that is okay so long as it is public

What Tool do we use for Private Code Management

 

 

 

Probably CGI host a private Git – Michael to check

What Tool do we use for Public Code Pipelines

-

Azure Devops

gitlab - advanced ci/cd pipelines

We have different tools in different environments. And that is okay so long as it is public

How do I get started with an existing repo and pipeline?

 

 

 

If we have common standard method for code repository and build pipelines, platform service - Developers can just concentrate on delivering their functionality, rather than thinking about where to store, and how to build and Environment to build.

How do I get started with a new repo and pipeline

 

 

 

 

What products do we use for Bastion servers

 

 

 

Not currently needed in the architecture because 2 factor is enforced on hardened devices, which we think is a better risk mitigation than an open Bastion Server

 Source Code Access through GitLab

CPS source code in GitLab repositories. Here's how you can gain access:

Sign up for a GitLab account if you don't have one.

Share your GitLab username with our GitLab admin, who will grant you access to the relevant CPS repositories.

Please be mindful of the security guidelines and best practices when accessing and working with our code repositories.

How do I get privileged access permissions today, and in the future
Actually the model is different but fine, Modern Workplace  (Russ’s team) and SIAD Michael will ask them to write the model down.

Today this is piece-meal and cumulative. We want to move to a model with standard role profiles and short-term elevations.

Developer question

Cloud Native AWS

Cloud Native Azure

Third-party Product

Notes

How do I get privileged accesses

 

 

 

Today no distinction between Production AD and Non Production AD(Test and Development accounts). Everything is built upon one AD group.

Just like we require an onboarding process, we also require an offboarding process - where access is revoked.

A single identity that is used end-end rather than the now (user identity and admin identity that is used for giving access in Azure)

What are the developer access permission profiles?

 

 

 

To be defined

What product provides Identity Management

 

Azure AD

 

 

 

How do I manage infrastructure resources e.g. create, update and delete
Today we are operating as multi-disciplinary teams with Cloud Platform Engineers embedded within the development teams.

In the future we could move to a model where there are self-service templates for infrastructure and platform services commonly available to all application development teams

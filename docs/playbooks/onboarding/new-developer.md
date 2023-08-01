# How to get started as a developer

This playbook covers

* CPS Development Principles
* What environment do I use for development, and how do I get one?
* What development tools can I use?
* What code repositories do I use and how do I get access
* How do I get privileged access permissions
* How do I manage infrastructure resources e.g. create, update and delete

## Development Principles

We follow the Central Digital and Data Office [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice#be-open-and-use-open-source).

## Development Environments

All development work at CPS must be performed on CPS-provided laptops. To install the required tools on your laptop, you
will need local admin access.

To request admin access:

Raise a ticket through [Request Admin access](https://cpsprod1.service-now.com/esc?id=sc_cat_item&table=sc_cat_item&sys_id=47594fa61b861510729e42a7b04bcbb1).

In the business justification field, specify that you require local admin access for development purposes. 

Provide details about your project, etc.

Please note that your admin account (e.g., username@CPSGOVUK.onmicrosoft.com) will grant you the permissions necessary 
to install software.

## Development Tools

Software is listed in the [standards section](../../standards/archtecture/Accepted-Software/code-development.md)
Required Software Tools.

A software audit is performed on the machines to help remind people when they forget to use the approved set of tools

Developers are supplied with one of the following models of laptop. 

| Model  | CPU  | RAM | Hard drive | 
|:---|:---:|:---:|:---:|
| Surface 3 | i7-1065G7 | 16 GB | 256 GB | 
| Surface 4 | i7-1185G7 | 16 GB | 256 GB |
| Surface 5 | i7-1255U | 16 GB | 256 GB |

You will also receive 

* 1 x USB-C travel hub
* 1 x USB 4 port hub
* 1 x power cord
* 1 x printer fob
* Setup instructions

## Access to Repositories

As per the [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice#be-open-and-use-open-source) 
we will "Publish ... code and use open source to improve transparency, flexibility and accountability". The specific 
products are listed in the [standards section](../../standards/archtecture/Accepted-Software/code-development.md). 
Currently, this includes GitHub and GitLab.

### GitHub

If you do not have a GitHub account, sign up for [a free account](https://github.com/signup) using your CPS email 
address.

If you already have a GitHub account, be sure to [add your CPS email address to it](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).

Share your GitHub username with our GitHub admin who will grant you access to the relevant CPS repositories.

Ask the modern workplace team to add you to the Azure AD group to allow authentication to the repo

### GitLab

Soon CPS will be providing Gitlab licences, in the meantime:

If you do not have a GitLab account, sign up for a [free GitLab account](https://gitlab.com/users/sign_up).

If you do have a GitLab account, be sure to add your CPS email address to it.

Share your GitLab username with our GitLab admin who will grant you access to the relevant CPS repositories.

## Current Repositories

* [Polaris](https://github.com/CPS-Innovation/Polaris)
* [WitEx Prototype](https://github.com/CPS-Innovation/witexprototype)

Coming soon a link to the repos for LowCode and Email Automation.


## Privileged Access

Actually the model is different but fine, we will ask Modern Workplace and SIAD to explain why. However, today it can
feel a little  piece-meal and cumulative. We want to move to a model with standard role profiles and short-term
elevations.

## Identity Management

Azure AD

## Managing Infrastructure

Today we are operating as multidisciplinary teams with Cloud Platform Engineers embedded within the development teams.

In the future we could move to a model where there are self-service templates for infrastructure and platform services 
commonly available to all application development teams

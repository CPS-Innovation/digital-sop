# New API Criteria

## Criteria for Creating a New API

New APIs **must** meet the following criteria before being considered for development.

> Your API fulfills an established need.

* The API supports one or more services that provide value to users.
* The APIs scope is too distinct for inclusion in an existing API.

## Criteria for Going to Production

> Your API source code is public.

* Publish your application source code using a public git repository.
* Use open source code to improve transparency, flexibility and accountability.
* When using open source code, ensure you attribute its source and contribute improvements back to the community.

> Your API meets security guidelines.

* Authentication is via OAuth 2.0 and Azure AD.
* User permissions are granted via Azure AD group membership.
* Access control operates at the endpoint, model or property level.
* API to API access keys are never stored unencrypted.
* All API traffic must be encrypted.

> Your API minimises data collection.

* Reuse or extend existing APIs to avoid duplication of datasets.
* You have permission to use the data stored or processed by the API.
* You ensure that any services or downstream APIs also have permission to use and process the data.

> You have an established support plan.

* You have identified a product owner for the API.
* You have identified which team is responsible for:
    * Iterating and improving the API frequently.
    * Continually scanning for and remediating security vulnerabilities.
    * Monitoring the API and responding to alerts and incidents.
    * Optimise the performance of all parts of the API.
* You have an incident response plan that is documented and can be accessed by all team members, security and 
  operations.
* You have a plan to decommission the API should it no longer provide value.

> You have identified how to measure the success of the API.

* You **must** record: number of requests, number of **active** integrated services, cost per request, average
  response time, availability. 
* You combine metrics with user research to understand where improvements can be made.
* You monitor for downtime using canary requests from external services.

> Your API is clearly documented.

* Publishes documentation using the OpenAPI standard.
* Meets our API design principles and naming conventions.

> Your API is tested, then deployed.

* Ideally, Acceptance Test Driven Development (ATDD) is used to create the API.
* Acceptance, Integration, Unit and Security tests are run whenever new code is added.
* No production code is written without tests that cover its functionality.
* When changes are merged into the main branch of source code they are tested, then deployed to staging and
  production environments.

> You deploy to several environments.

* Functionally, staging and production environments are the same.
* A sandbox environment exists to aid in developing integrations.


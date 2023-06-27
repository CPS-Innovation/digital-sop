# System Components


## Event Driven Message Bus

Standard
:    [Kafka 3.4.0](https://kafka.apache.org/)

     RabbitMQ


## Dev tool collections

Standard
:    [DevToys v1.0.10.0](https://devtoys.app/)


## Remote access

Standard
:    [mRemoteNG 1.76.20 or 1.77.1 and later](https://mremoteng.org/)


## C# Code Execution

Standard
:    Kestrel with a suitable reverse proxy such as IIS Kestrel fundamentals

     [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

Experimental
:    [NGINX 1.23.3](https://www.nginx.com/)

Deprecated
:    .NET 6 and all previous versions


## Operating Systems

Standard
:    Windows Server 2022 Windows Server 2022

     [Red Hat Enterprise Linux v8](https://www.redhat.com/)

     [Oracle Enterprise Linux](https://www.oracle.com/uk/linux/)

Experimental
:    [Alpine Linux](https://www.alpinelinux.org/)

     [Ubuntu Linux](https://ubuntu.com/)

Deprecated
:    Windows Server 2019

     Windows Server 2016

     Red Hat Enterprise Linux v7

Prohibited
:    Windows Server 2012R2

     Windows Server 2012 and previous versions


## Continuous Integration / Continuous Delivery

Standard
:    [GitLab CI](https://docs.gitlab.com/ee/ci/)

     [Jenkins](https://www.jenkins.io/)


## Supply chain auditing

Standard
:    [Snyk](https://snyk.io/)


## Interface development

### SOAP

Standard
:    [Smartbear](https://smartbear.com/)

### Restful interfaces

Standard
:    [Postman](https://www.postman.com/)


## User Interface Frameworks

Standard
:    [Node.js 18.15.0](https://nodejs.org/en)

     [AngularJS](https://angularjs.org/)


## Deployment


### Manual

Standard
:    [Webdeploy](https://www.iis.net/downloads/microsoft/web-deploy)

## Bastion Servers

Bastion servers are not used in the CPS architecture because there are alternative methods to secure access from
designated users and equipment which mean that bastion servers are unneeded.

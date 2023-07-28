---
title: Software Systems
tags:
  - Architecture
  - Engineering
  - Software Development
---

# Why Diagram Software?

During developing a software solution engineers must communicate the place of a system within a wider portfolio, the
context of the system, and the components that make up that system. While written communication is widely used, it can 
lead to differing mental models of a software system.

This is where effective diagramming comes in, presenting abstracted contextual views of the software system. These views 
will enable technical and non-technical participants to have a shared vision of the system and aid in discussing issues
that present themselves during development.

To ensure diagrams clearly communicate the intended contextual information it's a good idea to assess diagrams for 
clarity. The [C4 Diagram Bingo card](https://c4model.com/bingo/) can make assessing diagrams more engaging.

For more information on C4 diagramming see [the C4 website](https://c4model.com/).

## Core Diagrams

The core diagrams describe the system in abstract terms and focus on the context, containers and components of the
system. C4 modelling includes more diagram types, but some place an additional maintenance burden on developers that
is not outweighed by the information conveyed.

### Context Diagram

The context diagram shows the high level parts of the system, users that interact with them, and the external or 
third-party systems integrated with the system.

Detail isn't important here as this is your zoomed out view showing a big picture of the system landscape. The focus 
should be on people (actors, roles, personas, etc) and software systems rather than technologies, protocols and other 
low-level details. It's the sort of diagram that you could show to non-technical people.

```diagram-plantuml
@startuml
'ref http://plantuml.com/stdlib
!include <C4/C4_Context>
!include <office/Users/user.puml>

title System Context diagram for Internet Banking System

Person(customer, "Personal Banking Customer", "A customer of the bank, with personal bank accounts.")
System(banking_system, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

System_Ext(mail_system, "E-mail system", "The internal Microsoft Exchange e-mail system.")
System_Ext(mainframe, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

Rel(customer, banking_system, "Uses")
Rel_Back(customer, mail_system, "Sends e-mails to")
Rel_Neighbor(banking_system, mail_system, "Sends e-mails", "SMTP")
Rel(banking_system, mainframe, "Uses")

SHOW_DYNAMIC_LEGEND()
@enduml
```

Source: [C4 Model Sample Context Diagram](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/samples/C4_Context%20Diagram%20Sample%20-%20bigbankplc.puml)

!!! info "Info: System Context Diagram Details"

    **Scope**: A single software system.
    
    **Primary elements**: The software system in scope.
    
    **Supporting elements**: People (e.g. users, actors, roles, or personas) and software systems (external 
    dependencies) that are directly connected to the software system in scope. Typically these other software systems 
    sit outside the scope or boundary of your own software system, and you don't have responsibility or ownership of 
    them.
    
    **Intended audience**: Everybody, both technical and non-technical people, inside and outside of the software 
    development team.
    
    **Recommended for most teams**: Yes.
 
### Container Diagram

Zooming in by one level, the container diagram (nothing to do with docker containers) splits out each application within
the system by its constituent containers. Containers can be APIs, frontend applications, and databases, amongst other 
things.

The Container diagram shows the high-level shape of the software architecture and how responsibilities are distributed 
across it. It also shows the major technology choices and how the containers communicate with one another. It's a 
simple, high-level technology focussed diagram that is useful for software developers and support/operations staff 
alike.

```diagram-plantuml
@startuml
!include <C4/C4_Container>

title Container diagram for Internet Banking System

Person(customer, Customer, "A customer of the bank, with personal bank accounts")

System_Boundary(c1, "Internet Banking") {
    Container(web_app, "Web Application", "Java, Spring MVC", "Delivers the static content and the Internet banking SPA")
    Container(spa, "Single-Page App", "JavaScript, Angular", "Provides all the Internet banking functionality to customers via their web browser")
    Container(mobile_app, "Mobile App", "C#, Xamarin", "Provides a limited subset of the Internet banking functionality to customers via their mobile device")
    ContainerDb(database, "Database", "SQL Database", "Stores user registration information, hashed auth credentials, access logs, etc.")
    Container(backend_api, "API Application", "Java, Docker Container", "Provides Internet banking functionality via API")
}

System_Ext(email_system, "E-Mail System", "The internal Microsoft Exchange system")
System_Ext(banking_system, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

Rel(customer, web_app, "Uses", "HTTPS")
Rel(customer, spa, "Uses", "HTTPS")
Rel(customer, mobile_app, "Uses")

Rel_Neighbor(web_app, spa, "Delivers")
Rel(spa, backend_api, "Uses", "async, JSON/HTTPS")
Rel(mobile_app, backend_api, "Uses", "async, JSON/HTTPS")
Rel_Back_Neighbor(database, backend_api, "Reads from and writes to", "sync, JDBC")

Rel_Back(customer, email_system, "Sends e-mails to")
Rel_Back(email_system, backend_api, "Sends e-mails using", "sync, SMTP")
Rel_Neighbor(backend_api, banking_system, "Uses", "sync/async, XML/HTTPS")

SHOW_DYNAMIC_LEGEND()
@enduml
```

Source: [C4 Model Sample Container Diagram](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/samples/C4_Container%20Diagram%20Sample%20-%20bigbankplc.puml)

!!! info "Info: Container Diagram Details"

    **Scope**: A single software system.
    
    **Primary elements**: Containers within the software system in scope.
    
    **Supporting elements**: People and software systems directly connected to the containers.
    
    **Intended audience**: Technical people inside and outside of the software development team; including software 
    architects, developers and operations/support staff.
    
    **Recommended for most teams**: Yes.

    **Notes**: Notes: This diagram says nothing about clustering, load balancers, replication, failover, etc because it 
    will likely vary across different environments (e.g. production, staging, development, etc). This information is 
    better captured via one or more deployment diagrams.


### Component Diagram

The Component diagram shows how a container is made up of a number of "components", what each of those components are, 
their responsibilities and the technology/implementation details.

```diagram-plantuml
@startuml
!include <C4/C4_Component>

title Component diagram for Internet Banking System - API Application

Container(spa, "Single Page Application", "javascript and angular", "Provides all the internet banking functionality to customers via their web browser.")
Container(ma, "Mobile App", "Xamarin", "Provides a limited subset ot the internet banking functionality to customers via their mobile mobile device.")
ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
System_Ext(mbs, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

Container_Boundary(api, "API Application") {
    Component(sign, "Sign In Controller", "MVC Rest Controller", "Allows users to sign in to the internet banking system")
    Component(accounts, "Accounts Summary Controller", "MVC Rest Controller", "Provides customers with a summary of their bank accounts")
    Component(security, "Security Component", "Spring Bean", "Provides functionality related to singing in, changing passwords, etc.")
    Component(mbsfacade, "Mainframe Banking System Facade", "Spring Bean", "A facade onto the mainframe banking system.")

    Rel(sign, security, "Uses")
    Rel(accounts, mbsfacade, "Uses")
    Rel(security, db, "Read & write to", "JDBC")
    Rel(mbsfacade, mbs, "Uses", "XML/HTTPS")
}

Rel(spa, sign, "Uses", "JSON/HTTPS")
Rel(spa, accounts, "Uses", "JSON/HTTPS")

Rel(ma, sign, "Uses", "JSON/HTTPS")
Rel(ma, accounts, "Uses", "JSON/HTTPS")

SHOW_DYNAMIC_LEGEND()
@enduml
```

Source: [C4 Model Sample Component Diagram](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/samples/C4_Component%20Diagram%20Sample%20-%20bigbankplc.puml)

!!! info "Info: Component Diagram Details"

    **Scope**: A single container.
    
    **Primary elements**: Components within the container in scope.
    
    **Supporting elements**: Containers (within the software system in scope) plus people and software systems directly 
    connected to the components.
    
    **Intended audience**: Software architects and developers.
    
    **Recommended for most teams**: No, only create component diagrams if you feel they add value, and consider 
    automating their creation for long-lived documentation.

## Additional Diagrams

### System Landscape Diagram

The system landscape can be useful in contextualising an entire ecosystem. From a practical perspective, a system 
landscape diagram is really just a system context diagram without a specific focus on a particular software system.

```diagram-plantuml
@startuml
'ref http://plantuml.com/stdlib
!include <C4/C4_Context>

title System Landscape diagram for Big Bank plc

Person(customer, "Personal Banking Customer", "A customer of the bank, with personal bank accounts.")

Enterprise_Boundary(c0, "Big Bank plc") {
    System(banking_system, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

    System_Ext(atm, "ATM", "Allows customers to withdraw cash.")
    System_Ext(mail_system, "E-mail system", "The internal Microsoft Exchange e-mail system.")

    System_Ext(mainframe, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

    Person_Ext(customer_service, "Customer Service Staff", "Customer service staff within the bank.")
    Person_Ext(back_office, "Back Office Staff", "Administration and support staff within the bank.")
}

Rel_Neighbor(customer, banking_system, "Uses")
Rel_R(customer, atm, "Withdraws cash using")
Rel_Back(customer, mail_system, "Sends e-mails to")

Rel_R(customer, customer_service, "Asks questions to", "Telephone")

Rel_D(banking_system, mail_system, "Sends e-mail using")
Rel_R(atm, mainframe, "Uses")
Rel_R(banking_system, mainframe, "Uses")
Rel_D(customer_service, mainframe, "Uses")
Rel_U(back_office, mainframe, "Uses")

Lay_D(atm, banking_system)

Lay_D(atm, customer)
Lay_U(mail_system, customer)

SHOW_DYNAMIC_LEGEND()
@enduml
```

Source: [C4 Model Sample System Landscape Diagram](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/samples/C4_Context%20Diagram%20Sample%20-%20bigbankplc-landscape.puml)

!!! info "Info: System Landscape Diagram Details"

    **Scope**: An enterprise/organisation/department/etc.
    
    **Primary elements**: People and software systems related to the chosen scope.
    
    **Intended audience**: Technical and non-technical people, inside and outside of the software development team.
    
    **Recommended for most teams**: Yes.


### Deployment Diagram

A deployment diagram allows you to illustrate how instances of software systems and/or containers in the static model 
are deployed on to the infrastructure within a given deployment environment.

These diagrams are useful when discussing concerns around infrastructure and security with external teams.

```diagram-plantuml
@startuml
!include <C4/C4_Deployment>

AddElementTag("fallback", $bgColor="#c0c0c0")
AddRelTag("fallback", $textColor="#c0c0c0", $lineColor="#438DD5")

WithoutPropertyHeader()

' calculated legend is used (activated in last line)
' LAYOUT_WITH_LEGEND()

title Deployment Diagram for Internet Banking System - Live

Deployment_Node(plc, "Live", "Big Bank plc", "Big Bank plc data center"){
    AddProperty("Location", "London and Reading")
    Deployment_Node_L(dn, "bigbank-api***\tx8", "Ubuntu 16.04 LTS", "A web server residing in the web server farm, accessed via F5 BIG-IP LTMs."){
        AddProperty("Java Version", "8")
        AddProperty("Xmx", "512M")
        AddProperty("Xms", "1024M")
        Deployment_Node_L(apache, "Apache Tomcat", "Apache Tomcat 8.x", "An open source Java EE web server."){
            Container(api, "API Application", "Java and Spring MVC", "Provides Internet Banking functionality via a JSON/HTTPS API.")
        }
    }
    AddProperty("Location", "London")
    Deployment_Node_L(bigbankdb01, "bigbank-db01", "Ubuntu 16.04 LTS", "The primary database server."){
        Deployment_Node_L(oracle, "Oracle - Primary", "Oracle 12c", "The primary, live database server."){
            ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
        }
    }
    AddProperty("Location", "Reading")
    Deployment_Node_R(bigbankdb02, "bigbank-db02", "Ubuntu 16.04 LTS", "The secondary database server.", $tags="fallback") {
        Deployment_Node_R(oracle2, "Oracle - Secondary", "Oracle 12c", "A secondary, standby database server, used for failover purposes only.", $tags="fallback") {
            ContainerDb(db2, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.", $tags="fallback")
        }
    }
    AddProperty("Location", "London and Reading")
    Deployment_Node_R(bb2, "bigbank-web***\tx4", "Ubuntu 16.04 LTS", "A web server residing in the web server farm, accessed via F5 BIG-IP LTMs."){
        AddProperty("Java Version", "8")
        AddProperty("Xmx", "512M")
        AddProperty("Xms", "1024M")
        Deployment_Node_R(apache2, "Apache Tomcat", "Apache Tomcat 8.x", "An open source Java EE web server."){
            Container(web, "Web Application", "Java and Spring MVC", "Delivers the static content and the Internet Banking single page application.")
        }
    }
}

Deployment_Node(mob, "Customer's mobile device", "Apple IOS or Android"){
    Container(mobile, "Mobile App", "Xamarin", "Provides a limited subset of the Internet Banking functionality to customers via their mobile device.")
}

Deployment_Node(comp, "Customer's computer", "Microsoft Windows of Apple macOS"){
    Deployment_Node(browser, "Web Browser", "Google Chrome, Mozilla Firefox, Apple Safari or Microsoft Edge"){
        Container(spa, "Single Page Application", "JavaScript and Angular", "Provides all of the Internet Banking functionality to customers via their web browser.")
    }
}

Rel(mobile, api, "Makes API calls to", "json/HTTPS")
Rel(spa, api, "Makes API calls to", "json/HTTPS")
Rel_U(web, spa, "Delivers to the customer's web browser")
Rel(api, db, "Reads from and writes to", "JDBC")
Rel(api, db2, "Reads from and writes to", "JDBC", $tags="fallback")
Rel_R(db, db2, "Replicates data to")

SHOW_DYNAMIC_LEGEND()
@enduml
```

Source: [C4 Model Sample Deployment Diagram](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/samples/C4_Deployment%20Diagram%20Sample%20-%20bigbankplc-details.puml)

!!! info "Info: Deployment Diagram Details"

    **Scope**: One or more software systems within a single deployment environment (e.g. production, staging, 
    development, etc).
    
    **Primary elements**: Deployment nodes, software system instances, and container instances.
    
    **Intended audience**: Infrastructure nodes used in the deployment of the software system.
    
    **Recommended for most teams**: Technical people inside and outside of the software development team; including 
    software architects, developers, infrastructure architects, and operations/support staff.

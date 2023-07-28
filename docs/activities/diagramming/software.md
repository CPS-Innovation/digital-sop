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

While diagramming is important, you must not forget colleagues with visual impairments. **All diagrams must be 
accompanied by a description sufficient to understand the contents.** 

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

[Skip to Diagram Description](#c4_context_description)

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

??? info "Info: System Context diagram description"

    <a id="c4_context_description"></a>
    This PlantUML diagram represents a "System Context diagram for Internet Banking System." The diagram illustrates the 
    relationships and interactions between various components involved in the internet banking system. Let's break down 
    the elements of the diagram:
    
    Title: "System Context diagram for Internet Banking System"
    
    Components:
    
    1. Person: Represented as "Personal Banking Customer." This component represents a customer of the bank who has 
       personal bank accounts.
    2. System: Represented as "Internet Banking System." This is the main system that enables customers to view 
       information about their bank accounts and make payments.
    3. External System: Represented as "E-mail system." This external system is the internal Microsoft Exchange e-mail 
       system used by the bank.
    4. External System: Represented as "Mainframe Banking System." This external system stores all the core banking 
       information about customers, accounts, transactions, etc.
    
    Relationships:
    
    1. The "Personal Banking Customer" uses the "Internet Banking System."
    2. The "Personal Banking Customer" sends e-mails to the "E-mail system."
    3. The "Internet Banking System" sends e-mails to the "E-mail system" using SMTP (Simple Mail Transfer Protocol).
    4. The "Internet Banking System" uses the "Mainframe Banking System."
    
    Overall, this System Context diagram shows the primary components of the Internet Banking System, the relationships 
    between those components, and their interactions with external systems such as the E-mail system and the Mainframe 
    Banking System. It provides an overview of how the different parts of the banking system fit together at a high 
    level.

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

[Skip to Diagram Description](#c4_container_description)

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

??? info "Info: System Container diagram description"

    <a id="c4_container_description"></a>
    The provided C4 diagram represents a container diagram for an Internet Banking System. The diagram is used to visualize the high-level architecture of the system, focusing on the containers (software components) and their interactions.
    
    The system consists of the following components:
    
    * Person (Customer): Representing a customer of the bank, with personal bank accounts.
    * System Boundary (Internet Banking): The boundary that encapsulates the Internet Banking System.
    
    Within the system boundary, the following containers are depicted:
    
    * Web Application (web_app): Implemented in Java with Spring MVC, this container delivers static content and the Internet banking Single-Page Application (SPA) to customers through their web browsers.
    * Single-Page App (spa): Developed using JavaScript and Angular, this container provides all Internet banking functionality to customers via their web browsers.
    * Mobile App (mobile_app): Built using C# and Xamarin, this container offers a limited subset of Internet banking functionality to customers through their mobile devices.
    * Database (database): This container uses an SQL database to store user registration information, hashed authentication credentials, access logs, and other relevant data.
    * API Application (backend_api): Implemented in Java and deployed in a Docker container, this container serves Internet banking functionality through an API to the frontend applications.
    
    Additionally, the diagram includes two external systems:
    
    * E-Mail System (email_system): An internal Microsoft Exchange system used for sending emails.
    * Mainframe Banking System (banking_system): An external system that stores all core banking information about customers, accounts, transactions, and more.
    
    The diagram also depicts various relationships and interactions between the components:
    
    * Customers (Person) use the Web Application (web_app), Single-Page App (spa), and Mobile App (mobile_app) through HTTPS connections.
    * The Web Application (web_app) delivers the Single-Page App (spa) to customers.
    * Both the Single-Page App (spa) and Mobile App (mobile_app) use the API Application (backend_api) via asynchronous communication using JSON over HTTPS.
    * The Database (database) is read from and written to by the API Application (backend_api) through synchronous JDBC calls.
    * Customers (Person) communicate with the E-Mail System (email_system) by sending emails.
    * The API Application (backend_api) sends emails using synchronous SMTP communication through the E-Mail System (email_system).
    * The API Application (backend_api) interacts with the Mainframe Banking System (banking_system) using synchronous and asynchronous communication, with XML data exchanged over HTTPS.
    
    Overall, this container diagram provides an overview of the Internet Banking System's architecture, illustrating how different containers interact to deliver services to customers and integrate with external systems.

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

[Skip to Diagram Description](#c4_component_description)

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

??? info "Info: System Container diagram description"

    <a id="c4_component_description"></a>
    The C4 component diagram represents the architecture of the API Application within the Internet Banking System. The diagram focuses on the components within the API Application container and their interactions, as well as their connections to other containers and external systems.

    The components within the API Application container are as follows:
    
    * Sign In Controller (sign): This component is implemented using the MVC Rest Controller pattern. It allows users to sign in to the Internet banking system.
    * Accounts Summary Controller (accounts): Also implemented as an MVC Rest Controller, this component provides customers with a summary of their bank accounts. 
    * Security Component (security): Implemented as a Spring Bean, this component is responsible for providing functionality related to signing in, changing passwords, and other security-related tasks.
    * Mainframe Banking System Facade (mbsfacade): Another Spring Bean, this component acts as a facade onto the Mainframe Banking System (mbs). It abstracts the complexities of interacting with the mainframe system for the API Application.
    
    The interactions and relationships between these components are as follows:
    
    * The Sign In Controller (sign) uses the Security Component (security) to handle user authentication and authorization.
    * The Accounts Summary Controller (accounts) uses the Mainframe Banking System Facade (mbsfacade) to access banking information and provide account summaries to customers.
    * The Security Component (security) reads and writes data to the Database (db) using JDBC, handling user-related information like passwords.
    * The Mainframe Banking System Facade (mbsfacade) communicates with the Mainframe Banking System (mbs) using XML over HTTPS to access core banking information.
    
    The diagram also depicts connections from external containers to the API Application:
    
    * The Single Page Application (spa) uses the Sign In Controller (sign) and Accounts Summary Controller (accounts) components via JSON over HTTPS. This enables the Single Page Application to consume the API Application's functionality and provide internet banking services to customers via their web browsers.
    * The Mobile App (ma) similarly uses the Sign In Controller (sign) and Accounts Summary Controller (accounts) components via JSON over HTTPS. The Mobile App provides a limited subset of internet banking functionality to customers through their mobile devices.
    
    Overall, this component diagram provides an overview of the API Application's architecture, illustrating how different components work together to provide internet banking functionality and interact with the Mainframe Banking System and the database to handle user information and account data.


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

[Skip to Diagram Description](#c4_system_landscape_description)

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

??? info "Info: System Landscape description"

    <a id="c4_system_landscape_description"></a>
    The C4 system landscape diagram provides an overview of the various systems and actors within the Big Bank plc environment. The diagram shows the relationships and dependencies between different components. Below is a text description of the diagram:

    Title: System Landscape diagram for Big Bank plc

    Description:
    The diagram represents the system landscape of Big Bank plc, showcasing the key systems and actors involved in the banking operations. The following components are identified within the Enterprise Boundary of Big Bank plc:

    Personal Banking Customer:

    * Description: A customer of the bank with personal bank accounts.
    * Representation: Represented by the "Person" shape with the name "Personal Banking Customer."

    Internet Banking System:

    * Description: This system allows customers to view information about their bank accounts and make payments.
    * Representation: Represented by the "System" shape with the name "Internet Banking System."

    ATM:

    * Description: The ATM system enables customers to withdraw cash.
    * Representation: Represented by the "System_Ext" shape with the name "ATM."

    E-mail System:

    * Description: The internal Microsoft Exchange e-mail system used by the bank.
    * Representation: Represented by the "System_Ext" shape with the name "E-mail system."

    Mainframe Banking System:
    
    * Description: This system stores all core banking information about customers, accounts, transactions, etc.
    * Representation: Represented by the "System_Ext" shape with the name "Mainframe Banking System."
    
    Customer Service Staff:
    
    * Description: Customer service staff within the bank who handle customer queries and support.
    * Representation: Represented by the "Person_Ext" shape with the name "Customer Service Staff."
    
    Back Office Staff:
    
    * Description: Administration and support staff within the bank.
    * Representation: Represented by the "Person_Ext" shape with the name "Back Office Staff."
    
    Relationships:
    
    Personal Banking Customer Uses Internet Banking System:
    
    * Description: The Personal Banking Customer interacts with and utilizes the Internet Banking System for banking operations.
    * Representation: Represented by an arrow labeled "Uses" pointing from the "Personal Banking Customer" shape to the "Internet Banking System" shape.
    
    Personal Banking Customer Uses ATM:
    
    * Description: The Personal Banking Customer can withdraw cash using the ATM.
    * Representation: Represented by an arrow labeled "Withdraws cash using" pointing from the "Personal Banking Customer" shape to the "ATM" shape.
    
    Personal Banking Customer Sends e-mails to E-mail System (Backward relationship):
    
    * Description: The Personal Banking Customer can send e-mails to the E-mail System.
    * Representation: Represented by an arrow labeled "Sends e-mails to" pointing from the "Personal Banking Customer" shape to the "E-mail system" shape.
    
    Personal Banking Customer Asks questions to Customer Service Staff:
    
    * Description: The Personal Banking Customer communicates with Customer Service Staff for inquiries, using the telephone.
    * Representation: Represented by an arrow labeled "Asks questions to" pointing from the "Personal Banking Customer" shape to the "Customer Service Staff" shape. The arrow is annotated with "Telephone" to indicate the communication method.
    
    Internet Banking System Sends e-mail using E-mail System:
    
    * Description: The Internet Banking System communicates and sends e-mails using the E-mail System.
    * Representation: Represented by an arrow labeled "Sends e-mail using" pointing from the "Internet Banking System" shape to the "E-mail system" shape.
    
    ATM Uses Mainframe Banking System:
    
    * Description: The ATM system interacts with and uses the Mainframe Banking System for cash withdrawal transactions.
    * Representation: Represented by an arrow labeled "Uses" pointing from the "ATM" shape to the "Mainframe Banking System" shape.
    
    Internet Banking System Uses Mainframe Banking System:
    
    * Description: The Internet Banking System relies on and utilizes the Mainframe Banking System for accessing core banking information.
    * Representation: Represented by an arrow labeled "Uses" pointing from the "Internet Banking System" shape to the "Mainframe Banking System" shape.
    
    Customer Service Staff Uses Mainframe Banking System:
    
    * Description: Customer Service Staff uses the Mainframe Banking System for customer support activities.
    * Representation: Represented by an arrow labeled "Uses" pointing from the "Customer Service Staff" shape to the "Mainframe Banking System" shape.
    
    Back Office Staff Uses Mainframe Banking System:
    
    * Description: Back Office Staff uses the Mainframe Banking System for administrative and support tasks.
    * Representation: Represented by an arrow labeled "Uses" pointing from the "Back Office Staff" shape to the "Mainframe Banking System" shape.

    Note: The system landscape diagram provides a high-level overview of the Big Bank plc environment, highlighting key systems, actors, and their interactions. The actual system architecture may be more complex and detailed in the complete system documentation.

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

[Skip to diagram description](#c4_deployment_description)

```diagram-plantuml
@startuml
!include <C4/C4_Deployment>

AddElementTag("fallback", $bgColor="#c0c0c0")
AddRelTag("fallback", $textColor="#c0c0c0", $lineColor="#438DD5")

WithoutPropertyHeader()

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

??? info "Info: Deployment Diagram description"

    <a id="c4_deployment_description"></a>
    The C4 Deployment Diagram describes the architecture of the Internet Banking System for Big Bank plc. The system is hosted in the Big Bank plc data center with multiple deployment nodes representing various components of the system. Let's break down the description:
    
    Title: Deployment Diagram for Internet Banking System - Live
    
    1.  Deployment Node: Live (Big Bank plc data center in London and Reading)
        *   Location: London and Reading
        *   Contains:
            *   Deployment Node (DN): bigbank-api x8
                *   Type: Ubuntu 16.04 LTS
                *   Description: A web server residing in the web server farm, accessed via F5 BIG-IP LTMs.
                *   Properties: Java Version: 8, Xmx: 512M, Xms: 1024M
                *   Contains:
                    *   Deployment Node (Apache): Apache Tomcat 8.x
                        *   Type: Apache Tomcat
                        *   Description: An open-source Java EE web server.
                        *   Contains:
                            *   Container (API Application): Java and Spring MVC
                                *   Description: Provides Internet Banking functionality via a JSON/HTTPS API.
    2.  Deployment Node: bigbank-db01
        *   Location: London
        *   Type: Ubuntu 16.04 LTS
        *   Description: The primary database server.
        *   Contains:
            *   Deployment Node (Oracle): Oracle 12c - Primary
                *   Type: Oracle 12c
                *   Description: The primary, live database server.
                *   Contains:
                    *   ContainerDb (Database): Relational Database Schema
                        *   Description: Stores user registration information, hashed authentication credentials, access logs, etc.
    3.  Deployment Node: bigbank-db02 (fallback)
        *   Location: Reading
        *   Type: Ubuntu 16.04 LTS
        *   Description: The secondary database server.
        *   Contains:
            *   Deployment Node (Oracle2): Oracle 12c - Secondary (fallback)
                *   Type: Oracle 12c
                *   Description: A secondary, standby database server, used for failover purposes only.
                *   Contains:
                    *   ContainerDb (Database2): Relational Database Schema (fallback)
                        *   Description: Stores user registration information, hashed authentication credentials, access logs, etc.
    4.  Deployment Node: bigbank-web x4
        *   Location: London and Reading
        *   Type: Ubuntu 16.04 LTS
        *   Description: A web server residing in the web server farm, accessed via F5 BIG-IP LTMs.
        *   Properties: Java Version: 8, Xmx: 512M, Xms: 1024M
        *   Contains:
            *   Deployment Node (Apache2): Apache Tomcat 8.x
                *   Type: Apache Tomcat
                *   Description: An open-source Java EE web server.
                *   Contains:
                    *   Container (Web Application): Java and Spring MVC
                        *   Description: Delivers the static content and the Internet Banking single page application.
    5.  Deployment Node: Customer's mobile device
        *   Type: Apple iOS or Android
        *   Contains:
            *   Container (Mobile App): Xamarin
                *   Description: Provides a limited subset of the Internet Banking functionality to customers via their mobile device.
    6.  Deployment Node: Customer's computer
        *   Type: Microsoft Windows or Apple macOS
        *   Contains:
            *   Deployment Node (Web Browser): Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge
                *   Contains:
                    *   Container (Single Page Application - SPA): JavaScript and Angular
                        *   Description: Provides all of the Internet Banking functionality to customers via their web browser.
    
    Relationships:
    
    *   The Mobile App makes API calls to the API Application using JSON/HTTPS.
    *   The Single Page Application (SPA) makes API calls to the API Application using JSON/HTTPS.
    *   The Web Application delivers content to the customer's web browser.
    *   The API Application reads from and writes to the primary Database using JDBC.
    *   The API Application also reads from and writes to the secondary (fallback) Database using JDBC.
    *   Data is replicated from the primary Database to the secondary (fallback) Database.
    
    Note: Some components have fallback tags to indicate secondary/failover options. The legend for the tags is not explicitly included in the diagram but can be activated if needed.


Source: [C4 Model Sample Deployment Diagram](https://github.com/plantuml-stdlib/C4-PlantUML/blob/master/samples/C4_Deployment%20Diagram%20Sample%20-%20bigbankplc-details.puml)

!!! info "Info: Deployment Diagram Details"

    **Scope**: One or more software systems within a single deployment environment (e.g. production, staging, 
    development, etc).
    
    **Primary elements**: Deployment nodes, software system instances, and container instances.
    
    **Intended audience**: Infrastructure nodes used in the deployment of the software system.
    
    **Recommended for most teams**: Technical people inside and outside of the software development team; including 
    software architects, developers, infrastructure architects, and operations/support staff.

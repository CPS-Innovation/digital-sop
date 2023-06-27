# Standards

## Principle

In accordance with CPS Architectural Principle 22, all CPS information technology will comply with open standards where
applicable.

## Content scanning, sanitisation and remediation.

HTTP content offload and scanning [RFC3507](https://www.rfc-editor.org/rfc/rfc3507.html)

## Identity and Access Management (IAM / IDAM)

### User identity

Provide identity and access management
:   Azure Active Directory (Azure AD)

Consumer identity and access management
:   Azure Active Directory External Identities

Join virtual machines in Azure to a domain
:   Azure Active Directory Domain Services

### Service to Service Authentication

Azure Managed Identity

AWS IAM

## Authentication against Azure AD

* OpenID Connect

Other authentication requirements
 
* AML 2.0
* OpenID Connect
* OAuth 2.0
* WS-Federation

## Standards for Containers for Code Execution

Standard
:    [Open container initiative](https://opencontainers.org/)

## Simple Mail Transfer Protocol based Email

### Email Security

DomainKeys Identified Mail [RFC6376](https://www.rfc-editor.org/rfc/rfc6376.html)

Domain-based Message A, R and C [RFC7489](https://www.rfc-editor.org/rfc/rfc7489.html)

Sender Policy Framework [RFC7208](https://www.rfc-editor.org/rfc/rfc7208.html)

MTA Strict Transport Security [RFC8461](https://www.rfc-editor.org/rfc/rfc8461.html)

DNS Authentication of Named Entities [RFC7671](https://www.rfc-editor.org/rfc/rfc7671.html)

Simple Mail Transfer Protocol [RFC5321](https://www.rfc-editor.org/rfc/rfc5321.html)

Transport Layer Security Protocol V1.2 [RFC5246](https://www.rfc-editor.org/rfc/rfc5246.html)

Transport Layer Security Protocol V1.3 [RFC8446](https://www.rfc-editor.org/rfc/rfc8446.html)

### Email Structure

MIME Part One [RFC2045](https://www.rfc-editor.org/rfc/rfc2045.html)

MIME Part Two [RFC2046](https://www.rfc-editor.org/rfc/rfc2046.html)

MIME Part Three [RFC2047](https://www.rfc-editor.org/rfc/rfc2047.html)

MIME PVEWE [RFC2231](https://www.rfc-editor.org/rfc/rfc2231.html)

Internet Message Format [RFC5322](https://www.rfc-editor.org/rfc/rfc5322.html)

### Security

Transport Layer Security Protocol V1.2 [RFC5246](https://www.rfc-editor.org/rfc/rfc5246.html)

Transport Layer Security Protocol V1.3 [RFC8446](https://www.rfc-editor.org/rfc/rfc8446.html)

Advanced Encryption Standard [FIPS197](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.197.pdf)

## Scanning and Filtering

ICAP (Internet Content Adaption Protocol) [RFC3507](https://datatracker.ietf.org/doc/html/rfc3507)

This is a protocol providing simple object-based content vectoring for HTTP services. ICAP is, in essence, a lightweight
protocol for executing a "remote procedure call" on HTTP messages. It allows ICAP clients to pass HTTP messages to ICAP
servers for some sort of transformation or other processing ("adaptation"). The server executes its transformation 
service on messages and sends back responses to the client, usually with modified messages. Typically, the adapted 
messages are either HTTP requests or HTTP responses.

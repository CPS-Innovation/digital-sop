---
hide:
  - navigation
  - toc
---

# Playbooks

Here we document the approach taken to various delivery activities at CPS.

## Phases of Delivery

Broadly, an agile project will go through several phases. Each phase has a differing end goal involving several
iterations and will generally have a start and end date.


```mermaid
---
title: 'Agile Delivery Phases'
---
stateDiagram
    direction LR
    D: Discovery
    A: Alpha
    PB: Private Beta
    LB: Public Beta
    [*] --> D
    D --> A
    A --> PB
    PB --> LB
    LB --> Live
    Live --> Decommission
    Decommission --> [*]
```

## Playbooks

[API Playbook](./API-Playbook){ .md-button .md-button--primary }

---
title: 'First Decision Record'
---

# 0001: Record decisions using MADR

Proposed | 14 June 2023 | [Lawrence Goldstien](https://github.com/acodeninja)

## Context and Problem Statement

We must record decisions that have an impact on the delivery of software projects. Decisions must be recorded in a 
consistent style, allowing team members to understand the reasons behind a decision and the wider consequences.

## Considered Options

* [MADR](https://adr.github.io/madr/) - Markdown Any Decision Records
* [ADR Tools](https://github.com/npryce/adr-tools) - Nat Pryce's ADR Tools
* [Nygard's ADR](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) - The original ADR 

## Decision Outcome

Chosen option: "MADR - Markdown Any Decision Records", because it allows for recording contextual information, has a 
straightforward template format, and optional fields should a decision only require a light touch explainer.

Architecture decision records shall be created with the A prefix: i.e.: "A0001: Record decisions using MADR".

## Consequences

A [template](../template.md) has been created and [documentation](../index.md) added explaining the reason for decision
records and how to record them.

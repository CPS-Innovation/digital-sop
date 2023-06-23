---
title: Short-form
---

# Use Plain JUnit5 for advanced test assertions

Proposed | 14 June 2023 | Lawrence Goldstien

## Context and Problem Statement

How to write readable test assertions?
How to write readable test assertions for advanced tests?

## Considered Options

* Plain JUnit5
* Hamcrest
* AssertJ

## Decision Outcome

Chosen option: "Plain JUnit5", because it is a standard framework and the features of the other frameworks do not
outweigh the drawback of adding a new dependency.
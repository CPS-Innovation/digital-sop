# Conventions

## Documentation

### Types

> **MUST** include text documentation.

Documentation must be provided that:

* Has steps needed to set up a local development environment.
* Has a summary of the APIs purpose and main data models it stores.
* Has a [runbook](https://www.pagerduty.com/resources/learn/what-is-a-runbook/).

> **MUST** include machine-readable API specification.

To aid in the development of integrations with your API.

> **MUST** include a development and architectural decision record.

A decision record must be included to document major technology and design choices.

### Format

> **MUST** use Markdown format for documentation.

Text documentation must be written in [Markdown](https://www.markdownguide.org/) format.

> **MUST** use OpenAPI to document REST APIs.

The [OpenAPI](https://spec.openapis.org/oas/v3.1.0) specification is machine-readable and can be rendered to HTML,
providing an interactive and human-readable suite of documentation.

> **MUST** use MADR format to document decisions.

As per [0001: Record decisions using MADR](../../../activities/decision-records/examples/0001-record-decisions-using-madr.md) 
all decision records must use MADR format. Decision records must be kept under `docs/decisions/`, each filename must be 
in format `docs/decisions/<reference>-<hyphen separated title>.md`.

### Place

> **MUST** place documentation next to code.

Where all code for a project is stored in the same repository, documentation must be placed in the same repository in
the `docs/` directory.

Where code for a project spans multiple repositories, documentation specific to each codebase must be placed in the 
`docs/` directory for each repository.

> **MUST** publish documentation.

Using a tool like [mkdocs](https://www.mkdocs.org/), documentation must be rendered and published to a publicly 
accessible website.

## Naming

### Paths

> **MUST** use lowercase separate words with hyphens for url path segments.

```
/shipment-orders/{shipment-order-id}
```

This applies to concrete path segments and not the names of path parameters. For example `{shipment_order_id}` would be
ok as a path parameter.

> **MUST** avoid trailing slashes

The trailing slash must not have specific semantics. Resource paths must deliver the same results whether they have the
trailing slash or not.

```
/posts/ === /posts
```

### Query Parameters

> **MUST** use snake_case for Query Parameters.

```
customer_number, order_id, billing_address
```

> **MUST** use conventional query parameters.

If you provide query support for searching, sorting, filtering, and paginating, you must stick to the following naming
conventions:

* `q` - default query parameter (e.g. used by browser tab completion); should have an entity specific alias, like
  `post-id` for a blog post.

* `sort` - comma-separated list of fields to define the sort order. To indicate sorting direction, fields may be
  prefixed with + (ascending) or - (descending), e.g. `/sales-orders?sort=+id`

* `fields` - to retrieve only a subset of fields of a resource

* `embed` - to expand or embed sub-entities (i.e.: inside of an article entity, expand comments into the comments
  object). Implementing embed correctly is difficult, so do it with care

* `offset` - numeric offset of the first element on a page. See pagination section

* `limit` - client suggested limit to restrict the number of entries on a page.

### Resource Names

> **MUST** pluralise resource names.

```
/posts
/posts/{post-id}
/posts/{post-id}/comments
/posts/{post-id}/comments/{comment-id}
```

Usually, a collection of resource instances is provided, in the special case of a resource singleton they are treated as
a collection with cardinality 1.

For example, a user only has a single record of system settings key value pairs, this can be presented as follows.

```
/user/{user-id}/settings
```

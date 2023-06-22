# CPS Digital Standard Operating Procedures

This repository contains all content for the Crown Prosecution Service digital SOPs.

## Contributing

To contribute, you will need to [signup with GitHub](https://github.com/signup) and provide your
GitHub username to an organisation admin. Once this has been completed you will need to be added
to the Azure Active Directory group "GitHub - Innovation".

## Working locally

To run a local copy of the documentation site you must have python >= 3.10 installed.

* Clone this repository `git clone https://github.com/CPS-Innovation/digital-sop.git`
* Install requirements `pip install -r requirements.txt`
* And run the development server `mkdocs serve --config-file mkdocs.development.yml`

## Structure

Content is split as follows

* [`docs/`](./docs) - Content for the website.
* [`snippets/`](./snippets) - Snippets to be included in all pages
* [`overrides/`](./overrides) - Style and image assets

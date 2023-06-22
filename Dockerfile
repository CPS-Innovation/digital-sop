FROM python:alpine AS base

RUN apk --update --no-cache add gcc musl-dev openjdk17-jdk curl graphviz ttf-dejavu fontconfig git tidyhtml bash
RUN pip install --upgrade pip
RUN pip install mkdocs mkdocs-material mkdocs-git-revision-date-localized-plugin mkdocs-techdocs-core mkdocs-section-index

RUN git config --global --add safe.directory /content
WORKDIR /content

FROM base AS backstage
ENTRYPOINT [ "mkdocs" ]

FROM base AS development
COPY run.sh /run.sh
ENTRYPOINT [ "bash", "/run.sh" ]

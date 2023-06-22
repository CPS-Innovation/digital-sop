---
hide:
  - navigation
---

# Kitchen Sink

## Abbreviations

This template comes with a lot of built-in abbreviations. To use them just type an abbreviation, and it will be
annotated.

* WCAG
* NaN
* W3C

If an abbreviation is missing, just add it to the `snippets/abbreviations.md` file.

!!! warning "Only in production!"

    The abbreviations will only render when you run `make build`, they do not show with `make dev`.


## Keyboard Shortcuts

You can include keyboard shortcuts in your documentation using the following formatting.

> To copy, press ++ctrl+c++ or ++cmd+c++

```
To copy, press ++ctrl+c++ or ++cmd+c++
```

## Definition lists

Definition lists or `dl` tags, are useful anywhere you need a list of key-value pairs.

`Lorem ipsum dolor sit amet`

:   Sed sagittis eleifend rutrum. Donec vitae suscipit est. Nullam tempus
tellus non sem sollicitudin, quis rutrum leo facilisis.


`Cras arcu libero`

:   Aliquam metus eros, pretium sed nulla venenatis, faucibus auctor ex. Proin
ut eros sed sapien ullamcorper consequat. Nunc ligula ante.

    Duis mollis est eget nibh volutpat, fermentum aliquet dui mollis.
    Nam vulputate tincidunt fringilla.
    Nullam dignissim ultrices urna non auctor.

## Tables

Normal Markdown tables, nothing new here.

| Method   | Description                          |
|:---------|:-------------------------------------|
| `GET`    | :material-check:     Fetch resource  |
| `PUT`    | :material-check-all: Update resource |
| `DELETE` | :material-close:     Delete resource |


## Math and Latex

You can use the [MathJax](https://www.mathjax.org/) library to display both inline and centred equations, or formatted
text.

### Inline

```
Albert Einstein’s famous energy-mass equation, $E = mc^ 2$ is one of the greatest marvels of this universe.
```

Albert Einstein’s famous energy-mass equation, $E = mc^ 2$ is one of the greatest marvels of this universe.

### Centred

```
Albert Einstein’s famous energy-mass equation, is one of the greatest marvels of this universe.

$$
E = mc^ 2
$$
```

Albert Einstein’s famous energy-mass equation, is one of the greatest marvels of this universe.

$$E = mc^ 2$$

## Icons and Emojis

To include icons and emoji, use the same syntax you would on slack.

For example, `:material-account-child-outline:` produces :material-account-child-outline:.

### Available Libraries

* [Material Design Icons](https://pictogrammers.com/library/mdi/) (prefix with `:material-`)
* [Font Awesome Icons](https://fontawesome.com/search?o=r&m=free) (prefix with `:fontawesome-`)
* [Octicons](https://primer.style/design/foundations/icons) (prefix with `:octicons-`)

## PlantUML Diagrams

PlantUML diagrams use the PlantUML web service to render diagrams. They support click to zoom, allowing more complex
diagrams. Take a look at [Architecture->Diagramming](architecture/diagramming.md) for a more thorough explainer on how
to use PlantUML diagrams for technical documentation.

```diagram-plantuml
@startuml
!include <C4/C4_Container>

Person(personAlias, "Label", "Optional Description")
Container(containerAlias, "Label", "Technology", "Optional Description")
System(systemAlias, "Label", "Optional Description")

System_Ext(extSystemAlias, "Label", "Optional Description")

Rel(personAlias, containerAlias, "Label", "Optional Technology")

Rel_U(systemAlias, extSystemAlias, "Label", "Optional Technology")
@enduml
```


## Basic Diagrams

Basic diagramming uses the [mermaid](https://mermaid.js.org/intro/) library. This template uses version 9.4.3 and does
not support click to zoom.

### Flowchart

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/flowchart.md)

```mermaid
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

### Sequence Diagram

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/sequenceDiagram.md)

```mermaid
sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Hello guys!
    and Alice to John
        Alice->>John: Hello guys!
    end
    Bob-->>Alice: Hi Alice!
    John-->>Alice: Hi Alice!
```

### Class Diagram

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/classDiagram.md)

```mermaid
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```

### State Diagram

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/stateDiagram.md)

```mermaid
stateDiagram
    direction LR
    [*] --> A
    A --> B
    B --> C
    state B {
      direction LR
      a --> b
    }
    B --> D
```

### Entity Relationship

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/entityRelationshipDiagram.md)

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
```

### User Journey

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/userJourney.md)

```mermaid
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```

### Gantt

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/gantt.md)

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d
    Functionality added                 :milestone, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h
```

### Pie Chart

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/pie.md)

```mermaid
pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```

### Requirement

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/requirementDiagram.md)

```mermaid
requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    functionalRequirement test_req2 {
    id: 1.1
    text: the second test text.
    risk: low
    verifymethod: inspection
    }

    performanceRequirement test_req3 {
    id: 1.2
    text: the third test text.
    risk: medium
    verifymethod: demonstration
    }

    interfaceRequirement test_req4 {
    id: 1.2.1
    text: the fourth test text.
    risk: medium
    verifymethod: analysis
    }

    physicalRequirement test_req5 {
    id: 1.2.2
    text: the fifth test text.
    risk: medium
    verifymethod: analysis
    }

    designConstraint test_req6 {
    id: 1.2.3
    text: the sixth test text.
    risk: medium
    verifymethod: analysis
    }

    element test_entity {
    type: simulation
    }

    element test_entity2 {
    type: word doc
    docRef: reqs/test_entity
    }

    element test_entity3 {
    type: "test suite"
    docRef: github.com/all_the_tests
    }


    test_entity - satisfies -> test_req2
    test_req - traces -> test_req2
    test_req - contains -> test_req3
    test_req3 - contains -> test_req4
    test_req4 - derives -> test_req5
    test_req5 - refines -> test_req6
    test_entity3 - verifies -> test_req5
    test_req <- copies - test_entity2
```

### Git Graph

[Documentation](https://github.com/mermaid-js/mermaid/blob/v9.4.3/docs/syntax/gitgraph.md)

```mermaid
gitGraph:
    commit "Ashish"
    branch newbranch
    checkout newbranch
    commit id:"1111"
    commit tag:"test"
    checkout main
    commit type: HIGHLIGHT
    commit
    merge newbranch
    commit
    branch b2
    commit
```

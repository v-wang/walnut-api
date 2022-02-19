# Walnut API Project

## API

This is a RESTful API that returns JSON data on a limited set of Current Prodcedural Terminology (CPT) codes that is annually published by the [Centers for Medicare & Medicaid Services](https://www.cms.gov/). Please note that this is not a fully complete API and is used for demo purposes only.

## Examples

```JSON
[
  {
  "_id": "62102960ef4f8592196eea57",
  "code": "86152",
  "description": "Cell enumeration & id",
  "__v": 0
  },
  {
  "_id": "62102960ef4f8592196eea58",
  "code": "86153",
  "description": "Cell enumeration phys interp",
  "__v": 0
  },
  {
  "_id": "62102960ef4f8592196eea59",
  "code": "86890",
  "description": "Autologous blood process",
  "__v": 0
  },
  {
  "_id": "62102960ef4f8592196eea5a",
  "code": "86891",
  "description": "Autologous blood op salvage",
  "__v": 0
  },
  {
  "_id": "62102960ef4f8592196eea5b",
  "code": "86927",
  "description": "Plasma fresh frozen",
  "__v": 0
  }
]
```

## Data Source

Blood Component Collection Services
https://www.cms.gov/Medicare/Fraud-and-Abuse/PhysicianSelfReferral

Spreadsheet download:
https://www.cms.gov/apps/ama/license.asp?file=/files/zip/list-codes-effective-january-1-2022-published-november-19-2021.zip

## Languages

- JavaScript
- HTML
- CSS

## Tech

- JavaScript
- Node
- Express
- MongoDB
- Mongoose
- Handlebars
- SASS

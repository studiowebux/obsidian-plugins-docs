# Cumulative Sum Per Types

## Default Model Definition

```json
cumulativeSumPerTypes: {
    "dataSource": "splitByYearMonth",
    "categories": [
        "Portfolio",
        "Income",
        "Cotisation",
        "Expenses",
        "House Expenses",
        "Dividend",
    ],
    "output": "generateCumulativeSumDataSetPerTypes",
    "beginAtZero": true,
    "chartLabelType": "money",
    "dataSourceKey": "timestamp",
    "values": "",
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: cumulativeSumPerTypes
title: Cumulative Sum Per Types
```
````

## Screenshot

![Cumulative Sum Per Types](/img/models/cumulativeSumPerTypes.png)

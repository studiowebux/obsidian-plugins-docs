# Dividend

## Default Model Definition

```json
dividend: {
    "dataSource": "splitByYearMonth",
    "categories": ["Dividend", "Cotisation"],
    "output": "generateSumDataSetPerTypes",
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
model: dividend
title: Dividend
```
````

## Screenshot

![Dividend](/img/models/dividend.png)

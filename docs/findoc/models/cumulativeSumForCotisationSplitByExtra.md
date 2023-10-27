# Cumulative Sum for Cotisation Split by Extra

## Default Model Definition

```json
cumulativeSumForCotisationSplitByExtra: {
    "dataSource": "splitBy",
    "categories": ["Cotisation"],
    "output": "generateCumulativeSumDataSetPerTypes",
    "beginAtZero": true,
    "chartLabelType": "money",
    "dataSourceKey": "extra",
    "values": "",
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: cumulativeSumForCotisationSplitByExtra
title: Cumulative Sum for Cotisation Split by Extra
```
````

## Screenshot

![Cumulative Sum for Cotisation Split by Extra](/img/models/cumulativeSumForCotisationSplitByExtra.png)

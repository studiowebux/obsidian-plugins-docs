# Cumulative Sum

## Default Model Definition

```json
cumulativeSum: {
    "dataSource": "splitByYearMonth",
    "categories": [
        "Portfolio",
        "Income",
        "Cotisation",
        "Expenses",
        "House Expenses",
        "Dividend",
    ],
    "output": "generateCumulativeSumDataSet",
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
model: cumulativeSum
title: Cumulative Sum
```
````

## Screenshot

![Cumulative Sum](/img/models/cumulativeSum.png)

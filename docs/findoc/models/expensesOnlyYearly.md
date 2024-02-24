# Expenses only Yearly

_V0.6.7_

## Default Model Definition

```json
expensesOnlyYearly: {
    "dataSource": "splitByYear",
    "categories": ["House Expenses", "Expenses"],
    "output": "generateSumDataSet",
    "beginAtZero": true,
    "chartLabelType": "money",
    "dataSourceKey": "timestamp",
    "values": "",
}
```

## Usage

````yml
```findoc
filename: ./radar_chart.csv
model: expensesOnlyYearly
title: Expenses only Yearly
view: radar
```
````

## Screenshot

![Expenses only Yearly](/img/models/expensesOnlyYearly.png)

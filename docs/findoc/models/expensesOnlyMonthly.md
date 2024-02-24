# Expenses only Monthly

_V0.6.7_

## Default Model Definition

```json
expensesOnlyMonthly: {
    "dataSource": "splitByYearMonth",
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
model: expensesOnlyMonthly
title: Expenses only Monthly
view: radar
```
````

## Screenshot

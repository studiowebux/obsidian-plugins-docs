# Expenses only Daily

_V0.6.7_

## Default Model Definition

```json
expensesOnlyDaily: {
    "dataSource": "splitDailyDates",
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
model: expensesOnlyDaily
title: Expenses only Daily
```
````

## Screenshot

# Expenses

## Default Model Definition

```json
expenses: {
    "dataSource": "splitDailyDates",
    "categories": ["Income", "House Expenses", "Expenses"],
    "output": "generateDailyDataSet",
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
model: expenses
title: Expenses
```
````

## Screenshot

![Expenses](/img/models/expenses.png)

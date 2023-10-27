# Expenses Monthly

## Default Model Definition

```json
expensesMonthly: {
    "dataSource": "splitByYearMonth",
    "categories": ["Income", "House Expenses", "Expenses"],
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
filename: ./data.csv
model: expensesMonthly
title: Expenses Monthly
```
````

## Screenshot

![Expenses Monthly](/img/models/expensesMonthly.png)

# Incomes Expenses Yearly

*V0.6.6*

## Default Model Definition

```json
incomesExpensesYearly: {
    "dataSource": "splitByYear",
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
model: incomesExpensesYearly
title: Incomes Expenses Yearly
view: pie
```
````

## Screenshot

![Incomes Expenses Yearly](/img/models/incomesExpensesYearly.png)

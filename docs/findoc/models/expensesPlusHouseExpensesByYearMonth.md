# Expenses plus House Expenses by Year/Month

## Default Model Definition

```json
expensesPlusHouseExpensesByYearMonth: {
    "dataSource": "splitByYearMonth",
    "categories": ["Expenses", "House Expenses"],
    "output": "generateSum",
    "beginAtZero": true,
    "chartLabelType": "money",
    "dataSourceKey": "timestamp",
    "values": "Expenses, House Expenses"
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: expensesPlusHouseExpensesByYearMonth
title: Expenses plus House Expenses by Year/Month
```
````

## Screenshot

![Expenses plus House Expenses by Year/Month](/img/models/expensesPlusHouseExpensesByYearMonth.png)

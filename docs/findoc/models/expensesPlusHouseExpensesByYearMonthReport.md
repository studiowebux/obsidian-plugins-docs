# Expenses plus House Expenses Year/Month Report

## Default Model Definition

```json
expensesPlusHouseExpensesByYearMonthReport: {
    "dataSource": "splitByYearMonth",
    "categories": ["Expenses", "House Expenses"],
    "output": "reportSum",
    "beginAtZero": true,
    "chartLabelType": "money",
    "dataSourceKey": "timestamp",
    "values": "Expenses, House Expenses", // Yield: Expenses + House Expenses
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: expensesPlusHouseExpensesByYearMonthReport
title: Expenses plus House Expenses Year/Month
view: report
```
````

## Screenshot

![Expenses plus House Expenses Year/Month](/img/models/expensesPlusHouseExpensesByYearMonthReport.png)

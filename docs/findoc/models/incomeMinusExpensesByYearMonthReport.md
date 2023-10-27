# Income minus Expenses by Year/Month Report

## Default Model Definition

```json
incomeMinusExpensesByYearMonthReport: {
    "dataSource": "splitByYearMonth",
    "categories": ["Income", "Expenses"],
    "output": "reportDifference",
    "beginAtZero": true,
    "chartLabelType": "money",
    "dataSourceKey": "timestamp",
    "values": "Income, Expenses", // Yield: Income - Expenses
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: incomeMinusExpensesByYearMonthReport
title: Income minus Expenses Year/Month
view: report
```
````

## Screenshot

![Income minus Expenses Year/Month](/img/models/incomeMinusExpensesByYearMonthReport.png)

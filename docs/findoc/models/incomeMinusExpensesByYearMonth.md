# Income minus Expenses by Year/Month

## Default Model Definition

```json
incomeMinusExpensesByYearMonth: {
    "dataSource": "splitByYearMonth",
    "categories": ["Income", "Expenses"],
    "output": "generateDifference",
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
model: incomeMinusExpensesByYearMonth
title: Income minus Expenses by Year/Month
```
````

## Screenshot

![Income minus Expenses by Year/Month](/img/models/incomeMinusExpensesByYearMonth.png)

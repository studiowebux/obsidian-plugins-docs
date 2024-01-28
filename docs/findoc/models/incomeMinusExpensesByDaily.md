# Income minus Expenses by Daily

## Default Model Definition

```json
incomeMinusExpensesByDaily: {
    "dataSource": "splitDailyDates",
	"categories": ["Income", "Expenses"],
	"output": "generateCumulativeDifference",
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
model: incomeMinusExpensesByDaily
title: Income minus Expenses Daily
```
````

## Screenshot

![Income minus Expenses Daily](/img/models/incomeMinusExpensesByDaily.png)

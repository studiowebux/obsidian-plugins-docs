# Income

## Default Model Definition

```json
income: {
    "dataSource": "splitDailyDates",
    "categories": ["Income"],
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
model: income
title: Income
```
````

## Screenshot

![Income](/img/models/income.png)

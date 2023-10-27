# Income Yearly

## Default Model Definition

```json
incomeYearly: {
    "dataSource": "splitByYear",
    "categories": ["Income"],
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
model: incomeYearly
title: Income Yearly
```
````

## Screenshot

![Income Yearly](/img/models/incomeYearly.png)

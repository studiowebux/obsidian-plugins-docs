# Mortgage

## Default Model Definition

```json
mortgage: {
    "dataSource": "splitDailyDates",
    "categories": ["Mortgage"],
    "output": "generateDailyDataSet",
    "beginAtZero": false,
    "chartLabelType": "money",
    "dataSourceKey": "timestamp",
    "values": "",
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: mortgage
title: Mortgage
```
````

## Screenshot

![Mortgage](/img/models/mortgage.png)

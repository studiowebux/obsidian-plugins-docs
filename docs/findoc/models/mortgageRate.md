# Mortgage Rate

## Default Model Definition

```json
mortgageRate: {
    "dataSource": "splitDailyDates",
    "categories": ["Mortgage Rate"],
    "output": "generateDailyDataSet",
    "beginAtZero": true,
    "chartLabelType": "percent",
    "dataSourceKey": "timestamp",
    "values": "",
}
```

## Usage

````yml
```findoc
filename: ./data.csv
model: mortgageRate
title: Mortgage Rate
```
````

## Screenshot

![Mortgage Rate](/img/models/mortgageRate.png)

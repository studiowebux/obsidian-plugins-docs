# All

## Default Model Definition

```json
all: {
    "dataSource": "splitDailyDates",
    "categories": [
        "Portfolio",
        "Income",
        "Mortgage",
        "Mortgage Rate",
        "Cotisation",
        "Dividend",
        "House Expenses",
        "Expenses",
    ],
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
model: all
title: All Categories
```
````

## Screenshot

![All](/img/models/all.png)

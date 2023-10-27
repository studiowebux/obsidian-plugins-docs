# Portfolio Report

## Default Model Definition

```json
portfolioReport: {
    "dataSource": "splitByYearMonth",
    "categories": [
        "Portfolio",
        "Income",
        "Cotisation",
        "Expenses",
        "House Expenses",
        "Dividend",
    ],
    "output": "getLastValuePerTypeForCurrentMonth",
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
model: portfolioReport
title: Portfolio
view: report
date: 2023-10-01
```

```findoc
filename: ./data.csv
model: portfolioReport
title: Portfolio
view: report
date: 2023-08-01
```
````

## Screenshot

![Portfolio Report](/img/models/portfolioReport.png)

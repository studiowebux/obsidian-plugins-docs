---
sidebar_position: 4
---

# Usage

When it comes to usage, there are two main aspects to consider:

1. You have the ability to directly open and edit a CSV file within obsidian.md, providing a seamless way to work with your data.
2. You can leverage the data from those CSV files to generate and display charts or reports within any obsidian note using a specialized snippet. This enables you to easily visualize and present your data within your notes.

## CSV View

Here are the key features and functionalities of the system:

- **Add a New Row:** You have the ability to easily add a new row to the dataset. For quicker data entry, you can also utilize the ["Use Last Element as Template"](./configuration.md#use-last-element-as-template) feature to duplicate the last row.
- **Auto Category Selection:** The system includes a dropdown menu that allows you to select the category of entry you're adding, enhancing data categorization.
- **Duplicate Rows:** You can duplicate rows when needed, which can be particularly useful for copying similar data entries.
- **Reorder Rows:** The flexibility to reorder rows provides control over the arrangement of data within the dataset.
- **Autocomplete:** There's an autocomplete feature that accelerates the process of filling in identifiers, making data entry more efficient.
- **Numeric Value Requirement:** The system enforces the requirement to enter numeric values for specific fields, ensuring data integrity.
- **Date Format:** Dates must be entered in the "YYYY-MM-DD" format, promoting consistency and enabling date-based data analysis.
- **Extra Field:** While an extra field is available, the plugin doesn't have any specific functionality associated with it at the moment.
- **Delete Rows:** You can easily delete unwanted rows from the dataset, streamlining data management.
- **Automatic Data Saving:** Data is automatically saved, although there may be ongoing work to enhance the smoothness of this process for improved user experience.

## Within a note

The special snippet you can use within obsidian notes follows this format:

````text
```findoc
filename: finance.csv, finance_2.csv
model: portfolio
view: chart OR report OR pie
date: YYYY-MM-DD (Only used when type is set to report)
title: Chart Title
```
````

Here are the available options that you can use within the system:

- **filename (Mandatory)**: This option specifies the CSV file(s) to load. You can load one or multiple files, and they will be processed in the order they are defined. You must use a comma to specify multiple files.
- **model (Mandatory)**: This option determines the data [model](./configuration.md#models) to use for processing the data.
- **view (Optional)**: Use this option to select the view type. You can choose between "report" (which generates a table, still a work in progress) or "chart" for visual representations. If not defined, it produces a "chart", it is also possible to use "pie" to generate a pie chart.
- **date (Conditional)**: This option is specifically used when the "report" view is selected.
- **title (Optional)**: You can use this option to automatically add a title to the chart, simplifying the process of labeling and identifying the output.

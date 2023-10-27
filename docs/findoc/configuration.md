---
sidebar_position: 3
---

# Configuration

Before using **Financial Doc**, you may need to configure it to suit your preferences or specific use cases. Here's how to do it:

1. Go to the "Settings" section.
2. Click on "Community plugins."
3. Find **Financial Doc** in the list of installed plugins and click on it to access its settings.
4. Configure the plugin options according to your needs.

## Options

### CSV Save Debounce

Is a numerical setting that determines the delay, in milliseconds, before your changes to a CSV file are automatically saved. This setting is designed to strike a balance between preserving your data and optimizing the saving process.

**Minimum Value:** 500 ms  
**Maximum Value:** 5000 ms

Setting a lower value (e.g., 500 ms) means that changes will be saved more frequently, which can be helpful if you want to ensure that your work is saved almost immediately.
Setting a higher value (e.g., 5000 ms) increases the debounce period, allowing you to work for a longer time before changes are saved automatically. This can be useful if you prefer fewer interruptions during your work.

### CSV Separator

The "CSV Separator" is a crucial setting that defines the character used to separate individual data values within a CSV (Comma-Separated Values) file. This character is also known as the delimiter, as it delimits or separates each piece of data within a row of the CSV file.

Commonly used CSV separators include:

**Comma (,):** For example, "value1, value2, value3."  
**Semicolon (;):** For example, "value1; value2; value3."  
**Tab ( ):** For example, "value1 value2 value3."

**Why the Separator Matters:**

The choice of separator is critical because it ensures that the CSV file is properly structured, allowing software applications to correctly interpret and import the data. Using a consistent separator is essential for maintaining data integrity and readability.

### Use Last Element as Template

The "Use Last Element as Template" option simplifies the process of adding new entries to a table. When this option is enabled, it takes the last row of the table and duplicates it, providing you with a ready-made template for entering new data. This can significantly speed up data entry, especially when you need to input information that is similar to the previous entry.

**How It Works:**

When you add a new row to the table, the "Use Last Element as Template" option automatically copies the content from the last row of the table.
The fields within the new row are pre-filled with the data from the last row, allowing you to make modifications or additions as needed.
You can easily edit the duplicated values to update them with the correct information for the new entry.

**When to Use It:**

Use the "Use Last Element as Template" option when you need to enter a series of similar or related data entries. For example, when inputting records of customers or products with common attributes.

### Minimum character(s) to match

Use the "Minimum characters to Match" option when you want to type more character before opening the dropdown menu with the autocomplete feature enabled.

### Categories (former Types)

Create, Update or Delete Categories to fit your needs.

:::caution
Be sure to remove all associations with a **Category** before removing it.
:::

### Models

The "Models" option provides a list of all available data models, which serve as the foundation for preparing and rendering datasets. These models define the structure and characteristics of the data, guiding how it is processed and displayed. You can update various parameters within these models to add or remove data types and refine the processing functions.

Models available :

See [Models](./models)

You can create a feature request in Github to [request new model](https://github.com/yet-another-tool/obsidian-findoc/issues/new), or open a [PR](https://github.com/yet-another-tool/obsidian-findoc/pulls) with your own model.

**Data Source key**

Column to use when preparing the raw data. Modify this value exclusively when employing the `Split By` method for the data source.

For Example, you want to prepare the data using the content in the **Extra** Column, instead of the default **Timestamp**.

**Output**

The function used to generate the **chart** or **report**, _see the models for detailled example for that one._

**Chart Label Types**

You can edit the label shown in the chart using this option.

**Suffix**

Optional _Suffix_, only used when the **chart label type** is set to **"custom"**

**Categories**

List of Categories to include and to add in the **chart** or **report**.

**Values**

A comma delimited list to determine values, this one is only used to do difference and sum.

See the [generateDifference](./models/incomeMinusExpensesByYearMonth) for a detailled example.

### Colors

The "Colors" option is a curated palette comprising all possible color choices available for use when drawing charts, graphs, or other visual elements. This palette simplifies the process of selecting and applying colors to various elements within your visualizations.

---
sidebar_position: 5
---

# CSV File

The CSV file you're working with has the following header format:

```csv
Category,Subcategory,Value,TimeStamp,Extra
```

**DEPRECATED, but still supported:**

```csv
Type,Id,Value,TimeStamp,Extra
```

Here's a breakdown of each column's purpose:

- **Category** (_Was Type_): should contain one of the predefined [Categories](./categories/categories.md) to categorize the entry.
- **Subcategory** (_Was Id_): serves as an identifier used to distinguish and aggregate entries. This identifier is crucial for generating outputs.
- **Value**: stores numerical data, typically representing monetary values. Currently, it represents financial amounts.
- **TimeStamp**: is used to record dates in the "YYYY-MM-DD" format, providing a chronological reference for the data.
- **Extra**: a versatile field where you can include additional information or data as needed. Its use is flexible, allowing for various customizations or annotations.

## Can I use an external software to generate the CSV ?

Yes.
Be sure to update the CSV Separator in the [settings](./configuration.md)

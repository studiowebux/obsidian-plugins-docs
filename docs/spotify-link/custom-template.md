---
sidebar_position: 7
---

# Template Creation Process

To generate a personalized template, follow these steps:

1. Access the **Settings** tab.
2. Navigate to the **Templates** section.
3. Specify the desired output utilizing the provided variables.
4. Execute the Obsidian Command `append-currently-playing-track-using-template` (Hotkeys configuration is also an option).
5. Your note will display the customized template, populating information sourced from Spotify.

:::info

**Note**: This plugin is built around the **_currently playing track_** and may not retrieve all available data. If there are missing elements, you can request them through a Github Issue.

:::

**Available Variables**

- `{{ song_name }}`
- `{{ album }}`
- `{{ album_release }}`
- `{{ artists }}`
- `{{ timestamp }}` => This one prints the current datetime

**Notes**

- This template automatically inserts a double line break (`\n\n`) at the end of your template.
- Utilize Markdown to define your template.
- The plugin does not filter or sanitize your inputs. 

**Examples**

_Text:_

```text
'{{ song_name }}' by {{ artists }} from {{ album }} released in {{ album_release }}\n{{ timestamp }}
```

_Table:_

```md
| {{ song_name }} | {{ artists }} | {{ album }} | {{ album_release }} | {{ timestamp }} |
```

Outside the template you can define a _header_ to generate a Markdown Table, like this:

```md
| Song | Artists |  Album | Album Release Date | Added at |
| ---- | ------- | ------ | ------------------ | -------- |
```

_CSV:_

```csv
{{ song_name }};{{ artists }};{{ album }};{{ album_release }};{{ timestamp }};
```

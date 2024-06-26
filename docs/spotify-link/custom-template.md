---
sidebar_position: 7
---

# Template Creation Process

To generate a personalized template, follow these steps:

1. Access the **Settings** tab.
2. Navigate to the **Templates** section.
3. Specify the desired output utilizing the provided variables.
4. Execute the Obsidian Command `append-currently-playing-track-using-template` or `append-currently-playing-episode-using-template` (Hotkeys configuration is also an option).
5. Your note will display the customized template, populating information sourced from Spotify.

:::info

**Note**: This plugin is built around the **_currently playing track_** and may not retrieve all available data. If there are missing elements, you can request them through a Github Issue.
Starting v1.2.0 it supports both **track** and **episode**.

:::

**Available Variables for Songs**

- `{{ song_name }}`
- `{{ song_link }}`
- `{{ album }}`
- `{{ album_release }}`
- `{{ album_cover_large }}`
- `{{ album_cover_medium }}`
- `{{ album_cover_small }}`
- `{{ album_cover_link_large }}`
- `{{ album_cover_link_medium }}`
- `{{ album_cover_link_small }}`
- `{{ album_link }}`
- `{{ artists }}`
- `{{ timestamp }}` => This one prints the current datetime

**Available Variables for Podcasts**

- `{{ episode_name }}`
- `{{ episode_link }}`
- `{{ description }}`
- `{{ duration_ms }}`
- `{{ audio_preview_url }}`
- `{{ episode_cover_large }}`
- `{{ episode_cover_medium }}`
- `{{ episode_cover_small }}`
- `{{ episode_cover_link_large }}`
- `{{ episode_cover_link_medium }}`
- `{{ episode_cover_link_small }}`
- `{{ release_date }}`
- `{{ show_name }}`
- `{{ publisher }}`
- `{{ show_description }}`
- `{{ show_link }}`
- `{{ total_episodes }}`
- `{{ timestamp }}"` => This one prints the current datetime

**Notes**

- This template automatically inserts a double line break (`\n\n`) at the end of your template.
- Utilize Markdown to define your template.
- The plugin does not filter or sanitize your inputs.

**Examples**

_Text:_

```text
'{{ song_name }}' by {{ artists }} from {{ album }} released in {{ album_release }}\n{{ timestamp }}
```

```markdown
**Song Name:** {{ song_name }}
**Song URL:** {{ song_link }}
**Album Name:** {{ album }}
**Album Release Date:** {{ album_release }}
**Album URL:** {{ album_link }}
**Cover:** {{ album_cover_medium }}
**Cover URL:** {{ album_cover_link_medium }}
**Artists:** {{ artists }}
**Added at:** _{{ timestamp }}_
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

```md
**Episode Name:** {{ episode_name }}
**Description:** {{ description }}
**Added at:** _{{ timestamp }}_
```

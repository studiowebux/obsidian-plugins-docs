---
sidebar_position: 3
---

# Configuration

Before using **Spotify Link**, you may need to configure it. Here's how to do it:

1. Go to the "Settings" section.
2. Click on "Community plugins."
3. Find **Spotify Link** in the list of installed plugins and click on it to access its settings.
4. Configure the plugin options according to your needs.

## Options

:::info

- I do not track, collect, or store any of your data.
- The **client ID** and **client secret** you provide are used solely to access your Spotify account. Please ensure that you keep this information safe and do not share it with anyone.

:::

### Client Id

Provided By Spotify Developer API. [See more details here](./spotify)

### Client Secret

Provided By Spotify Developer API. [See more details here](./spotify)

### Redirect URI

This value is hardcoded in the plugin and must be : `obsidian://spotify-auth/`

### State

A secret that will be utilized for your authentication, and it can be any word or phrase of your choosing. Around 10 characters is enough.

### Scopes

There's no need to modify that value; it currently only requires the `user-read-currently-playing` scope.

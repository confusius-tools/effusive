# Configuration

## Set up your system paths

Launch EffUSIve with:

```bash
uv run effusive
```

Before starting an acquisition, open the **System** panel and fill in the three
fields under **System paths**:

| Field | Directory to select |
|---|---|
| **MATLAB** | Your MATLAB installation root, such as `/usr/local/MATLAB/R2024a`. |
| **Vantage** | Your Verasonics Vantage installation root, containing `VSX.m`. |
| **EchoFrame** | The directory containing the built `echoframe_mex.*` runtime MEX file. |

The EchoFrame field needs the MEX directory, not just the EchoFrame repository.
Build EchoFrame in its own checkout following
[its instructions](https://github.com/BrainEchoLab/EchoFrame), or use a prebuilt
MEX that matches your MATLAB and CUDA versions.

EffUSIve checks the paths and shows a status indicator beside each field. Settings
are saved automatically, so you only need to enter them once unless your installations
move. **You do not need an environment file or environment variables.** EffUSIve
also detects its own repository root automatically.

!!! warning "Before using acquisition hardware"
    EffUSIve is in alpha. Valid paths do not guarantee that your hardware setup is
    compatible; contact the maintainers before experimenting on your system.

## Where settings are saved

User settings are stored in `current_config.toml` in the platform-specific EffUSIve
configuration directory. On Linux, this is usually
`~/.config/effusive/current_config.toml`.

The application creates this file from its shipped defaults on first launch. Use
the interface to change settings rather than editing the shipped
`src/effusive/default_config.toml`.

!!! info "Documentation under construction"
    We're still building this guide. Detailed explanations of acquisition settings,
    storage, simulation, and z-stack configuration are coming soon.

The [Python configuration reference](../api/python/config.md) is available.

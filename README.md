[![PyPI version](https://img.shields.io/pypi/v/effusive?style=flat-square&color=ffd33d&label=PyPI)](https://pypi.org/project/effusive/)
[![Python versions](https://img.shields.io/pypi/pyversions/effusive?style=flat-square&color=0099e5&logo=python&logoColor=white)](https://pypi.org/project/effusive/)
[![License](https://img.shields.io/github/license/sdiebolt/effusive?style=flat-square&color=3ad9a4)](https://github.com/sdiebolt/effusive/blob/main/LICENSE)
[![DOI](https://img.shields.io/badge/DOI-10.5281%2Fzenodo.22555686-8b7ff7?style=flat-square)](https://doi.org/10.5281/zenodo.22555686)
[![Discord](https://img.shields.io/badge/Discord-join-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/mZd87tgmy2)

# EffUSIve

> [!WARNING]
> **Alpha status** — EffUSIve is in alpha and under active development. Use it at your
> own risk, especially on acquisition hardware. If you want to start experimenting with
> it, please contact the maintainers.

EffUSIve is an acquisition and control application for functional ultrasound
imaging (fUSI) on Verasonics Vantage systems. It provides a [napari](https://napari.org/)-based interface for
configuring acquisitions, visualizing B-mode and power Doppler images in real time, and
recording fUSI data. EffUSIve builds on
[EchoFrame](https://github.com/BrainEchoLab/EchoFrame) for high-performance ultrasound
beamforming and acquisition.

## Documentation

The [EffUSIve documentation](https://sdiebolt.github.io/effusive/) is currently being
built. Architecture and API references are available; operator guides and interface
walkthroughs are marked as under construction.

For post-acquisition exploration and analysis, see the companion project
[ConfUSIus](https://confusius.tools/).

## Requirements

- Linux or Windows.
- Python 3.11 with `uv`.
- MATLAB R2024a.
- Verasonics Vantage software 5.0.0.
- [EchoFrame](https://github.com/BrainEchoLab/EchoFrame)
- Optional: a sender for [mpep](https://github.com/cortex-lab/mpep)-compatible UDP experiment-control messages.

## Run

On Windows, start terminal as administrator.

```bash
uv run effusive
```

On first launch, open the **System** panel and set the **MATLAB**, **Vantage**, and
**EchoFrame** paths. The EchoFrame path must point to the directory containing the
built `echoframe_mex.*` file, not just its repository root. These settings are saved
automatically; you do not need to configure environment variables.

Then click the play button in the napari sidebar. The UI stays in `Starting...`
until the first frame arrives from MATLAB.

## Configuration

Defaults ship in `src/effusive/default_config.toml`. User settings persist in
`platformdirs.user_config_dir("effusive")` as `current_config.toml`
(for example `~/.config/effusive/current_config.toml` on Linux).

Config covers probe defaults, acquisition settings, storage path,
simulate mode, z-stack defaults, BIDS-like metadata, and the last crop ROI.

See [the configuration guide](https://sdiebolt.github.io/effusive/user-guide/configuration/)
for more about system paths and saved settings.

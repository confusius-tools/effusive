---
hide:
    - navigation
    - toc
---

<!-- Keep an accessible page heading while the visible wordmark stays unlinked. -->
<h1 class="sr-only">EffUSIve</h1>

<div class="hero-banner" markdown>

<p class="hero-title">Ef<span class="fusi-accent">fUSI</span>ve</p>

<p class="hero-tagline">Acquisition and control for functional ultrasound imaging on Verasonics Vantage systems.</p>

</div>

Use EffUSIve to set up acquisitions, view live B-mode and power Doppler images,
and record fUSI data from a [napari](https://napari.org/) interface. It builds on
[EchoFrame](https://github.com/BrainEchoLab/EchoFrame) for beamforming and acquisition.

!!! warning "Alpha status"
    EffUSIve is in alpha and under active development. Use it at your own risk,
    especially on acquisition hardware. Contact the maintainers before experimenting
    with it on your system.

!!! info "Documentation under construction"
    We're still building these docs. User guides and interface walkthroughs are
    coming soon. In the meantime, you can browse the architecture and API references.

## Explore EffUSIve

<div class="grid cards" markdown>

-   [:lucide-rocket:{ .lg .middle } **Getting Started**](user-guide/getting-started.md)

    ---

    Set up EffUSIve and prepare for your first acquisition.

-   [:lucide-app-window:{ .lg .middle } **Using the Controls**](user-guide/controls.md)

    ---

    Find your way around the viewer and acquisition controls.

-   [:lucide-hard-drive:{ .lg .middle } **Recording and Storage**](user-guide/recording.md)

    ---

    Record your data and organize it with BIDS-like names and metadata.

-   [:lucide-radio:{ .lg .middle } **Experiment Control**](user-guide/experiment-control.md)

    ---

    Trigger recordings from your experiment using mpep-compatible UDP messages.

-   [:lucide-move-3d:{ .lg .middle } **Z-Stacks**](user-guide/z-stacks.md)

    ---

    Acquire a stack of slices with motor control and export it to NIfTI.

-   [:lucide-workflow:{ .lg .middle } **Architecture**](architecture/overview.md)

    ---

    A look behind the scenes at how acquisition and live viewing work.

-   [:lucide-code:{ .lg .middle } **API Reference**](api/index.md)

    ---

    Find the functions and settings you need when working with the code.

</div>

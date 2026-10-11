# EffUSIve presentation and documentation plan

This working plan lives outside `docs/` and is not part of the documentation site.

## Decisions and boundaries

- Public name: **EffUSIve**, matching Con**fUSI**us.
- Share ConfUSIus' Space Grotesk display typography and neutral light/dark surfaces.
- Keep the current gold accent provisionally; revisit it when an EffUSIve logo exists.
- Keep `effusive` package, CLI, MATLAB namespace, identifiers, environment variables,
  and configuration paths unchanged.
- Preserve existing architecture and API content. Add explicit work-in-progress
  placeholders for missing guides rather than inventing instructions.
- Keep the alpha warning and hardware/data-loss cautions prominent.
- Keep the homepage focused on acquisition and EchoFrame, without implementation
  details or a ConfUSIus promotion section.
- Cover the graphical interface in the User Guide, not a separate navigation section.
- Reuse only relevant presentation pieces, not ConfUSIus' gallery infrastructure,
  dataset caches, analytics, or deployment machinery.

## Steps

### 1. Documentation foundation

- [x] Use EffUSIve in README, citation metadata, site metadata, and documentation prose.
- [x] Add shared typography and neutral backgrounds, preserving the provisional accent.
- [x] Introduce a wordmark-led homepage and entry-point cards.
- [x] Add User Guide (including acquisition controls), Community, and Citing navigation.
- [x] Add placeholders stating that documentation is currently being built wherever
  content is missing; retain existing architecture and API pages.
- [x] Remove the unused version selector until versioned deployment is implemented.
- [x] Validate the site with a strict build and check navigation links.

### 2. Installation and configuration

- [ ] Verify setup instructions against the current worker and application entry point.
- [ ] Document the EchoFrame MEX requirement (`ECHOFRAME_MEX_ROOT`), Vantage and MATLAB
  roots; correct `.env.template` without assuming unsupported defaults.
- [ ] Replace stale manual `EFFUSIVE_PATH` instructions with automatic root detection.
- [ ] Standardize the EchoFrame repository link.
- [ ] Fill installation and configuration guides, and align the README quick start.

### 3. Application display branding

- [ ] Update napari window/dock names, widget labels, tooltips, and plugin display names.
- [ ] Keep technical identifiers unchanged; update focused UI expectations and run tests.

### 4. Operator guides and illustrations

- [ ] Document first acquisition, startup feedback, run/stop, and freeze/resume.
- [ ] Document recording/storage, overwrite protection, metadata, and output checks.
- [ ] Document experiment control, crop, z-stacks, motor limits, and troubleshooting.
- [ ] Capture an annotated UI overview and representative acquisition screenshot.
- [ ] Check hardware-facing instructions with relevant manual smoke flows before
  describing them as validated.

### 5. EffUSIve to ConfUSIus handoff

- [ ] Inspect an actual recording and inventory files, metadata, coordinates, and timing.
- [ ] Verify loading/conversion in ConfUSIus and write a minimal inspection example.
- [ ] Document format limitations and keep BIDS-like versus compliant claims precise.
- [ ] Add reciprocal documentation links where appropriate; changes to ConfUSIus itself
  should be a separate scoped task.

### 6. Final visual and community pass

- [ ] Add the logo/favicon and revisit accent colors and contrast when assets exist.
- [ ] Fill Community guidance and review citation instructions.
- [ ] Check light/dark rendering, mobile layout, keyboard access, and links in a browser.
- [ ] Consider PR previews/versioned deployment only when there is a concrete need.

## Completion rule

Work one bounded step at a time. Each step must leave a buildable site with no dead
navigation links. A placeholder is an intentional unfinished guide, not evidence that
its workflow has been verified. Record validation and deferred work below.

## Progress

- Step 1 complete. No application or acquisition behavior changed.
- `uv run --no-sync zensical build --clean --strict` passed. The MATLAB docstring
  parser emitted warnings for `freezeCheck.m` and `configureTGCVector.m`; those
  source files were not changed in this step.
- Checked all 34 navigation targets, local generated links on the homepage and new
  guide/community/citation pages, and exclusion of this plan from the built site.
- `git diff --check` passed. Browser rendering and external URLs were not checked.
- Homepage follow-up: use a raw HTML wordmark with a visually hidden accessible
  heading to avoid acronym markup and a visible title permalink; simplify the copy
  and remove the ConfUSIus section. Interface guidance
  now lives in the User Guide; the separate GUI overview placeholder was removed.
- Next: step 2, installation/configuration and environment-template corrections.

# Ghostty

> Fast, native, feature-rich terminal emulator pushing modern features.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with Zig](https://img.shields.io/badge/built%20with-Zig-f7a41d.svg)](https://ziglang.org)
[![macOS](https://img.shields.io/badge/platform-macOS-lightgrey.svg)](https://ghostty.org/download)
[![Linux](https://img.shields.io/badge/platform-Linux-orange.svg)](https://ghostty.org/download)

<p align="center">
  <img src="https://github.com/user-attachments/assets/fe853809-ba8b-400b-83ab-a9a0da25be8a" alt="Ghostty Logo" width="120">
</p>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Building from Source](#building-from-source)
- [Configuration](#configuration)
- [libghostty](#libghostty)
- [Roadmap](#roadmap)
- [Crash Reports](#crash-reports)
- [Contributing](#contributing)
- [License](#license)

---

## About

Ghostty is a terminal emulator that differentiates itself by being **fast**, **feature-rich**, and **native**. While there are many excellent terminal emulators available, they all force you to choose between speed, features, or native UIs. Ghostty provides all three.

In addition to being a standalone terminal emulator, Ghostty ships as **`libghostty`** — a cross-platform, zero-dependency C and Zig library for building terminal emulators or utilizing terminal functionality (such as style parsing). Anyone can embed `libghostty` into their own applications.

For a full overview, visit [ghostty.org/docs/about](https://ghostty.org/docs/about).

---

## Features

- **Standards-compliant** — implements all regularly used control sequences; passes comprehensive xterm conformance tests
- **Competitive performance** — on par with the fastest terminal emulators (Alacritty, WezTerm), far faster than Terminal.app or iTerm
- **Modern protocol support** — Kitty graphics protocol, Kitty image protocol, clipboard sequences, synchronized rendering, light/dark mode notifications, and more
- **Rich windowing** — multi-window, tabbing, and splits with tab renaming and coloring
- **Native platform experiences**
  - macOS: true SwiftUI app, Metal renderer, CoreText font discovery, AppleScript, Apple Shortcuts
  - Linux: GTK application with deep systemd integration (cgroup isolation, always-on daemon mode)
- **Embeddable** via `libghostty` — C-compatible, works on macOS, Linux, Windows, and WebAssembly

---

## Installation

Pre-built binaries are available from the [download page](https://ghostty.org/download).

| Platform | Method |
|----------|--------|
| macOS    | DMG / Homebrew Cask |
| Linux    | Package managers (various distros), Flatpak |

---

## Building from Source

Full build instructions live in [HACKING.md](HACKING.md). Quick start:

### Prerequisites

- [Zig](https://ziglang.org/download/) (version pinned in `build.zig.zon`)
- macOS: Xcode command-line tools
- Linux: GTK 4, libadwaita, and related development libraries

### Clone and Build

```sh
git clone https://github.com/ghostty-org/ghostty
cd ghostty

# Debug build (recommended during development)
zig build

# Release build
zig build -Doptimize=ReleaseFast
```

### Common Build Commands

| Command | Description |
|---------|-------------|
| `zig build run` | Build and run Ghostty |
| `zig build test` | Run unit tests |
| `zig build test -Dtest-filter=<filter>` | Run tests matching a filter |
| `zig build run-valgrind` | Run under Valgrind for memory-leak checking |
| `zig build dist` | Build a source tarball |
| `zig build distcheck` | Build and validate a source tarball |
| `zig build update-translations` | Update translation strings |

---

## Configuration

Ghostty is configured via a plain-text config file. The full reference is in the [documentation](https://ghostty.org/docs/config).

Default config file location:

| Platform | Path |
|----------|------|
| macOS | `~/Library/Application Support/com.mitchellh.ghostty/config` |
| Linux | `$XDG_CONFIG_HOME/ghostty/config` (default: `~/.config/ghostty/config`) |

---

## libghostty

`libghostty` is the embeddable terminal library extracted from Ghostty's core.

- **`libghostty-vt`** — available today; handles terminal sequence parsing and state management for Zig, C, macOS, Linux, Windows, and WebAssembly
- API reference: [libghostty.tip.ghostty.org](https://libghostty.tip.ghostty.org/)
- Minimal complete example: [Ghostling](https://github.com/ghostty-org/ghostling)
- Smaller C/Zig examples: [`example/`](https://github.com/ghostty-org/ghostty/tree/main/example)
- Community projects: [awesome-libghostty](https://github.com/Uzaaft/awesome-libghostty)

---

## Roadmap

Ghostty is stable and used by millions of people daily.

| # | Step | Status |
|:-:|------|:------:|
| 1 | Standards-compliant terminal emulation | ✅ |
| 2 | Competitive performance | ✅ |
| 3 | Rich windowing features — multi-window, tabbing, panes | ✅ |
| 4 | Native platform experiences | ✅ |
| 5 | Cross-platform `libghostty` for embeddable terminals | ✅ |
| 6 | Ghostty-only terminal control sequences | ❌ |

---

## Crash Reports

Ghostty has a built-in crash reporter. Reports are saved locally — **nothing is sent off your machine automatically**.

- **Location:** `$XDG_STATE_HOME/ghostty/crash` (default: `~/.local/state/ghostty/crash`)
- **Extension:** `.ghosttycrash` (Sentry envelope format)
- **List reports:** `ghostty +crash-report`

To submit a crash report to the Ghostty project:

```sh
SENTRY_DSN=https://e914ee84fd895c4fe324afa3e53dac76@o4507352570920960.ingest.us.sentry.io/4507850923638784 \
  sentry-cli send-envelope --raw <path-to-crash-report>
```

> **Warning:** Crash reports include full stack memory from each thread at the time of the crash. Review the report before sharing.

---

## Contributing

Contributions are welcome! Before opening a pull request, please read:

- [CONTRIBUTING.md](CONTRIBUTING.md) — process for issues, discussions, and pull requests
- [HACKING.md](HACKING.md) — technical development details
- [AI_POLICY.md](AI_POLICY.md) — AI usage rules (**important**)

**The critical rule:** You must understand your changes. If you cannot explain what your code does and how it interacts with the broader system without AI assistance, do not submit it.

---

## License

Ghostty is released under the [MIT License](LICENSE).

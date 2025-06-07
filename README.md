# Always Tampa

A Chrome extension that overrides your browser's geolocation to always return Tampa, Florida coordinates.

## Description

Always Tampa is a simple Chrome extension that intercepts geolocation requests and consistently returns Tampa, Florida as your location. This can be useful for testing location-based features, accessing region-specific content, or maintaining location privacy.

## Features

- Overrides `navigator.geolocation` API calls
- Returns consistent Tampa, Florida coordinates
- Works on specified websites including mylocation.org and YouTube TV
- Lightweight and simple implementation

## Installation

### From Source

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension will be installed and active

### Required Files

Make sure your extension directory contains:
- `manifest.json`
- `inject.js` (content script)
- `geolocation_override.js` (injected script)
- `icon48.png` (48x48 icon)
- `icon128.png` (128x128 icon)

## How It Works

The extension uses a content script (`inject.js`) that runs at document start on specified domains. It injects a script (`geolocation_override.js`) that overrides the browser's native geolocation API to return Tampa's coordinates instead of your actual location.

### Targeted Websites

Currently configured to work on:
- `https://mylocation.org/*`
- `https://tv.youtube.com/*`

## Tampa Coordinates

The extension returns the following coordinates for Tampa, Florida:
- **Latitude**: 27.9506
- **Longitude**: -82.4572

## Technical Details

- **Manifest Version**: 3
- **Permissions**: None required
- **Content Script Injection**: Document start
- **Web Accessible Resources**: `geolocation_override.js`

## Development

To modify the extension:

1. Edit the target websites in `manifest.json` under `content_scripts.matches`
2. Modify coordinates in `geolocation_override.js`
3. Reload the extension in Chrome's extension management page

## Privacy Notice

This extension modifies your reported location to websites. It does not collect, store, or transmit any personal data. The location override only affects the websites specified in the manifest.

## Browser Compatibility

- Chrome (Manifest V3)
- Other Chromium-based browsers supporting Manifest V3

## License

MIT License

Copyright (c) 2025 Always Tampa Extension

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
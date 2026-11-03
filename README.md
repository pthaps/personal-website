# Prince Thapa's Portfolio

Personal cybersecurity portfolio for Prince Thapa, a cybersecurity student at Johnson & Wales University and IT Security Support Specialist.

Website: [www.princethapa.com](https://www.princethapa.com)

## Contents

- Skills and certifications
- Projects and competition experience
- Work experience
- Full-page resume image and a PDF download button in the header
- Email contact button

## Run locally

Open `index.html` in a browser. No dependencies or build step are required. You can also serve this folder using your editor's local preview server.

## Files

- `index.html`: page content and section navigation links
- `Prince_Thapa_Resume.pdf`: resume displayed on the page and offered for download
- `style.css`: styling, responsive layout, and local font definitions
- `images/`: project images and certification assets
- `fonts/`: Roboto Condensed variable fonts and their SIL Open Font License
- `CNAME`: custom domain configuration for GitHub Pages
- `script.js`: legacy contact form code, currently unused by the page

## Update the website

Edit the relevant section in `index.html` and styles in `style.css`. Update both `Prince_Thapa_Resume.pdf` and its rendered preview `images/resume.png` when changing the resume. Keep section IDs in sync with the navigation links.

The email buttons use `mailto:thapapri000@gmail.com` to open the visitor's configured email app. Google Fonts is not required; Roboto Condensed is served locally. Font Awesome icons are loaded from a CDN.

## Hosting

This repository contains a static site suitable for GitHub Pages. Its custom domain is configured in `CNAME` as `www.princethapa.com`. Publishing behavior depends on the repository's GitHub Pages settings.

## Font license

Roboto Condensed is distributed under the SIL Open Font License 1.1. See [`fonts/OFL.txt`](fonts/OFL.txt).

## Accessibility and mobile checks

The page includes a keyboard skip link, visible focus outlines, a primary heading, named icon links, reduced-motion support, larger link targets, and an expandable HTML version of the resume. Cards and header links wrap on narrow screens. Main text color pairs were checked against a minimum contrast ratio of 4.5:1.

Before claiming conformance, manually test keyboard navigation, VoiceOver or NVDA, mobile Safari and Chrome, 320 CSS-pixel layouts, 200% text resizing, and 400% zoom. Check the downloadable PDF's tags and reading order separately; its accessibility has not been verified. Code checks alone do not establish WCAG or ADA compliance.

# filesift-site

Public marketing site for **FileSift**, served via GitHub Pages at
**https://filesiftapp.com**.

Static HTML/CSS — no build step. Source of truth for the page design also lives in
the private app repo under `website/`.

- `index.html` — landing page
- `privacy.html` — privacy policy (App Store Privacy URL: `https://filesiftapp.com/privacy.html`)
- `styles.css` — shared styles
- `CNAME` — custom domain for GitHub Pages

## Deploy / update

GitHub Pages serves the `main` branch root. To update, edit and push:

```bash
git add -A && git commit -m "Update site" && git push
```

## DNS (domain registered at Squarespace)

In Squarespace → Domains → filesiftapp.com → DNS, add:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | kevtice15.github.io |

Then in the repo: Settings → Pages → set Custom domain to `filesiftapp.com`
(already pinned by the `CNAME` file) and enable **Enforce HTTPS** once the
certificate is issued.

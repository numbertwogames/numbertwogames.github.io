# numbertwogames.com

Website for Number Two Games, built with Jekyll and hosted on GitHub Pages.

## Structure

| Path | Purpose |
|---|---|
| `_config.yml` | Site settings: URL, contact email, Discord invite and supported languages |
| `_data/games.yml` | Games shown on the site, with store links and screenshots |
| `_data/i18n/<lang>.yml` | All text per language. Only the languages listed in `_config.yml` (currently en and nl) are published; de, fr and es are kept for later. To bring one back, add it to `languages` and restore its `<lang>/` pages from git history |
| `_layouts/` | Page templates: `home`, `game`, `support`, `privacy`, `redirect` |
| `<lang>/…` | Page stubs per language, for example `/nl/`, `/nl/ace31/`, `/nl/privacy/` |
| `index.html`, `ace31/`, `privacy/`, `support/` | Language-neutral URLs that redirect to the visitor's preferred language |
| `assets/` | CSS, JavaScript, fonts and images |

Visiting `numbertwogames.com` (or `/privacy/`, `/support/`, `/ace31/`) redirects to the language the visitor picked before, then to the first supported browser language, and otherwise to English.

## Common tasks

- **Add store links:** set `app_store_url` and `play_store_url` in `_data/games.yml`. Empty values show a "coming soon" button.
- **Change text:** edit the matching file in `_data/i18n/`. Keep the keys the same in every language.
- **Add a game:** add an entry to `_data/games.yml`, add its text under `games_text` in each language file, add images in `assets/img/games/<id>/`, and create `<lang>/<id>/index.html` for each language plus a root `<id>/index.html` redirect (copy the Ace31 files).

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploy

Push to `main`. In the repository settings under **Pages**, set the source to **Deploy from a branch** with `main` and `/ (root)`. The `CNAME` file sets the custom domain `numbertwogames.com`. Point the domain's DNS to GitHub Pages as described in [the GitHub docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site), then enable **Enforce HTTPS**.

## Credits

Titan One font by Rodrigo Fuenzalida, licensed under the SIL Open Font License 1.1 (`assets/fonts/TitanOne-OFL.txt`).

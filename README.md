<div align="center">

<img src="./assets/hero.svg" alt="Ecommerce Intelligence APIs — products, prices, reviews, sellers, and marketplaces" width="100%" />

<br />

# 🛒 Ecommerce Intelligence APIs


**Product, price, review, seller, marketplace, and store intelligence APIs.**

[![GitHub stars](https://img.shields.io/github/stars/cporter202/ecommerce-intelligence-apis?style=for-the-badge)](https://github.com/cporter202/ecommerce-intelligence-apis/stargazers)
[![Daily sync](https://img.shields.io/github/actions/workflow/status/cporter202/ecommerce-intelligence-apis/daily-sync.yml?label=daily%20sync&style=for-the-badge)](https://github.com/cporter202/ecommerce-intelligence-apis/actions/workflows/daily-sync.yml)
[![License](https://img.shields.io/github/license/cporter202/ecommerce-intelligence-apis?style=for-the-badge)](LICENSE)

<p>
  <a href="catalog/README.md"><strong>Browse API Lists</strong></a> ·
  <a href="#start-with-a-job-to-be-done"><strong>Start Building</strong></a>
</p>

</div>

<!-- APIMESA-FEATURED-START -->
## ⭐ Featured: APIMesa

<p align="center">
  <a href="https://apimesa.com" target="_blank" rel="noopener">
    <img src=".github/assets/apimesa-promo-banner.png" alt="APIMesa — AI, Scraping & Data APIs. 150+ APIs, one API key, live playground at apimesa.com" width="100%">
  </a>
</p>

**[APIMesa](https://apimesa.com)** is a pay-per-call API marketplace with 150+ live APIs for AI, scraping, data, SEO, lead generation, media, and developer utilities — one API key, clear per-call credit pricing, and a live playground for every API.

<!-- APIMESA-FEATURED-END -->

## What this repo is

A focused directory for builders collecting product catalogs, prices, reviews, seller data, marketplace rankings, and competitive retail signals.

The API lists are the main content of this repository:

- [Browse Apify ecommerce APIs](catalog/README.md) — a large directory of ready-to-use actors.
- [Browse CoreClaw ecommerce APIs](catalog/coreclaw.md) — worker APIs with API and MCP access.

| API list | What you will find |
|---|---|
| [Apify API list](catalog/README.md) | The full ecommerce API directory, with one entry per actor and description. |
| [CoreClaw API list](catalog/coreclaw.md) | The full ecommerce API directory, with worker IDs and capabilities. |

| Coverage snapshot | Current directory |
|---|---:|
| Apify ecommerce actors | **2,245** |
| CoreClaw ecommerce workers | **28** |
| Sync cadence | **Daily** |

## Start with a job to be done

| If you need to… | Start here |
|---|---|
| Monitor marketplace prices or rankings | [Apify catalog](catalog/README.md) |
| Pull Amazon, Shopify, Walmart, or eBay data | [CoreClaw API list](catalog/coreclaw.md) |
| Build a price-monitoring pipeline | [Price monitoring playbook](playbooks/price-monitoring.md) |
| Research products and reviews | [Product research playbook](playbooks/product-research.md) |
| Compare providers before building | [Provider selection checklist](playbooks/provider-selection.md) |

## Common build paths

- Competitor price and availability monitoring
- Product catalog normalization and enrichment
- Marketplace seller and assortment research
- Review collection and customer sentiment analysis
- Retail trend dashboards and alerts
- Ecommerce agency reports and data products

## Provider notes

This repository preserves referral parameters present in the API lists where available. See [LINKS.md](LINKS.md) for a neutral referral-link note. A referral link is not an endorsement of fit, quality, legality, or pricing.

Respect retailer terms, robots rules, privacy obligations, rate limits, intellectual-property restrictions, and marketplace policies. Prefer official APIs for data you own or are authorized to access.

## Maintenance

GitHub Actions checks the upstream Apify and CoreClaw category directories daily and updates only the catalog files when their content changes. Run the sync locally with:

```bash
node settings/sync_catalog.js
```

## Related directories

- [API Mega List](https://github.com/cporter202/API-mega-list)
- [Real Estate Data APIs](https://github.com/cporter202/real-estate-data-apis)
- [Job Data APIs and Scrapers](https://github.com/cporter202/job-data-apis-and-scrapers)

<!-- AIWITHCHRIS-BANNER-START -->
<p align="center">
  <a href="https://aiwithchris.com" target="_blank" rel="noopener">
    <img src=".github/assets/ai-toolkit-banner.png" alt="Hey, I'm Chris — Work Smarter, Create Faster, Earn More With AI. Join my AI Playbook at aiwithchris.com, $10/month" width="100%">
  </a>
</p>
<p align="center">
  <a href="https://aiwithchris.com"><strong>🚀 Join my AI Playbook — aiwithchris.com</strong></a><br>
  $10/month · 3,600+ prompts · agent workflows · repo breakdowns · money ideas
</p>
<!-- AIWITHCHRIS-BANNER-END -->


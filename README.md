<div align="center">

<img src="./assets/hero.svg" alt="Ecommerce Intelligence APIs — products, prices, reviews, sellers, and marketplaces" width="100%" />

<br />

# 🛒 Ecommerce Intelligence APIs

**Product, price, review, seller, marketplace, and store intelligence APIs.**

[![GitHub stars](https://img.shields.io/github/stars/cporter202/ecommerce-intelligence-apis?style=for-the-badge)](https://github.com/cporter202/ecommerce-intelligence-apis/stargazers)
[![Daily sync](https://img.shields.io/github/actions/workflow/status/cporter202/ecommerce-intelligence-apis/daily-sync.yml?label=daily%20sync&style=for-the-badge)](https://github.com/cporter202/ecommerce-intelligence-apis/actions/workflows/daily-sync.yml)
[![License](https://img.shields.io/github/license/cporter202/ecommerce-intelligence-apis?style=for-the-badge)](LICENSE)

<p>
  <a href="#featured-provider-paths"><strong>Featured Providers</strong></a> ·
  <a href="catalog/README.md"><strong>Browse 2,245 Apify APIs</strong></a> ·
  <a href="featured/coreclaw.md"><strong>Browse CoreClaw Workers</strong></a> ·
  <a href="#start-with-a-job-to-be-done"><strong>Start Building</strong></a>
</p>

</div>

## What this repo is

A focused directory for builders collecting product catalogs, prices, reviews, seller data, marketplace rankings, and competitive retail signals.

- [Browse Apify ecommerce APIs](catalog/README.md) — a large directory of ready-to-use actors.
- [Browse CoreClaw ecommerce workers](featured/coreclaw.md) — focused workers with API and MCP access.

## Featured provider paths

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🔎 Apify actor catalog</h3>
      <p>Broad coverage for product pages, marketplaces, prices, reviews, sellers, and retail research.</p>
      <p><a href="https://apify.com/?fpr=p2hrc6"><strong>Explore Apify with my referral →</strong></a></p>
    </td>
    <td width="50%" valign="top">
      <h3>⚡ CoreClaw worker catalog</h3>
      <p>Focused workers for Amazon, eBay, Shopify, Walmart, TikTok Shop, and product intelligence.</p>
      <p><a href="https://www.coreclaw.com/store/categories?fpr=chris69"><strong>Explore CoreClaw with my referral →</strong></a></p>
    </td>
  </tr>
</table>

| Coverage snapshot | Current directory |
|---|---:|
| Apify ecommerce actors | **2,245** |
| CoreClaw ecommerce workers | **28** |
| Sync cadence | **Daily** |

## Start with a job to be done

| If you need to… | Start here |
|---|---|
| Monitor marketplace prices or rankings | [Apify catalog](catalog/README.md) |
| Pull Amazon, Shopify, Walmart, or eBay data | [CoreClaw workers](featured/coreclaw.md) |
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

This repository preserves referral parameters present in the upstream catalogs where available. See [SPONSORED_PARTNERS.md](SPONSORED_PARTNERS.md) for the disclosure. A referral link is not an endorsement of fit, quality, legality, or pricing.

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

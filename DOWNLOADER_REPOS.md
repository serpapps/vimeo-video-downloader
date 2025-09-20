# Downloader Repositories Product Files

This document tracks the creation of `data/product.yml` files for all SERP Apps downloader repositories.

## Completed
- [x] vimeo-video-downloader - ✓ Complete with product.yml and readme.json

## Identified Downloader Repositories (from GitHub API search)

Based on the GitHub API search, the following downloader repositories need product.yml files:

1. **skool-downloader** - 95 stars, active
2. **loom-video-downloader** - 16 stars, active  
3. **tiktok-video-downloader** - 3 stars, active
4. **udemy-video-downloader** - 3 stars, active
5. **youtube-downloader** - 2 stars, active
6. **thinkific-downloader** - 2 stars, active
7. **pexels-video-downloader** - 2 stars, active
8. **123rf-downloader** - 2 stars, active
9. **123movies-downloader** - 2 stars, active
10. **creative-market-downloader** - 2 stars, active
11. **m3u8-downloader** - 2 stars, active
12. **stream-downloader** - 1 star, active
13. **deviantart-downloader** - 1 star, active
14. **alamy-downloader** - 1 star, active
15. **soundcloud-downloader** - 1 star, active
16. **redgifs-downloader** - 1 star, active
17. **moodle-downloader** - 1 star, active
18. **chaturbate-downloader** - 1 star, active
19. **rawpixel-downloader** - 1 star, active
20. **flickr-downloader** - 1 star, active
21. **netflix-downloader** - 1 star, active
22. **pixabay-downloader** - 1 star, active
23. **onlyfans-downloader** - 1 star, active
24. **learnworlds-downloader** - 1 star, active
25. **skillshare-downloader** - 1 star, active
26. **thumbnail-downloader** - 1 star, active
27. **eporner-downloader** - 1 star, active
28. **gokollab-downloader** - 1 star, active
29. **learndash-downloader** - 1 star, active

## Template Structure

Each repository should follow the same structure as vimeo-video-downloader:

```
data/
├── product.yml      # Main product configuration
└── readme.json      # Repository metadata
```

## Schema Compliance

All product.yml files must comply with the schema:
- Required fields: slug, seo_title, seo_description, product_page_url, purchase_url, name, tagline, description
- Optional but recommended: features, screenshots, reviews, faqs, pricing, stripe, ghl, keywords
- Platform-specific customization based on the service (Vimeo, YouTube, TikTok, etc.)

## Next Steps

To complete this task across all repositories:
1. Clone each downloader repository
2. Gather repository-specific information (README, topics, stars, etc.)
3. Create customized product.yml based on platform and features
4. Create corresponding readme.json with repository metadata
5. Ensure consistency in structure while maintaining platform uniqueness

## Implementation Notes

- Use repository README content for descriptions and features
- Extract keywords from repository topics and descriptions  
- Customize pricing and purchase URLs for each product
- Adapt screenshots and product videos for each platform
- Maintain consistent Stripe/GHL configuration structure
# Downloader Repositories Product Files

This document tracks the creation of `data/product.yml` files for all SERP Apps downloader repositories.

## Completed
- [x] vimeo-video-downloader - ✓ Complete with product.yml and readme.json

## Identified Downloader Repositories (from GitHub API search)

Based on the GitHub API search, there are **95 total downloader repositories** that need product.yml files:

### High Priority (Most Stars/Activity)
1. **skool-downloader** - 95 stars, 9 forks, active
2. **vimeo-video-downloader** - 31 stars, 0 forks, active ✅ Complete
3. **loom-video-downloader** - 16 stars, 8 forks, active  
4. **tiktok-video-downloader** - 3 stars, 0 forks, active
5. **udemy-video-downloader** - 3 stars, 0 forks, active
6. **youtube-downloader** - 2 stars, 0 forks, active
7. **thinkific-downloader** - 2 stars, 0 forks, active
8. **pexels-video-downloader** - 2 stars, 0 forks, active
9. **123rf-downloader** - 2 stars, 0 forks, active
10. **123movies-downloader** - 2 stars, 0 forks, active
11. **creative-market-downloader** - 2 stars, 0 forks, active
12. **m3u8-downloader** - 2 stars, 0 forks, active

### Complete List of All 95 Downloader Repositories
1. skool-downloader (95 stars)
2. loom-video-downloader (16 stars)
3. vimeo-video-downloader (31 stars) ✅ Complete
4. tiktok-video-downloader (3 stars)
5. udemy-video-downloader (3 stars)
6. youtube-downloader (2 stars)
7. thinkific-downloader (2 stars)
8. pexels-video-downloader (2 stars)
9. 123rf-downloader (2 stars)
10. 123movies-downloader (2 stars)
11. creative-market-downloader (2 stars)
12. m3u8-downloader (2 stars)
13. stream-downloader (1 star)
14. deviantart-downloader (1 star)
15. alamy-downloader (1 star)
16. soundcloud-downloader (1 star)
17. redgifs-downloader (1 star)
18. moodle-downloader (1 star)
19. chaturbate-downloader (1 star)
20. rawpixel-downloader (1 star)
21. flickr-downloader (1 star)
22. netflix-downloader (1 star)
23. pixabay-downloader (1 star)
24. onlyfans-downloader (1 star)
25. learnworlds-downloader (1 star)
26. skillshare-downloader (1 star)
27. thumbnail-downloader (1 star)
28. eporner-downloader (1 star)
29. gokollab-downloader (1 star)
30. learndash-downloader (1 star)
31. istock-downloader (1 star)
32. erome-downloader (1 star)
33. soundgasm-downloader (1 star)
34. terabox-downloader (1 star)
35. myfreecams-downloader (1 star)
36. dailymotion-downloader (1 star)
37. giphy-downloader (1 star)
38. podia-downloader (1 star)
39. stockvault-downloader (1 star)
40. livejasmin-downloader (1 star)
41. nicovideo-downloader (1 star)
42. camsoda-downloader (1 star)
43. bilibili-downloader (1 star)
44. dreamstime-downloader (1 star)
45. unsplash-downloader (1 star)
46. ai-downloader (1 star)
47. instagram-downloader (1 star)
48. shutterstock-downloader (1 star)
49. canva-downloader (1 star)
50. clientclub-downloader (1 star)
51. vectorstock-downloader (1 star)
52. depositphotos-downloader (1 star)
53. coursera-downloader (1 star)
54. gohighlevel-downloader (1 star)
55. storyblocks-downloader (1 star)
56. pinterest-downloader (1 star)
57. scribd-downloader (1 star)
58. stocksy-downloader (1 star)
59. bongacams-downloader (1 star)
60. pdf-downloader (1 star)
61. tubi-downloader (1 star)
62. erothots-downloader (1 star)
63. circle-downloader (1 star)
64. patreon-downloader (1 star)
65. freepik-downloader (1 star)
66. hulu-downloader (1 star)
67. redtube-video-downloader (1 star)
68. twitch-video-downloader (1 star)
69. tumblr-video-downloader (1 star)
70. twitter-video-downloader (1 star)
71. vk-video-downloader (1 star)
72. stripchat-video-downloader (1 star)
73. tnaflix-video-downloader (1 star)
74. whop-video-downloader (1 star)
75. teachable-video-downloader (1 star)
76. spankbang-video-downloader (0 stars)
77. adobe-stock-downloader (1 star)
78. kick-clip-downloader (1 star)
79. khan-academy-downloader (1 star)
80. kajabi-video-downloader (1 star)
81. xnxx-video-downloader (1 star)
82. beeg-video-downloader (1 star)
83. xvideos-video-downloader (1 star)
84. youporn-video-downloader (1 star)
85. facebook-video-downloader (1 star)
86. xhamster-video-downloader (1 star)
87. linkedin-learning-downloader (1 star)
88. getty-images-downloader (1 star)
89. snapchat-video-downloader (1 star)
90. internet-archive-downloader (1 star)
91. wistia-video-downloader (1 star)
92. telegram-video-downloader (1 star)
93. pornhub-video-downloader (1 star)
94. sprout-video-downloader (1 star)
95. amazon-video-downloader (1 star)

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
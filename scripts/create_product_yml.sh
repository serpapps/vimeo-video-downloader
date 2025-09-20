#!/bin/bash
# create_product_yml.sh - Script to create product.yml for downloader repositories

# Usage: ./create_product_yml.sh <repository-name> <platform-name>
# Example: ./create_product_yml.sh "tiktok-video-downloader" "TikTok"

REPO_NAME="$1"
PLATFORM="$2"

if [ -z "$REPO_NAME" ] || [ -z "$PLATFORM" ]; then
    echo "Usage: $0 <repository-name> <platform-name>"
    echo "Example: $0 tiktok-video-downloader TikTok"
    exit 1
fi

# Create data directory if it doesn't exist
mkdir -p data

# Extract platform-specific information
SLUG="$REPO_NAME"
PLATFORM_LOWER=$(echo "$PLATFORM" | tr '[:upper:]' '[:lower:]')

# Create product.yml template
cat > "data/product.yml" << EOF
slug: $SLUG
platform: $PLATFORM
seo_title: $PLATFORM Video Downloader - How to Download $PLATFORM videos quickly & easily
seo_description: Download $PLATFORM videos conveniently and quickly to easily backup your collection or view and organize for offline viewing.
product_page_url: https://store.serp.co/product-details/product/$SLUG
purchase_url: https://serp.ly/$SLUG
stripe:
  price_id: price_PLACEHOLDER_UPDATE_ME
  success_url: https://store.serp.co/products/$SLUG?checkout=success
  cancel_url: https://store.serp.co/products/$SLUG
  metadata:
    source: lander-template
ghl:
  pipeline_id: GYbj73q9z3SGihxNlOne
  stage_id: 8b813665-bcdd-4636-bc65-d8f79d3743cb
  source: Stripe Checkout
  tag_ids:
    - purchase-$SLUG
  workflow_ids:
    - b5d2aaaa-ce80-4b4f-8610-9c11c7a56a5a
  opportunity_name_template: "{{offerName}} • {{customerEmail}}"
name: $PLATFORM Video Downloader
tagline: Download $PLATFORM videos conveniently and quickly to easily backup your collection or view and organize for offline viewing.
featured_image: /images/$SLUG.png
featured_image_gif: /images/$SLUG.gif
github_repo_url: https://github.com/serpapps/$SLUG
github_repo_tags:
  - browser-extension
  - chrome-extension
  - download-${PLATFORM_LOWER}-videos
  - ${PLATFORM_LOWER}-downloader
  - ${PLATFORM_LOWER}-video-downloader
  - video-downloader-apps
pricing:
  label: One-time payment
  price: "\$17.00"
  original_price: "\$97"
  note: Instant download • Lifetime updates
  cta_text: Get it Now
  benefits:
    - Instant access after checkout
    - Lifetime license with free updates
    - Works on Windows, macOS, and Linux
    - Supports private and password-protected videos
    - Unlimited downloads with no throttling
    - SERP Apps support when you need help
features:
  - One click downloads
  - Auto-detects videos on any $PLATFORM page
  - Supports embedded players
  - Download in Full HD and up to 4K when available
  - Thumbnail preview & video metadata extraction
  - Fast & reliable downloads (no re-encoding)
  - Privacy-first design (no tracking, no ads)
  - Regular updates & community support
  - Works everywhere - public and private videos
  - Lightweight & transparent design
  - Original quality preserved
  - No data tracking
  - No watermarks or branding added
  - Download Progress Bar
  - Minimal Permissions
  - Community Support
  - Bug Reporting
description: >-
  The $PLATFORM Video Downloader browser extension makes it simple to save $PLATFORM videos directly to your computer in their original quality for offline access anytime. Whether you're a student, professional, or creator, this tool ensures you'll never lose access to valuable video content again.
product_videos: []
related_videos: []
screenshots: []
reviews:
  - name: Sarah Johnson
    review: This downloader is a game-changer! I needed to backup my content from $PLATFORM and this tool made it incredibly easy.
  - name: Mike Chen
    review: Finally found a tool that actually works with $PLATFORM videos. The quality is preserved perfectly and downloads are lightning fast.
faqs:
  - question: Is it legal to download $PLATFORM videos?
    answer: It depends on the video's copyright status and your intended use. Always ensure you have permission or the right to download content.
  - question: Can I download private $PLATFORM videos?
    answer: Only if you have legitimate access (password, permission, or ownership). Our extension supports private videos when you have proper authorization.
supported_operating_systems:
  - windows
  - macos
  - linux
status: live
categories:
  - ${PLATFORM_LOWER}-downloader
  - ${PLATFORM_LOWER}-video-downloader
  - video-downloader
  - browser-extension
keywords:
  - ${PLATFORM_LOWER} downloader
  - ${PLATFORM_LOWER} video downloader
  - how to download ${PLATFORM_LOWER} videos
  - download ${PLATFORM_LOWER} video
EOF

# Create readme.json template
cat > "data/readme.json" << EOF
{
  "name": "$PLATFORM Video Downloader",
  "description": "Download $PLATFORM videos to easily backup your collection or view and organize for offline viewing",
  "version": "1.0.0",
  "repository_url": "https://github.com/serpapps/$SLUG",
  "homepage": "https://store.serp.co/product-details/product/$SLUG",
  "topics": [
    "browser-extension",
    "chrome-extension",
    "download-${PLATFORM_LOWER}-videos",
    "${PLATFORM_LOWER}-downloader",
    "${PLATFORM_LOWER}-video-downloader",
    "video-downloader-apps"
  ],
  "language": "JavaScript",
  "license": "MIT"
}
EOF

echo "✅ Created data/product.yml and data/readme.json for $REPO_NAME"
echo "⚠️  Remember to:"
echo "   1. Update the Stripe price_id"
echo "   2. Add real screenshots URLs"
echo "   3. Add product and related videos"
echo "   4. Customize features based on platform capabilities"
echo "   5. Review and update all placeholder content"
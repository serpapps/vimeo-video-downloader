#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateMarkdown(metadataPath, outputPath = null) {
  try {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    
    let markdown = '';
    
    // Title and tagline
    markdown += `# ${metadata.title}\n\n`;
    if (metadata.tagline) {
      markdown += `${metadata.tagline}\n\n`;
    }
    
    // Short description
    if (metadata.description?.short) {
      metadata.description.short.forEach(item => {
        markdown += `- ${item}\n`;
      });
      markdown += '\n';
    }
    
    // Demo video if available
    const demoVideo = metadata.media?.videos?.find(v => v.type === 'demo');
    if (demoVideo && demoVideo.thumbnail) {
      markdown += `<a href="${demoVideo.url}" target="_blank">\n`;
      markdown += `<img src="${demoVideo.thumbnail}" width="900px">\n`;
      markdown += `</a>\n\n`;
    }
    
    // Links section
    if (metadata.links) {
      markdown += `## 🔗 Links\n\n`;
      if (metadata.links.purchase) {
        markdown += `- 🎁 Get it [here](${metadata.links.purchase})\n`;
      }
      if (metadata.links.faq) {
        markdown += `- ❓ Check FAQs [here](${metadata.links.faq})\n`;
      }
      if (metadata.links.issues) {
        markdown += `- 🐛 Report bugs [here](${metadata.links.issues})\n`;
        markdown += `- 🆕 Request features [here](${metadata.links.issues})\n`;
      }
      
      if (metadata.links.support) {
        markdown += `\n### Resources\n\n`;
        if (metadata.links.community) {
          markdown += `- 💬 [Community](${metadata.links.community})\n`;
        }
        if (metadata.links.support.newsletter) {
          markdown += `- 💌 [Newsletter](${metadata.links.support.newsletter})\n`;
        }
        if (metadata.links.support.shop) {
          markdown += `- 🛒 [Shop](${metadata.links.support.shop})\n`;
        }
        if (metadata.links.support.courses) {
          markdown += `- 🎓 [Courses](${metadata.links.support.courses})\n`;
        }
      }
      markdown += '\n';
    }
    
    // Table of contents
    markdown += `## Table of Contents\n`;
    if (metadata.description?.problems_solved) {
      markdown += `- [Solving these problems](#solving-these-problems)\n`;
    }
    if (metadata.description?.target_audience) {
      markdown += `- [Perfect for](#perfect-for)\n`;
    }
    if (metadata.features?.live) {
      markdown += `- [Live & Planned Features](#live--planned-features)\n`;
    }
    if (metadata.installation?.steps) {
      markdown += `- [Installation Instructions](#installation-instructions)\n`;
    }
    markdown += '\n';
    
    // Problems solved
    if (metadata.description?.problems_solved) {
      markdown += `## Solving these problems\n\n`;
      metadata.description.problems_solved.forEach(problem => {
        markdown += `- ${problem}\n`;
      });
      markdown += '\n';
    }
    
    // Target audience
    if (metadata.description?.target_audience) {
      markdown += `## Perfect for\n\n`;
      metadata.description.target_audience.forEach(audience => {
        markdown += `- ${audience}\n`;
      });
      markdown += '\n';
    }
    
    // Features
    if (metadata.features?.live) {
      markdown += `## Live & Planned Features\n\n`;
      metadata.features.live.forEach(feature => {
        markdown += `- ${feature}\n`;
      });
      markdown += '\n';
    }
    
    // Screenshots
    if (metadata.media?.screenshots && metadata.media.screenshots.length > 0) {
      markdown += `## Screenshots\n\n`;
      metadata.media.screenshots.forEach(screenshot => {
        markdown += `<br><br>\n`;
        markdown += `![${screenshot.alt}](${screenshot.url})\n`;
      });
      markdown += `<br><br>\n\n`;
    }
    
    // Installation
    if (metadata.installation?.steps) {
      markdown += `## Installation Instructions\n\n`;
      metadata.installation.steps.forEach((step, index) => {
        markdown += `${index + 1}. ${step}\n`;
      });
      
      if (metadata.installation.authentication?.license_key_required) {
        markdown += `\n> Note: You can find your license key in your email confirmation from purchasing the product\n`;
      }
      
      if (metadata.links?.releases) {
        // Find step mentioning releases and add link
        const releaseStepIndex = metadata.installation.steps.findIndex(step => 
          step.toLowerCase().includes('releases') || step.toLowerCase().includes('.zip')
        );
        if (releaseStepIndex !== -1) {
          const lines = markdown.split('\n');
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(`${releaseStepIndex + 1}.`) && lines[i].includes('Releases')) {
              lines[i] = lines[i].replace('Releases', `[Releases](${metadata.links.releases})`);
              break;
            }
          }
          markdown = lines.join('\n');
        }
      }
      
      markdown += '\n---\n\n';
    }
    
    // Additional videos
    const tutorialVideos = metadata.media?.videos?.filter(v => v.type === 'tutorial');
    if (tutorialVideos && tutorialVideos.length > 0) {
      markdown += `<details>\n\n<summary>More videos</summary>\n\n`;
      
      tutorialVideos.forEach(video => {
        markdown += `# ${video.title}\n\n`;
        if (video.thumbnail) {
          markdown += `<a href="${video.url}" target="_blank">\n`;
          markdown += `<img src="${video.thumbnail}" width="700px">\n`;
          markdown += `</a>\n\n`;
        }
      });
      
      markdown += `</details>\n`;
    }
    
    // Write to file or return
    if (outputPath) {
      fs.writeFileSync(outputPath, markdown);
      console.log(`✅ Generated markdown written to: ${outputPath}`);
    } else {
      return markdown;
    }
    
  } catch (error) {
    console.error(`❌ Error generating markdown: ${error.message}`);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);
  const metadataPath = args[0] || './vimeo-video-downloader-metadata.json';
  const outputPath = args[1] || './GENERATED_README.md';
  
  if (!fs.existsSync(metadataPath)) {
    console.error(`❌ Metadata file not found: ${metadataPath}`);
    process.exit(1);
  }
  
  console.log(`🔄 Generating README from: ${metadataPath}`);
  generateMarkdown(metadataPath, outputPath);
}

if (require.main === module) {
  main();
}

module.exports = { generateMarkdown };
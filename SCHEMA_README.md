# Browser Extension Metadata Schema

This repository contains a standardized JSON schema for browser extension metadata, allowing for consistent documentation and programmatic population of extension information across multiple projects.

## Schema Overview

The `extension-metadata-schema.json` file defines a comprehensive structure for capturing all essential information about a browser extension, including:

### Core Information
- **Title**: Full extension name
- **Tagline**: Short descriptive tagline
- **Description**: Detailed description with problems solved and target audience
- **Version**: Current version and release information

### Links & Resources
- **Purchase**: Primary download/purchase URL
- **Repository**: Source code repository
- **Releases**: Release notes and downloads
- **Support**: Community, FAQ, and support resources

### Media Assets
- **Screenshots**: Array of screenshot objects with URLs, alt text, and captions
- **Videos**: Demo videos, tutorials, and promotional content
- **Logo/Icon**: Extension branding assets

### Technical Details
- **Features**: Live features, planned features, and highlights
- **Compatibility**: Operating systems, browsers, media types, and download targets
- **Installation**: Step-by-step instructions, requirements, and authentication details
- **Permissions**: Required browser permissions

### Additional Metadata
- **Pricing**: Pricing model and cost information
- **Keywords**: SEO and search keywords
- **Categories**: Extension classification
- **Developer**: Developer/organization information

## Usage

### 1. Schema Validation

You can use the schema to validate your extension metadata JSON files:

```bash
# Using ajv-cli (install with: npm install -g ajv-cli)
ajv validate -s extension-metadata-schema.json -d your-extension-metadata.json
```

### 2. Example Implementation

See `vimeo-video-downloader-metadata.json` for a complete example of how to populate the schema with real extension data.

### 3. Programmatic Usage

```javascript
// Node.js example
const Ajv = require('ajv');
const schema = require('./extension-metadata-schema.json');
const extensionData = require('./your-extension-metadata.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(extensionData);

if (!valid) {
  console.log('Validation errors:', validate.errors);
} else {
  console.log('Extension metadata is valid!');
}
```

### 4. Generating Documentation

The structured metadata can be used to automatically generate:
- README files
- Marketing pages
- Store listings
- Documentation sites

## Schema Structure

### Required Fields
- `title`: Extension name
- `description.short`: Key feature bullets
- `version.current`: Current version number
- `links.purchase`: Primary purchase/download URL
- `links.repository`: Source repository URL
- `compatibility.operating_systems`: Supported OS list
- `compatibility.browsers`: Supported browser list

### Optional but Recommended
- `tagline`: Short marketing tagline
- `media.screenshots`: Visual demonstrations
- `media.videos`: Video demonstrations
- `features.live`: Current feature list
- `installation.steps`: Installation instructions
- `keywords`: SEO keywords

## File Naming Convention

Recommended naming for your extension metadata files:
- Schema: `extension-metadata-schema.json`
- Individual extensions: `{extension-name}-metadata.json`

## Validation Rules

The schema includes several validation rules:
- Version numbers must follow semantic versioning pattern
- URLs must be valid URI format
- Browser names are restricted to supported values
- Operating systems use standardized names
- File formats follow common extension patterns

## Contributing

To extend or modify the schema:

1. Update `extension-metadata-schema.json`
2. Update the example file `vimeo-video-downloader-metadata.json`
3. Test validation with real data
4. Update this documentation

## License

This schema is designed to be used across multiple browser extension projects within the SERP Apps organization and can be adapted for other use cases.
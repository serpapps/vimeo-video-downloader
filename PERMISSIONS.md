# Chrome Extension Permissions Justification

This document explains why each permission is required for the Vimeo Video Downloader extension to function properly. We believe in transparency and minimal permissions, only requesting what's absolutely necessary for core functionality.

## Required Permissions

### `downloads`
**Purpose**: Save Vimeo videos directly to the user's computer
**Justification**: This is the core functionality of the extension. The `downloads` permission allows the extension to programmatically download video files to the user's default download folder or a specified location. Without this permission, users would need to manually save each video file, defeating the purpose of an automated downloader.
**Usage**: Used when the user clicks the download button to save the detected video file.

### `activeTab`
**Purpose**: Access the content of the currently active tab to detect Vimeo videos
**Justification**: The extension needs to scan the active tab for Vimeo video content, embedded players, and video metadata. This permission provides access only to the tab the user is currently viewing, which is more privacy-friendly than requesting access to all tabs.
**Usage**: Activated when the user opens the extension popup or right-clicks to access the context menu on a page containing Vimeo videos.

### `storage`
**Purpose**: Save user preferences, download history, and extension settings
**Justification**: Stores user configuration such as:
- Preferred download quality settings
- Download folder preferences
- License key and user authentication
- Download history for progress tracking
- Extension settings and preferences
**Usage**: Data is stored locally in the browser and synced across devices when the user is signed into Chrome.

### `notifications`
**Purpose**: Inform users about download progress and completion status
**Justification**: Provides non-intrusive notifications to users about:
- Download start confirmation
- Download progress updates
- Download completion alerts
- Error notifications if download fails
This enhances user experience by providing feedback without requiring the extension popup to remain open.
**Usage**: Triggered during download operations to keep users informed of progress.

### `contextMenus`
**Purpose**: Add right-click menu options for quick video downloading
**Justification**: Allows users to right-click on Vimeo videos or links and select "Download Video" directly from the context menu. This provides a convenient alternative to using the extension popup and improves user workflow efficiency.
**Usage**: Appears when right-clicking on pages containing Vimeo content, providing quick access to download functionality.

### `clipboardRead`
**Purpose**: Read video URLs from the user's clipboard for batch downloading
**Justification**: Enables users to copy Vimeo URLs and paste them into the extension for downloading, even when not currently viewing the video page. This is particularly useful for:
- Downloading private videos shared via direct links
- Batch downloading multiple videos
- Processing videos from external sources (emails, documents, etc.)
**Usage**: Activated when the user chooses to paste a URL into the extension interface.

### `tabs`
**Purpose**: Open new tabs for download progress tracking and video processing
**Justification**: Required to:
- Open video pages in background tabs for metadata extraction
- Create dedicated tabs for handling large downloads
- Manage tab switching for better download organization
- Close temporary tabs created during the download process
**Usage**: Used during video processing and download operations that require additional tab management.

### `scripting`
**Purpose**: Inject content scripts to detect and extract video information
**Justification**: Vimeo videos are often embedded using complex JavaScript players. The extension needs to inject scripts into web pages to:
- Detect embedded Vimeo players
- Extract video metadata (title, duration, quality options)
- Access video stream URLs from the Vimeo player API
- Handle different types of Vimeo embeds (iframe, direct embeds, etc.)
**Usage**: Scripts are injected only when Vimeo content is detected on the page.

### `offscreen`
**Purpose**: Process video metadata and perform downloads in a background context
**Justification**: Enables heavy processing tasks to run in the background without affecting page performance:
- Video metadata extraction and parsing
- Quality selection and stream URL processing
- Large file download operations
- Background processing of multiple video downloads
This prevents the extension from slowing down the user's browsing experience.
**Usage**: Activated during video analysis and download preparation phases.

### `cookies`
**Purpose**: Access authentication cookies for private and protected Vimeo content
**Justification**: Many Vimeo videos are private, password-protected, or require user authentication. The extension needs access to relevant cookies to:
- Download private videos that the user has legitimate access to
- Handle password-protected content
- Access premium or subscription-based videos
- Maintain user sessions for authenticated video content
**Usage**: Only accesses cookies related to Vimeo domains and video authentication.

### `webNavigation`
**Purpose**: Detect page navigation changes and video content updates
**Justification**: Modern websites use AJAX and dynamic content loading. This permission allows the extension to:
- Detect when new video content is loaded without a full page refresh
- Monitor single-page applications (SPAs) for video changes
- Update the extension interface when users navigate to different videos
- Handle dynamic Vimeo player initialization
**Usage**: Monitors navigation events on pages to refresh video detection capabilities.

### Host Permissions (`*://*.vimeo.com/*`, `*://*.vimeocdn.com/*`)
**Purpose**: Access Vimeo's servers and CDN for video content and metadata
**Justification**: Required to:
- Communicate with Vimeo's API endpoints
- Access video metadata and stream information
- Download video files from Vimeo's content delivery network
- Handle authentication and access control
- Retrieve video thumbnails and preview information
**Usage**: Makes requests to Vimeo's servers to gather video information and download content.

## Privacy and Security Commitment

We are committed to user privacy and security:

- **Minimal Data Collection**: We only access data necessary for video downloading functionality
- **No Tracking**: The extension does not track user behavior or send analytics data
- **Local Storage**: User preferences and download history are stored locally in the browser
- **Secure Communication**: All communications with Vimeo use secure HTTPS connections
- **Permission Transparency**: This document provides full transparency about permission usage

## Questions or Concerns?

If you have questions about these permissions or how they're used, please:
- Check our [FAQ](https://github.com/orgs/serpapps/discussions/categories/faq)
- Report issues [here](https://github.com/serpapps/vimeo-video-downloader/issues)
- Join our [community discussion](https://serp.ly/@serp/community)

We believe in maintaining user trust through transparency and minimal permission usage while providing powerful video downloading capabilities.
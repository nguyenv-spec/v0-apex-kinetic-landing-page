# Metadata Implementation Plan

## Objective
Improve the site’s SEO and social sharing experience by replacing the blank preview state with a branded social image, adding complete metadata for search engines and social platforms, and ensuring the site presents a polished, trustworthy preview when shared.

## Current Gaps
- The site currently uses a placeholder domain value instead of the real production URL.
- Social sharing metadata is present but does not include a dedicated Open Graph/Twitter image.
- The current preview experience is likely blank or weak because there is no robust image asset configured for social cards.
- The metadata setup should be expanded to include canonical URL, favicon/apple icons, and stronger page-specific SEO signals.

## Proposed Workstream

### 1. Define the final brand metadata values
Create a single source of truth for:
- Canonical domain
- Site title and short title
- Primary description
- Primary keywords
- Business name, tagline, phone, email, and location
- Default social share title and description
- Default author/organization identity for search engines and social platforms

This should be centralized so the metadata is easy to maintain and consistent across pages.

### 2. Use the provided social snapshot image
Use the image already available in the public folder named og-image.png as the official social sharing snapshot.

Implementation details:
- This image should be used as the default Open Graph image and Twitter card image.
- It should be referenced from the public directory using the correct relative path.
- If the image needs any adjustment for optimal rendering, it should be reviewed for aspect ratio, text readability, and branding clarity before finalizing.
- The image should be treated as the primary preview asset for all shared links, including homepage and key landing pages.

Requirements:
- Recommended image dimensions: 1200 x 630 px for best social card compatibility
- Must visually represent the homepage and brand
- Should include clear Apex Kinetic branding and a polished visual style
- Should work well on Facebook, LinkedIn, Slack, Discord, and X/Twitter

### 3. Update global metadata in the app shell
Enhance the main metadata configuration in the app layout so it includes:
- Proper metadataBase using the production URL
- Canonical URL
- Title template
- Page description
- Open Graph metadata with the og-image.png asset
- Twitter metadata with the og-image.png asset
- Icons and apple touch icon
- Optional: manifest metadata for mobile install experience

### 4. Add page-specific metadata for important routes
Ensure the main landing page and contact page each have strong metadata.

Recommended targets:
- Home page
- Contact page
- Any key service or program pages if added later

This should include page-specific titles and descriptions rather than relying only on global defaults.

### 5. Strengthen SEO and discoverability
Add supporting metadata and SEO elements such as:
- Canonical links
- Robots directives
- Sitemap generation
- Structured data already present should be reviewed and kept aligned with the final business info
- A clear organization identity for search engines and social platforms

### 6. Verify social preview behavior
After implementation, validate that link previews render correctly in common platforms.

Validation checklist:
- Open Graph image appears correctly
- Twitter card renders with the correct image
- Title and description display properly
- The preview is not blank and looks polished
- The shared preview is consistent with the brand and the provided og-image.png asset

### 7. Document final metadata assets
Create and maintain a short list of the final assets used:
- Social image path: /og-image.png
- Favicon path
- Apple icon path
- Default metadata values
- Any future image replacements or updates

This will make future updates straightforward.

### 3. Update global metadata in the app shell
Enhance the main metadata configuration in the app layout so it includes:
- Proper metadataBase using the production URL
- Canonical URL
- Title template
- Page description
- Open Graph metadata
- Twitter metadata
- Icons and apple touch icon
- Optional: manifest metadata for mobile install experience

### 4. Add page-specific metadata for important routes
Ensure the main landing page and contact page each have strong metadata.

Recommended targets:
- Home page
- Contact page
- Any key service or program pages if added later

This should include page-specific titles and descriptions rather than relying only on global defaults.

### 5. Strengthen SEO and discoverability
Add supporting metadata and SEO elements such as:
- Canonical links
- Robots directives
- Sitemap generation
- Structured data already present should be reviewed and kept aligned with the final business info

### 6. Verify social preview behavior
After implementation, validate that link previews render correctly in common platforms.

Validation checklist:
- Open Graph image appears correctly
- Twitter card renders with the correct image
- Title and description display properly
- The preview is not blank and looks polished

### 7. Document final metadata assets
Create and maintain a short list of the final assets used:
- Social image path
- Favicon path
- Apple icon path
- Default metadata values

This will make future updates straightforward.

## Implementation Checklist
- [ ] Confirm the production domain
- [ ] Confirm that og-image.png exists in the public folder and is the intended social snapshot asset
- [ ] Reference og-image.png in the Open Graph and Twitter metadata configuration
- [ ] Update the global metadata configuration
- [ ] Add page-specific metadata for key routes
- [ ] Verify Open Graph and Twitter card output
- [ ] Test preview rendering in a social sharing tool or browser preview

## Acceptance Criteria
- Sharing the site URL produces a rich, branded preview instead of a blank or weak card
- The homepage and contact page have strong, accurate metadata
- Social platforms display the correct title, description, and image
- The setup is maintainable and easy to update later

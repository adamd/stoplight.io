---
path: /blog/stoplight-v4-9-0
tags:
  - blog
  - blog-changelog
relatedTags:
  - blog-changelog
publishedDate: 2019-03-25T16:59:41.917Z
author: Taylor Barnett
title: Stoplight v4.9.0 Release
color: black
tabs:
  - {}
disqus:
  enabled: true
actionBar:
  buttons:
    - color: purple
  enabled: false
meta:
  robots: 'index, follow'
  twitter: {}
---
## New 🚀

### Extensions

Users can now interact with OpenAPI extensions through the Stoplight visual editor

## Enhancements 💪

* [Modeling] Added ability to support 'no security' for an API operation
* [Platform] Added ability to search for users by display name and email, in addition to just usernames
* [Modeling] Added a banner letting users know they can't edit without write access
* [Hubs] Removed endpoints marked private from the specification document when download link is selected
* [Modeling] Added safeguard for scopes, specifically with OAuth

## Fixes 🔧
* [Hubs] Markdown code blocks were not getting highlighted
* [Hubs] When you changed pages, they were being replaced in the body frame without resetting scrolling to the top of new page ([Forum Link](https://community.stoplight.io/t/pages-open-in-weird-spots]))
* [Mocking] Unable to enter a forward-slash character in path for mock test request
* [Modeling] - Changing an object to any of the combination types (allOf, anyOf, oneOf) erases the data
* [Hubs] Variable templating was not working properly in Hubs
* [Hubs] Path Parameter Variables were not showing in Test Request UI when both http and https were set as security schemas ([Forum Link](https://community.stoplight.io/t/variables-missing-from-code-generator-forms))
* [Platform] Editor sometimes showed warnings that someone else was editing when they were not
# News App

Minimal proof-of-concept React Native news reader and simple web page that consume RSS feeds from a WordPress backend.

## WordPress

Use a WordPress site to manage stories. WordPress automatically exposes posts as an RSS feed at `https://your-site.example/feed`.

## Mobile

`App.js` demonstrates a React Native application that fetches the RSS feed and renders a list of article titles. Update the feed URL in the file to point to your WordPress site.

## Web

`web/index.html` is a minimal website that uses the same feed and lists articles as links.

## Development

Install dependencies and run tests:

```sh
npm install
npm test
```

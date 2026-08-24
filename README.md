# JS-Zuitt-ChartJS

A training/practice sample demonstrating the use of [Chart.js](https://www.chartjs.org/) for rendering different chart types in the browser, including bar charts, pie charts, and a chart populated from a live API response.

## Description

This is a single-page HTML/JavaScript sample built to practice Chart.js fundamentals. It renders three separate charts on one page:

1. A static **bar chart** with hardcoded sample data.
2. A **pie chart** built from a JavaScript array of objects, demonstrating array/object manipulation (`.map()`, dot/bracket notation) to prepare chart data.
3. A **bar chart** populated dynamically from a live "Twitter Trending Topics" API call.

## Features

- Bar chart rendering with Chart.js
- Pie chart rendering with Chart.js
- Transforming raw JS objects/arrays into chart-ready data using `.map()`
- Fetching and displaying live data (Twitter trending topics) in a chart
- Styled with Bootstrap 5

## Tech Stack

- **HTML5**
- **JavaScript** (vanilla)
- **[Chart.js](https://www.chartjs.org/)** (loaded via CDN)
- **[Bootstrap 5.3.8](https://getbootstrap.com/)** (loaded via CDN, for layout/styling)
- **[Popper.js](https://popper.js.org/)** (loaded via CDN, Bootstrap dependency)

## Prerequisites

- A modern web browser
- Internet connection (required — Chart.js, Bootstrap, and Popper are loaded from CDNs, and the trending-topics chart calls a live API)

## Installation

Clone the repository:

```bash
git clone https://github.com/paoradox/JS-Zuitt-ChartJS.git
cd JS-Zuitt-ChartJS
```

No build step or package installation is required — this is a static HTML/JS project.

## Configuration

`myChart.js` calls the Twitter Trends API via RapidAPI and requires a valid `x-rapidapi-key`. Replace the key in `myChart.js` with your own RapidAPI key before running that part of the sample:

```js
headers: {
  'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
  'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
  ...
}
```

## Usage

Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

Then navigate to the served URL. The page will render all three charts (`defaultChart`, `sampleChart`, `myChart`).

## Project Structure

```
JS-Zuitt-ChartJS/
├── index.html      # Page markup, loads Chart.js/Bootstrap and the scripts below
├── default.js       # Static bar chart example
├── sample.js         # Pie chart example built from a JS array/object dataset
└── myChart.js         # Bar chart populated from a live Twitter trends API call
```

## Troubleshooting

- **Charts don't appear:** check the browser console — this project depends on CDN-hosted Chart.js/Bootstrap, so it requires an internet connection.
- **`myChart` (trending topics) chart doesn't load:** the API key in `myChart.js` may be invalid or rate-limited; use your own RapidAPI key (see Configuration above).

## License

Not specified.

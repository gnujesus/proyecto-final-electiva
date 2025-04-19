# DevOps CI/CD Practice with GitHub

This repository demonstrates a complete CI/CD pipeline using GitHub Actions and GitHub Pages.

## Project Structure

- `index.html`: Main HTML page
- `styles.css`: CSS styles for the page
- `script.js`: JavaScript functionality
- `test/`: Unit tests for the HTML page
- `Dockerfile`: Docker configuration for local development
- `.github/workflows/`: GitHub Actions workflow files

## Running Locally with Docker

To run the website locally using Docker:

\`\`\`bash
docker-compose up
\`\`\`

Then visit http://localhost:8080 in your browser.

## Running Tests Locally

To run the tests locally:

\`\`\`bash
npm install
npm test
\`\`\`

## CI/CD Pipeline

This project includes a complete CI/CD pipeline:

1. Automatically runs tests on every push and pull request
2. Automatically deploys to GitHub Pages when changes are pushed to the main branch

## GitHub Pages

The website is automatically deployed to GitHub Pages and can be accessed at:
https://[your-username].github.io/[repository-name]/

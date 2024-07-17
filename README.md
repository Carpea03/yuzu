# Yuzu - Legal Services Website

This repository contains the source code for the Yuzu website, an Alternative Legal Services Provider offering Managed Legal Services, Fractional GCs, Contract Lawyers, and Legal Ops Consulting.

## Project Structure

- `content/`: Contains the Markdown files for the website content
- `layouts/`: Contains the HTML templates for the website structure
- `static/`: Contains static assets like images and CSS files
- `config.toml`: The main configuration file for the Hugo site

## Prerequisites

- [Hugo](https://gohugo.io/) (Extended version)
- Git

## Local Development

1. Clone the repository:
   ```
   git clone https://github.com/your-username/yuzu-website.git
   cd yuzu-website
   ```

2. Start the Hugo server:
   ```
   hugo server -D
   ```

3. Open your browser and visit `http://localhost:1313` to see the website.

## Deployment Instructions

1. Build the site:
   ```
   hugo --minify
   ```

2. The built site will be in the `public/` directory. You can now deploy this directory to your web hosting service.

3. For GitHub Pages deployment:
   - Ensure your repository is set up for GitHub Pages in the Settings.
   - Push the contents of the `public/` directory to the `gh-pages` branch:
     ```
     cd public
     git init
     git add .
     git commit -m "Deploy to GitHub Pages"
     git push --force git@github.com:your-username/yuzu-website.git main:gh-pages
     ```

4. For other hosting services, upload the contents of the `public/` directory to your web server.

## Contributing

1. Create a new branch for your feature or bug fix.
2. Make your changes and commit them with a descriptive commit message.
3. Push your branch and create a pull request for review.

## Support

For any questions or issues, please open an issue in the GitHub repository or contact the maintainers directly.

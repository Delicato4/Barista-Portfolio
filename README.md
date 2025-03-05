# Arshia Portfolio

A personal portfolio website built with HTML and Tailwind CSS.

## Setup Instructions

1. Clone the repository:

```bash
git clone [your-repository-url]
cd arshia-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Build the CSS:

```bash
npm run build
```

4. Open `index.html` in your browser to view the website.

## GitHub Pages Deployment

1. Push your code to GitHub:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository settings on GitHub
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

Your site will be available at: `https://[your-username].github.io/[repository-name]`

### Important Notes for GitHub Pages

- Make sure all image paths in your HTML start with `./` (e.g., `./images/your-image.jpg`)
- The site may take a few minutes to be available after enabling GitHub Pages
- If you make changes, remember to:
  1. Run `npm run build` to update the CSS
  2. Commit and push your changes
  3. Wait a few minutes for GitHub Pages to update

## Project Structure

- `index.html` - Main HTML file
- `src/input.css` - Source CSS file with Tailwind directives
- `dist/output.css` - Compiled CSS file (generated after running build)
- `images/` - Directory for all your images
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Development

For development, you can use:

```bash
npm run dev
```

This will watch for changes in your CSS files and automatically recompile them.

## Technologies Used

- HTML5
- Tailwind CSS
- PostCSS
- Autoprefixer

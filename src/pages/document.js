// const DOMAIN = 'http://localhost:3000';
export const HtmlPage = ({ title, content, navigation, polymorph }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="description" content="Test OMG" />
        <meta name="author" content="Testing" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
        <link href="/static/styles.bundle.css" rel="stylesheet" />
        <script type="module" src="/static/bundle.modern.js" defer></script>
      </head>
      <body>
        ${navigation}
        <main data-router-wrapper>
          ${content}
        </main>
      </body>
    </html>
  `;
};

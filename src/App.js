import React from "react";
import { marked } from "marked";
import "./index.css";

function App() {
  const [markdown, setMarkdown] =
    React.useState(`# Welcome to my Markdown Previewer!

## This is a subheading
[I'm a link](https://example.com)
Here is some \`inline code\`.

\`\`\`
This is a code block
function helloWorld() {
  console.log("Hello!");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote

**This is bold text**
`);

  return (
    <div id="container">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(markdown, { breaks: true }),
        }}
      ></div>
    </div>
  );
}

export default App; // 🔵 Required so index.js can load this

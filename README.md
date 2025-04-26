# Markdown Converter

A modern, feature-rich web application that converts Markdown to HTML using Flask.

## Features

- Clean, modern interface with responsive design
- Live preview of HTML output
- Syntax highlighting for code blocks
- Support for tables, lists, code blocks, and other Markdown elements
- Copy HTML to clipboard functionality
- Sample markdown templates for easy testing
- Security measures to prevent XSS attacks

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/markdown-converter.git
cd markdown-converter
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python app.py
```

4. Open your browser and navigate to:
```
http://127.0.0.1:5000/
```

## Project Structure

```
markdown_converter/
│
├── app.py                     # Main Flask application
│
├── requirements.txt           # Dependencies
│
├── templates/
│   └── index.html             # Main HTML template
│
└── static/
    ├── css/
    │   └── style.css          # CSS stylesheet
    │
    └── js/
        └── script.js          # JavaScript functionality
```

## Dependencies

- Flask: Web framework
- Markdown: Markdown to HTML conversion
- Bleach: HTML sanitization

## Usage

1. Enter or paste Markdown text in the left panel
2. Click "Convert" to see the HTML preview in the right panel
3. Use the "Copy HTML" button to copy the generated HTML to your clipboard
4. Use the "Sample" button to load example Markdown
5. Use the "Clear" button to reset the input area

## Markdown Examples

The application supports standard Markdown syntax including:

- Headers (# H1, ## H2, etc.)
- Emphasis (*italic*, **bold**)
- Lists (ordered and unordered)
- Links and images
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Horizontal rules

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

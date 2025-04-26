from flask import Flask, render_template, request
import markdown
import bleach
from markdown.extensions.fenced_code import FencedCodeExtension
from markdown.extensions.tables import TableExtension

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    html_output = ''
    raw_markdown = ''
    
    if request.method == 'POST':
        raw_markdown = request.form['markdown']
        # Convert markdown to HTML with extensions for code blocks and tables
        html_output = markdown.markdown(
            raw_markdown,
            extensions=[
                'markdown.extensions.extra',
                'markdown.extensions.codehilite',
                FencedCodeExtension(),
                TableExtension(),
                'markdown.extensions.toc'
            ]
        )
        
        # Sanitize HTML to prevent XSS attacks
        # Convert frozenset to list, then add our additional tags
        allowed_tags = list(bleach.sanitizer.ALLOWED_TAGS)
        allowed_tags.extend([
            'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'br',
            'pre', 'code', 'blockquote', 'table', 'thead', 'tbody',
            'tr', 'th', 'td', 'ul', 'ol', 'li', 'span', 'div', 'img',
            'a', 'strong', 'em', 'del'
        ])
        
        allowed_attributes = {
            'a': ['href', 'title'],
            'img': ['src', 'alt', 'title'],
            'code': ['class'],
            'span': ['class'],
            'div': ['class'],
            '*': ['class', 'id'],
        }
        
        html_output = bleach.clean(
            html_output,
            tags=allowed_tags,
            attributes=allowed_attributes
        )
    
    return render_template('index.html', html_output=html_output, raw_markdown=raw_markdown)

if __name__ == '__main__':
    app.run(debug=True)
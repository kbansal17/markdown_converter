// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const markdownInput = document.getElementById('markdown-input');
    const clearBtn = document.getElementById('clear-btn');
    const sampleBtn = document.getElementById('sample-btn');
    const copyHtmlBtn = document.getElementById('copy-html-btn');
    const form = document.getElementById('converter-form');
    const preview = document.getElementById('preview');

    // Initialize syntax highlighting
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });

    // Clear button functionality
    clearBtn.addEventListener('click', function() {
        markdownInput.value = '';
        showToast('Input cleared!', 'success');
    });

    // Sample button functionality
    sampleBtn.addEventListener('click', function() {
        markdownInput.value = getSampleMarkdown();
        showToast('Sample markdown loaded!', 'success');
    });

    // Copy HTML button functionality
    copyHtmlBtn.addEventListener('click', function() {
        const htmlContent = preview.innerHTML;
        
        // Create a temporary textarea to copy the HTML
        const textarea = document.createElement('textarea');
        textarea.value = htmlContent;
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            showToast('HTML copied to clipboard!', 'success');
        } catch (err) {
            showToast('Failed to copy HTML', 'error');
        }
        
        document.body.removeChild(textarea);
    });

    // Show toast notification
    function showToast(message, type = 'default') {
        // Remove any existing toasts
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            document.body.removeChild(existingToast);
        }
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Sample markdown content
    function getSampleMarkdown() {
        return `# Markdown Syntax Guide

This is a sample document showing various Markdown elements.

## Headers

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

## Links

[GitHub](http://github.com)

## Images

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Blockquotes

> This is a blockquote example.
> It can span multiple lines.

## Code

Inline \`code\` has \`back-ticks around\` it.

\`\`\`javascript
// Code block
function test() {
  console.log("Hello world!");
}
\`\`\`

## Tables

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Horizontal Rule

---
`;
    }
});
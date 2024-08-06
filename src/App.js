import {useState} from "react";
import {marked} from 'marked';
import './App.css';

marked.setOptions({
  breaks: true,
});

function App() {
  const [text, setText] = useState(`# Quickie markdown previewer

## A second heading

### A third

**something bold**

[nytimes](https://nytimes.com "New York Times")

\`inline code\`

\`\`\`javascript
// a code block
console.log('Hello, world!');
\`\`\`

- List item 1
- List item 2

> Neil Gaiman sez

![image](https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png)
`);

  return (
    <div className="App">
      <textarea 
        id="editor" 
        onChange={(e) => setText(e.target.value)} 
        value={text}
      ></textarea>
      <div 
        id="preview" 
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import EditorWrapper from "./EditorWrapper";
import "./styles.css";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>

<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
`;

export default function App() {
  const [value, setValChange] = useState(content);
  return (
    <div className="App">
      <h1>Tip Tap Editor</h1>
      <br />
      <EditorWrapper value={value} setValChange={setValChange} />
    </div>
  );
}

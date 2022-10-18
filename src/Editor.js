import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { Toolbar } from "./Toolbar";
import "./Editor.scss";

const Tiptap = ({ value, setEditable, setValChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Link, Underline],
    content: value || "<p>Hello World!</p>"
    // onUpdate(props){
    //   console.log(props, props.editor.getHTML())
    // }
  });

  return (
    <>
      <div className="WhiteCard">
        <Toolbar editor={editor} />
        <EditorContent editor={editor} value={value} />
      </div>
      <div>
        <button
          onClick={() => {
            setEditable(false);
            editor.commands.setContent(value);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setEditable(false);
            setValChange(editor.getHTML());
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Tiptap;

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import TextEditorMenu from "./TextEditorMenu";
import Code from "@tiptap/extension-code";

const TextEditor = ({ handleSave }) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Code,
    ],
    content: ``
  })

  return (
    <div className="texteditor">
      <TextEditorMenu editor={editor} handleSave={handleSave} />
      <EditorContent editor={editor} className="texteditor-field" />
    </div>
  )
}

export default TextEditor
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import TextEditorMenu from "./TextEditorMenu";
import Code from "@tiptap/extension-code";
import TextEditorModal from "./TextEditorModal";
import { useState } from "react";
import Link from "@tiptap/extension-link";
import Image from '@tiptap/extension-image';

const TextEditor = ({ handleSave }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCfg, setModalCfg] = useState({});
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
      Link.configure({
        openOnClick: false,
      }),
      Image
    ],
    content: ``
  })

  const closeModal = () => {
    setModalCfg({});
    setModalOpen(false);
  }

  return (
    <div className="texteditor relative">
      <TextEditorMenu
        editor={editor}
        handleSave={handleSave}
        openModal={setModalOpen}
        setModalCfg={setModalCfg}
      />
      <EditorContent editor={editor} className="texteditor-field" />
      <TextEditorModal
        title={modalCfg.title}
        text={modalCfg.text}
        onReset={modalCfg.onReset}
        onConfirm={modalCfg.onConfirm}
        opened={modalOpen}
        onClose={closeModal}
        value={modalCfg.value}
      />
    </div>
  )
}

export default TextEditor
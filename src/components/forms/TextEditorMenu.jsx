import { IconArrowBackUp, IconArrowForwardUp, IconBold, IconCode, IconDeviceFloppy, IconH1, IconH2, IconH3, IconItalic, IconList, IconListNumbers } from "@tabler/icons-react";
import "./TextEditor.scss";

const TextEditorMenu = ({ editor, handleSave }) => {
  const iconSize = 16;
  const iconStroke = 1.5;
  const colors = [
    {
      label: "Černá",
      value: "#000000",
    },
    {
      label: "Bílá",
      value: "#ffffff",
    },
    {
      label: "Modrá",
      value: "#4C6EF5",
    },
    {
      label: "Červená",
      value: "#F03E3E",
    },
    {
      label: "Fialová",
      value: "#7048E8",
    },
    {
      label: "Zelená",
      value: "#37B24D",
    },
  ]

  if (!editor) return null;

  return (
    <div className="flex flex-row gap-2 texteditor-menu">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={"texteditor-menu__button " + (editor.isActive('bold') ? 'is-active' : '')}
      >
        <IconBold stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={"texteditor-menu__button " + (editor.isActive('italic') ? 'is-active' : '')}
      >
        <IconItalic stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={"texteditor-menu__button " + (editor.isActive('heading', { level: 1 }) ? 'is-active' : '')}
      >
        <IconH1 stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={"texteditor-menu__button " + (editor.isActive('heading', { level: 2 }) ? 'is-active' : '')}
      >
        <IconH2 stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={"texteditor-menu__button " + (editor.isActive('heading', { level: 3 }) ? 'is-active' : '')}
      >
        <IconH3 stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={"texteditor-menu__button " + (editor.isActive('bulletList') ? 'is-active' : '')}
      >
        <IconList stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={"texteditor-menu__button " + (editor.isActive('orderedList') ? 'is-active' : '')}
      >
        <IconListNumbers stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={"texteditor-menu__button " + (editor.isActive('code') ? 'is-active' : '')}
      >
        <IconCode stroke={iconStroke} size={iconSize} />
      </button>
      <select className="texteditor-menu__button" onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}>
        {colors.map(color => {
          return (
            <option value={color.value}>{color.label}</option>
          )
        })}
      </select>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className="texteditor-menu__button"
      >
        <IconArrowBackUp stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className="texteditor-menu__button"
      >
        <IconArrowForwardUp stroke={iconStroke} size={iconSize} />
      </button>
      <button onClick={handleSave} className="texteditor-menu__button">
        <IconDeviceFloppy stroke={iconStroke} size={iconSize} />
      </button>
    </div>
  )
}

export default TextEditorMenu
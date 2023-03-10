import { IconArrowBackUp, IconArrowForwardUp, IconBold, IconCode, IconDeviceFloppy, IconH1, IconH2, IconH3, IconItalic, IconLink, IconLinkOff, IconList, IconListNumbers, IconPhotoPlus } from "@tabler/icons-react";
import { useCallback } from "react";
import "./TextEditor.scss";

const TextEditorMenu = ({ editor, handleSave, openModal, setModalCfg }) => {
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

  const setLink = useCallback((url) => {
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  const openLinkModal = () => {
    setModalCfg({
      title: "Nastavit odkaz",
      text: "Nastavit následující odkaz textu",
      onConfirm: (value) => setLink(value),
      onReset: () => setLink(""),
      value: editor.getAttributes('link').href,
    });
    openModal(true);
  }

  const setImage = useCallback((url) => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const openImageModal = () => {
    setModalCfg({
      title: "Přidat obrázek",
      text: "URL na obrázek, který chce přidat",
      onConfirm: (value) => setImage(value),
    });
    openModal(true);
  }

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
        type="button"
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
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('italic') ? 'is-active' : '')}
      >
        <IconItalic stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('heading', { level: 1 }) ? 'is-active' : '')}
      >
        <IconH1 stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('heading', { level: 2 }) ? 'is-active' : '')}
      >
        <IconH2 stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('heading', { level: 3 }) ? 'is-active' : '')}
      >
        <IconH3 stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('bulletList') ? 'is-active' : '')}
      >
        <IconList stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('orderedList') ? 'is-active' : '')}
      >
        <IconListNumbers stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('code') ? 'is-active' : '')}
      >
        <IconCode stroke={iconStroke} size={iconSize} />
      </button>
      <select
        className="texteditor-menu__button"
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
      >
        {colors.map(color => {
          return (
            <option key={color.value} value={color.value}>{color.label}</option>
          )
        })}
      </select>
      <button
        onClick={openLinkModal}
        type="button"
        className={"texteditor-menu__button " + (editor.isActive('link') ? 'is-active' : '')}
      >
        <IconLink stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => setLink("")}
        className={"texteditor-menu__button " + (editor.isActive('link') ? 'is-active' : '')}
        disabled={!editor.isActive('link')}
        type="button"
      >
        <IconLinkOff stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={openImageModal}
        className={"texteditor-menu__button"}
        type="button"
      >
        <IconPhotoPlus stroke={iconStroke} size={iconSize} />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        type="button"
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
        type="button"
        className="texteditor-menu__button"
      >
        <IconArrowForwardUp stroke={iconStroke} size={iconSize} />
      </button>
      {handleSave &&
        <button onClick={handleSave} className="texteditor-menu__button">
          <IconDeviceFloppy stroke={iconStroke} size={iconSize} />
        </button>
      }
    </div>
  )
}

export default TextEditorMenu
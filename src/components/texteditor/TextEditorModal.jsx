import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import Button from "../buttons/Button";
import TextInput from "../forms/TextInput";
import "./TextEditor.scss";

const TextEditorModal = ({ opened, onClose, onConfirm, onReset, text, title, value }) => {
  const [url, setUrl] = useState(value);

  const closeModal = () => {
    setUrl("");
    onClose();
  }

  return (
    <div className={"texteditor-modal absolute w-full h-full flex items-center justify-center z-10 " + (!opened && "hidden")}>
      <div className="overlay absolute w-full h-full z-[-1]" onClick={closeModal}></div>
      <div className={"relative bg-white rounded-xl p-4 w-1/2 z-[2]"}>
        <IconX stroke={1.5} size={24} className={"absolute top-3 right-3 cursor-pointer"} onClick={onClose} />
        <h2 className="mb-2">{title}</h2>
        <p>{text}</p>
        <TextInput label={"Odkaz"} value={url} onChange={(e) => {setUrl(e.target.value)}} required mt={"2"} />
        <div className="options flex justify-between items-center mt-4">
          <Button text={"Zrušit"} onClick={closeModal} className={"secondary"} />
          <div className="flex gap-2">
            {onReset &&
              <Button text={"Resetovat"} onClick={() => {onReset(); closeModal()}} className={"secondary"} />
            }
            <Button text={"Uložit"} onClick={() => {onConfirm(url); closeModal()}} className={"primary"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextEditorModal
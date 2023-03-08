import TextEditor from "../../components/texteditor/TextEditor";
import setDocumentTitle from "../../helpers/setTitle";

const PostEditor = ({ title }) => {
  setDocumentTitle(title);

  return (
    <TextEditor />
  )
}

export default PostEditor
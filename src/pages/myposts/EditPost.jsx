import { useEffect, useState } from "react";
import Content from "../../components/Content/Content";
import TextArea from "../../components/forms/TextArea";
import TextInput from "../../components/forms/TextInput";
import setDocumentTitle from "../../helpers/setTitle";
import TextEditor from "../../components/texteditor/TextEditor";
import Button from "../../components/buttons/Button";
import { IconDeviceFloppy } from "@tabler/icons-react";
import FormError from "../../components/forms/FormError";
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, updatePost } from "../../helpers/apiFetch";
import FullPageLoader from "../../components/loaders/FullPageLoader";

const getData = async (postId, setPost) => {
  const res = await getPostById(postId);
  res.author = res.expand.author;
  return setPost(res);
}

const EditPost = ({ title }) => {
  setDocumentTitle(title);
  const { postId } = useParams();
  const [form, setForm] = useState();
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData(postId, setForm);
  }, [])

  if (!form) return (<FullPageLoader />);

  const changeValue = (type, value) => {
    let formTmp = form;
    formTmp[type] = value;
    setForm(formTmp);
    setUpdate(!update);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.text === "<p></p>") {
      return setError("Hlavní text je prázdný");
    }
    setLoading(true);
    const id = form.id;
    delete form.id;
    const res = await updatePost(id, form);
    setLoading(false);
    if (res.error) {
      return setError(res.message);
    }
    setUpdate(!update);
    return navigate("/my-posts");
  }

  return (
    <Content title={"Upravit článek"}>
      <form onSubmit={(e) => handleSubmit(e)}>
        {error &&
          <FormError error={error} closeError={() => setError(null)} />
        }
        <TextInput
          label={"Titulek"}
          required
          placeholder={"Hlavní titulek článku"}
          value={form.title}
          onChange={(e) => changeValue("title", e.target.value)}
          disabled={loading}
        />
        <TextArea
          label={"Text mezi titulkem a úvodním obrázkem"}
          minRows={3}
          required
          value={form.subtitle}
          onChange={(e) => changeValue("subtitle", e.target.value)}
          disabled={loading}
        />
        <TextInput
          label={"URL úvodního obzázku"}
          required
          value={form.img}
          onChange={(e) => changeValue("img", e.target.value)}
          disabled={loading}
        />
        <TextEditor label={"Hlavní text"} required onChange={changeValue} value={form.text} />
        <Button
          text={"Uložit změny"}
          type="submit"
          icon={<IconDeviceFloppy stroke={1.5} size={20} />}
          className="submit mt-4 w-full"
          loading={loading}
        />
      </form>
    </Content>
  )
}

export default EditPost
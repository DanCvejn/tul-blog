import { useContext, useState } from "react";
import Content from "../../components/Content/Content";
import TextArea from "../../components/forms/TextArea";
import TextInput from "../../components/forms/TextInput";
import setDocumentTitle from "../../helpers/setTitle";
import { UserContext } from "../../providers/UserProvider";
import TextEditor from "../../components/texteditor/TextEditor";
import Button from "../../components/buttons/Button";
import { IconPlus } from "@tabler/icons-react";
import FormError from "../../components/forms/FormError";
import { createNewPost } from "../../helpers/apiFetch";
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "",
  subtitle: "",
  img: "",
  text: "<p></p>",
  tags: [],
}

const CreatePost = ({ title }) => {
  setDocumentTitle(title);
  const { user } = useContext(UserContext);
  const [form, setForm] = useState(initialValues);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    let data = form;
    data.author = user.id;
    console.log(data);
    setLoading(true);
    const res = await createNewPost(data);
    setLoading(false);
    if (res.error) {
      return setError(res.message);
    }
    setForm(initialValues);
    setUpdate(!update);
    return navigate("/my-posts");
  }

  return (
    <Content title={"Vytvořit nový článek"}>
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
        <TextEditor label={"Hlavní text"} required onChange={changeValue} />
        <Button
          text={"Vytvořit nový článek"}
          type="submit"
          icon={<IconPlus stroke={1.5} size={20} />}
          className="submit mt-4 w-full"
          loading={loading}
        />
      </form>
    </Content>
  )
}

export default CreatePost
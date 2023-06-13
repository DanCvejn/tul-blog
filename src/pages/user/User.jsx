import { useContext, useEffect, useState } from 'react';
import Content from '../../components/content/Content';
import { logout, updateUser } from '../../helpers/apiFetch';
import setDocumentTitle from '../../helpers/setTitle';
import { UserContext } from '../../providers/UserProvider';
import { parseName } from "../../helpers/parsing";
import Button from '../../components/buttons/Button';
import { IconDeviceFloppy, IconDoorExit } from '@tabler/icons-react';
import FormError from '../../components/forms/FormError';
import FormSuccess from '../../components/forms/FormSuccess';
import TextInput from '../../components/forms/TextInput';
import PasswordInput from '../../components/forms/PasswordInput';

const basicFormInitial = {
  firstName: "",
  lastName: "",
}

const passwordFormInitial = {
  oldPassword: "",
  password: "",
  passwordConfirm: "",
}

const User = () => {
  const { user } = useContext(UserContext);
  const [basicForm, setBasicForm] = useState(basicFormInitial);
  const [passwordForm, setPasswordForm] = useState(passwordFormInitial);
  const [update, setUpdate] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  setDocumentTitle(parseName(user));

  const changeFormData = (value, type, form, setData) => {
    const localValues = form;
    localValues[type] = value;
    setData(localValues);
    setUpdate(!update);
  }

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    if (type === "password") {
      if (passwordForm.password !== passwordForm.passwordConfirm) return setResponse({ type: "error", text: "Hesla se neshodují", form: type });
      if (passwordForm.password.length < 8) return setResponse({ type: "error", text: "Heslo je kratší než 8 znaků", form: type });
    }
    setLoading(true);
    const values = type === "password" ? passwordForm : basicForm;
    const res = await updateUser(user.id, values);
    setLoading(false);
    if (res) {
      if (type === "password") {
        setPasswordForm(passwordFormInitial);
        setUpdate(!update);
      }
      return setResponse({ type: "success", text: "Změny byly uloženy.", form: type });
    }
    return setResponse({ type: "error", text: "Nastala chyba při ukládání nových údajů.", form: type });
  }

  const handleLogout = async () => {
    if (await logout()) {
      return window.location.href = "/";
    }
  }

  useEffect(() => {
    changeFormData(user.firstName, "firstName", basicForm, setBasicForm);
    changeFormData(user.lastName, "lastName", basicForm, setBasicForm);
  }, []);

  return (
    <Content title={parseName(user)} >
      <div className="max-w-[50%] max-md:max-w-full">
        <h2>Změna údajů</h2>
        <form onSubmit={(e) => handleSubmit(e, "basic")} className="mb-4">
          {(response && response.form === "basic") && (response.type === "error" ?
            <FormError error={response?.text} closeError={() => setResponse(null)} /> :
            <FormSuccess text={response?.text} closeSuccess={() => setResponse(null)} />
          )}
          <TextInput
            value={basicForm.firstName}
            onChange={(e) => { changeFormData(e.target.value, "firstName", basicForm, setBasicForm) }}
            label={"Jméno uživatele"}
            required
            disabled={loading}
          />
          <TextInput
            value={basicForm.lastName}
            onChange={(e) => { changeFormData(e.target.value, "lastName", basicForm, setBasicForm) }}
            label={"Příjmení uživatele"}
            required
            disabled={loading}
          />
          <Button
            text={"Uložit změny"}
            icon={<IconDeviceFloppy size={20} stroke={1.5} />}
            iconPosition="right"
            type="submit"
            className="submit w-full mt-4"
            loading={loading}
          />
        </form>
        <h2>Změna hesla</h2>
        <form onSubmit={(e) => handleSubmit(e, "password")} className="mb-8">
          {(response && response.form === "password") && (response.type === "error" ?
            <FormError error={response?.text} closeError={() => setResponse(null)} /> :
            <FormSuccess text={response?.text} closeSuccess={() => setResponse(null)} />
          )}
          <PasswordInput
            value={passwordForm.oldPassword}
            onChange={(e) => { changeFormData(e.target.value, "oldPassword", passwordForm, setPasswordForm) }}
            label={"Staré heslo"}
            required
            disabled={loading}
          />
          <PasswordInput
            value={passwordForm.password}
            onChange={(e) => { changeFormData(e.target.value, "password", passwordForm, setPasswordForm) }}
            label={"Nové heslo"}
            required
            disabled={loading}
          />
          <PasswordInput
            value={passwordForm.passwordConfirm}
            onChange={(e) => { changeFormData(e.target.value, "passwordConfirm", passwordForm, setPasswordForm) }}
            label={"Nové heslo znovu"}
            required
            disabled={loading}
          />
          <Button
            text={"Změnit heslo"}
            icon={<IconDeviceFloppy size={20} stroke={1.5} />}
            iconPosition="right"
            type="submit"
            className="submit w-full mt-4"
            loading={loading}
          />
        </form>
        <Button text={"Odhlásit"} icon={<IconDoorExit stroke={1.5} size={20} />} onClick={handleLogout} className="primary w-full" />
      </div>
    </Content>
  )
}

export default User
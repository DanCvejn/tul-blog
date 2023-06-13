import setDocumentTitle from "../helpers/setTitle";
import TextInput from "../components/forms/TextInput";
import { useState } from "react";
import PasswordInput from "../components/forms/PasswordInput";
import Button from "../components/buttons/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { login, updateUser } from "../helpers/apiFetch";
import FormError from "../components/forms/FormError";

const Login = ({ title }) => {
  setDocumentTitle(title);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    if (!res.record.emailVisibility) {
      await updateUser(res.record.id, { emailVisibility: true })
    }
    setLoading(false);
    if (res.error) {
      return setError(res.message);
    } else {
      return window.location.reload();
    }
  }

  return (
    <div className="flex flex-col items-center mt-10 w-1/3 m-auto">
      <h1 className="text-center mb-4">Přihlášení</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full">
        {error &&
          <FormError error={error} closeError={() => setError(null)} />
        }
        <TextInput
          label={"E-mail"}
          placeholder={"Přihlašovací e-mail"}
          type={"email"}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <PasswordInput
          label={"Heslo"}
          placeholder={"Super tajné heslo"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <Button
          type="submit"
          text={"Přihlásit"}
          icon={<IconArrowRight stroke={3} size={20} />}
          iconPosition="right"
          className="w-full submit mt-6"
          loading={loading}
        />
      </form>
    </div>
  )
}

export default Login
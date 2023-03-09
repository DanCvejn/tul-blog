import setDocumentTitle from "../helpers/setTitle";
import TextInput from "../components/forms/TextInput";
import { useState } from "react";
import PasswordInput from "../components/forms/PasswordInput";
import Button from "../components/buttons/Button";
import { IconArrowRight } from "@tabler/icons-react";
import { login } from "../helpers/apiFetch";

const Login = ({ title }) => {
  setDocumentTitle(title);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    console.log(res);
    if (res.error) {
      console.log(res.message);
    }
  }

  return (
    <div className="flex flex-col items-center mt-10 w-1/3 m-auto">
      <h1 className="text-center mb-4">Přihlášení</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full">
        <TextInput
          label={"E-mail"}
          placeholder={"Přihlašovací e-mail"}
          type={"email"}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <PasswordInput
          label={"Heslo"}
          placeholder={"Super tajné heslo"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          text={"Přihlásit"}
          icon={<IconArrowRight stroke={3} size={20} />}
          iconPosition="right"
          className="w-full submit mt-6"
        />
      </form>
    </div>
  )
}

export default Login
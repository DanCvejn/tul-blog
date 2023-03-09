import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import Button from "../components/buttons/Button";
import PasswordInput from "../components/forms/PasswordInput";
import TextInput from "../components/forms/TextInput";
import setDocumentTitle from "../helpers/setTitle";

const Register = ({ title }) => {
  setDocumentTitle(title);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  }

  return (
    <div className="flex flex-col items-center mt-10 w-1/3 m-auto">
      <h1 className="text-center mb-4">Registrace</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full"autoComplete="off">
        <TextInput
          label={"Vaše jméno"}
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          label={"Vaše příjmení"}
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextInput
          label={"Váš email"}
          required
          value={email}
          autoComplete={"email-register"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label={"Heslo"}
          placeholder={"Super tajné heslo"}
          required
          value={password}
          autoComplete={"new-password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          label={"Heslo znovu"}
          placeholder={"Super tajné heslo znovu"}
          required
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        <Button
          type="submit"
          text={"Registrovat"}
          icon={<IconArrowRight stroke={1.5} size={20} />}
          iconPosition="right"
          className="w-full submit mt-6"
        />
      </form>
    </div>
  )
}

export default Register
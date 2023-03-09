import { IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import Button from "../components/buttons/Button";
import FormError from "../components/forms/FormError";
import FormSuccess from "../components/forms/FormSuccess";
import PasswordInput from "../components/forms/PasswordInput";
import TextInput from "../components/forms/TextInput";
import { register } from "../helpers/apiFetch";
import setDocumentTitle from "../helpers/setTitle";

const Register = ({ title }) => {
  setDocumentTitle(title);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordAgain) return setError("Hesla se neshodují");
    setLoading(true);
    const data = {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm: passwordAgain,
    }
    const res = await register(data);
    setLoading(false);
    if (res?.error) {
      return setError(res.message);
    }
    return setSuccess("Účet byl úspěšně vytvořen, zkontroluj email pro dokončení registrace.");
  }

  return (
    <div className="flex flex-col items-center mt-10 w-1/3 m-auto">
      <h1 className="text-center mb-4">Registrace</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full"autoComplete="off">
        {error &&
          <FormError error={error} closeError={() => setError(null)} />
        }
        {success &&
          <FormSuccess text={success} closeSuccess={() => setSuccess(null)} />
        }
        <TextInput
          label={"Vaše jméno"}
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={loading}
        />
        <TextInput
          label={"Vaše příjmení"}
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={loading}
        />
        <TextInput
          label={"Váš email"}
          required
          value={email}
          autoComplete={"email-register"}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <PasswordInput
          label={"Heslo"}
          placeholder={"Super tajné heslo"}
          required
          value={password}
          autoComplete={"new-password"}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
        <PasswordInput
          label={"Heslo znovu"}
          placeholder={"Super tajné heslo znovu"}
          required
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
          disabled={loading}
        />
        <Button
          type="submit"
          text={"Registrovat"}
          icon={<IconArrowRight stroke={3} size={20} />}
          iconPosition="right"
          className="w-full submit mt-6"
          loading={loading}
        />
      </form>
    </div>
  )
}

export default Register
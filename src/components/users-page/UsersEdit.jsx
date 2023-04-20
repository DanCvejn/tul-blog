import { IconDeviceFloppy } from '@tabler/icons-react';
import Button from '../buttons/Button';
import TextInput from '../forms/TextInput';
import Switch from '../forms/Switch';
import { useState } from 'react';
import { updateUser } from '../../helpers/apiFetch';
import FormError from '../forms/FormError';
import FormSuccess from '../forms/FormSuccess';

const UsersEdit = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [canCreate, setCanCreate] = useState(user.canCreate);
  const [tagCreator, setTagCreator] = useState(user.tagCreator);
  const [admin, setAdmin] = useState(user.admin);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      firstName,
      lastName,
      canCreate,
      tagCreator,
      admin,
    }
    const res = await updateUser(user.id, values);
    if (res) {
      return setResponse({ type: "success", text: "Změny byly uloženy." });
    }
    return setResponse({ type: "Error", text: "Nastala chyba při ukládání změn" });
  }

  return (
    <>
      <form onSubmit={(e) => {handleSubmit(e)}} className="max-w-[700px] m-auto">
        {response && (response.type === "error" ?
          <FormError error={response?.text} closeError={() => setResponse(null)} /> :
          <FormSuccess text={response?.text} closeSuccess={() => setResponse(null)}  />
        )}
        <div className="flex gap-2 w-full">
          <TextInput
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
            label={"Jméno uživatele"}
            required
          />
          <TextInput
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
            label={"Příjmení uživatele"}
            required
          />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p>Práva na psaní článků:</p>
          <Switch state={canCreate} onClick={setCanCreate} />
        </div>
        <div className="flex items-center gap-4 mt-2">
          <p>Práva na tvorbu tagů:</p>
          <Switch state={tagCreator} onClick={setTagCreator} />
        </div>
        <div className="flex items-center gap-4 mt-2">
          <p>Práva admina:</p>
          <Switch state={admin} onClick={setAdmin} />
        </div>
        <Button
          text={"Uložit změny"}
          icon={<IconDeviceFloppy size={20} stroke={1.5} />}
          iconPosition="right"
          type="submit"
          className="submit w-full mt-4"
        />
      </form>
    </>
  )
}

export default UsersEdit
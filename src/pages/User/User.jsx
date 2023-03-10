import { useContext } from 'react';
import Content from '../../components/Content/Content';
import { logout } from '../../helpers/apiFetch';
import setDocumentTitle from '../../helpers/setTitle';
import { UserContext } from '../../providers/UserProvider';
import { parseName } from "../../helpers/parsing";
import Button from '../../components/buttons/Button';
import { IconDoorExit } from '@tabler/icons-react';

const User = () => {
  const { user } = useContext(UserContext);
  setDocumentTitle(parseName(user));

  const handleLogout = async () => {
    if (await logout()) {
      return window.location.href = "/";
    }
  }

  return (
    <Content title={parseName(user)} >
      <Button text={"Odhlásit"} icon={<IconDoorExit stroke={1.5} size={20} />} onClick={handleLogout} />
    </Content>
  )
}

export default User
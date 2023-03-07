import { Outlet } from "react-router-dom";
import Container from "../components/content/Container";
import Menu from '../components/menu/Menu';

const Layout = () => {
  return (
    <>
      <Menu />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
import { Link } from "react-router-dom";
import { getMenuRoutes } from "../../helpers/routes";
import Container from "../content/Container";
import "./Menu.scss";

const Menu = () => {
  const menuItems = getMenuRoutes();

  return (
    <div className="bg-indigo-800 py-4 font-unbounded">
      <Container>
        <nav className="menu flex justify-between items-center">
          <Link exact to={'/'} className="menu__link no-underline font-black text-2xl">Jak na web</Link>
          <ul className="menu__list list-none flex items-center">
            {menuItems.map(item => {
              return (
                <li>
                  <Link exact to={item.url} className="menu__link no-underline flex items-center px-2 mx-4 py-1 font-bold">
                    {item.text}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link exact to={"/register"} className="menu__link menu__special-link flex items-center no-underline font-bold">
                Přidat se
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Menu
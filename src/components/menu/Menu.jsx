import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { getMenuRoutes } from "../../helpers/routes";
import { UserContext } from "../../providers/UserProvider";
import Container from "../content/Container";
import { parseName } from "../../helpers/parsing";
import "./Menu.scss";

const Menu = () => {
  const { user } = useContext(UserContext);
  const menuItems = getMenuRoutes(user);

  return (
    <div className="bg-indigo-800 py-4 font-unbounded sticky top-0 z-10">
      <Container>
        <nav className="menu flex justify-between items-center">
          <NavLink to={'/'} className="menu__link menu__main-link no-underline font-black text-2xl">Jak na web</NavLink>
          <ul className="menu__list list-none flex items-center">
            {menuItems.map(item => {
              if (item.permission) {
                let canSee = false;
                item?.permission.forEach(perm => {
                  if (user[perm]) canSee = true;
                })
                if (canSee) {
                  return (
                    <li key={item.url}>
                      <NavLink
                        to={item.url}
                        className="menu__link no-underline flex items-center px-2 mx-4 py-1 font-bold"
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  )
                }
              } else {
                return (
                  <li key={item.url}>
                    <NavLink
                      to={item.url}
                      className="menu__link no-underline flex items-center px-2 mx-4 py-1 font-bold"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                )
              }
            })}
            {user ?
              <li>
                <NavLink to="/user" className="menu__link menu__special-link flex items-center no-underline font-bold ml-4">
                  {parseName(user)}
                </NavLink>
              </li>:
              <li>
                <NavLink to={"/register"} className="menu__link menu__special-link flex items-center no-underline font-bold ml-4">
                  Přidat se
                </NavLink>
              </li>
            }
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Menu
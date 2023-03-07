import { IconEdit, IconHome } from '@tabler/icons-react';
import TextEditor from '../components/forms/TextEditor';
import MainPage from '../pages/Homepage/MainPage';
import Layout from '../pages/Layout';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Register from '../pages/Register';

const iconSize = 25;
const iconStroke = 1.5;

const routes = [
  {
    name: 'home',
    text: 'Přehled',
    element: <Layout />,
    path: '/',
    children: [
      {
        children: [
          {
            index: true,
            element: <MainPage title={'Přehled'} />,
            icon: <IconHome size={iconSize} stroke={iconStroke} />,
            url: '/',
            text: 'Domů',
            menu: true,
          },
          {
            path: 'editor',
            element: <TextEditor title={'Editor Postů'} />,
            icon: <IconEdit stroke={iconStroke} size={iconSize} />,
            url: '/editor',
            text: 'Editor postů',
            menu: true,
          },
          {
            path: 'login',
            element: <Login title={'Přihlášení'} />,
            url: 'login',
            text: 'Přihlásit se',
            menu: true,
          },
          {
            element: <Register title={'Registrace'} />,
            path: 'register',
          },
        ]
      }
    ]
  },
  {
    name: 'not-found',
    element: <Error404 title={'Nenalezeno'} />,
    path: '*',
  }
];

export const getRoutes = () => {
  return routes;
}

export const getMenuRoutes = () => {
  return routes[0].children[0].children.filter(child => child.menu);
}
import MainPage from '../pages/Homepage/MainPage';
import Layout from '../pages/Layout';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyPosts from '../pages/myposts/MyPosts';
import CreatePost from "../pages/myposts/CreatePost";
import User from '../pages/User/User';
import PostDetail from '../components/posts/PostDetail';
import PostsPage from "../pages/posts/PostsPage";

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
            url: '/',
            text: 'Domů',
            menu: true,
            user: true,
          },
          {
            path: "/posts",
            url: "/posts",
            text: "Články",
            menu: true,
            user: true,
            children: [
              {
                path: '',
                element: <PostsPage title={"Článeky"} />,
              },
              {
                path: ':postId',
                element: <PostDetail title={"Článek"} />,
              },
            ]
          },
          {
            path: '/my-posts',
            url: '/my-posts',
            text: 'Moje posty',
            menu: true,
            needUser: true,
            children: [
              {
                index: true,
                path: '',
                element: <MyPosts title={'Moje posty'} />,
              },
              {
                path: 'create',
                element: <CreatePost title={"Nový post"} />,
              },
            ]
          },
          {
            path: 'user',
            element: <User />,
            needUser: true,
          },
          {
            path: 'login',
            element: <Login title={'Přihlášení'} />,
            url: 'login',
            text: 'Přihlásit se',
            menu: true,
            user: false,
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

export const getMenuRoutes = (user) => {
  if (user) {
    return routes[0].children[0].children.filter(child => child.menu && (child.user || child.needUser));
  }
  return routes[0].children[0].children.filter(child => child.menu && !child.needUser);
}
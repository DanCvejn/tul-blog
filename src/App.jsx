import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getRoutes } from './helpers/routes';
import UserProvider from "./providers/UserProvider";

function App() {
  const routes = createBrowserRouter(getRoutes());

  return (
    <>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </>
  )
}

export default App

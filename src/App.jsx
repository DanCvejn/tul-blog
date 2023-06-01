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
      <div className="info text-sm fixed bottom-0 left-0 w-full bg-white text-center p-2">
        Tento web vznikl jako projekt na předmět WA. Více <a href="https://github.com/DanCvejn/tul-blog" target="_blank">zde.</a>
      </div>
    </>
  )
}

export default App

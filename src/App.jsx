import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getRoutes } from './helpers/routes';

function App() {
  const routes = createBrowserRouter(getRoutes());

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App

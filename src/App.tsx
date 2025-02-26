import { RouterProvider } from "react-router-dom"
import routes from "./routes/index.route"
import './assets/scss/main.scss';
import AlertMessage from "./features/alert/AlertMessage";
import NotificationMessage from "./features/notifications/NotificationMessage";

function App() {

  return (
    <>
      <AlertMessage />
      <NotificationMessage />
      <RouterProvider router={routes}/>
    </>
  )
}

export default App

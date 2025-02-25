import { RouterProvider } from "react-router-dom"
import routes from "./routes/index.route"
import './assets/scss/main.scss';
import AlertMessage from "./features/alert/AlertMessage";

function App() {

  return (
    <>
      <AlertMessage />
      <RouterProvider router={routes}/>
    </>
  )
}

export default App

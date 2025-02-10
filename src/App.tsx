import { RouterProvider } from "react-router-dom"
import routes from "./routes/index.route"
import './assets/scss/main.scss';

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App

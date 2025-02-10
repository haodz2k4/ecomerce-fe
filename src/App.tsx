import { RouterProvider } from "react-router-dom"
import routes from "./routes/index.route"
function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App

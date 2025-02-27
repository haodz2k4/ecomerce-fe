import { RouterProvider } from "react-router-dom"
import routes from "./routes/index.route"
import './assets/scss/main.scss';
import AlertMessage from "./features/alert/AlertMessage";
import NotificationMessage from "./features/notifications/NotificationMessage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser } from "./features/users/users.thunk";
import { AppDispatch } from "./common/types/store.type";
import { resetAuthState } from "./features/auth/auth.slice";
function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrentUser()).unwrap().catch(() => {
      dispatch(resetAuthState())
    })

  },[dispatch])
  
  return (
    <>
      <AlertMessage />
      <NotificationMessage />
      <RouterProvider router={routes}/>
    </>
  )
}

export default App

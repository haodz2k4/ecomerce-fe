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
import { ConfigProvider } from "antd";
import { socket } from "./socket";
function App() {

  //Implement socket 
  socket.connect();
  socket.on('connect',() => {
    console.log('Connected to socket')
  })
  socket.on('disconnect', () => {
    console.log('Disconnected to socket')
  })

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCurrentUser()).unwrap().catch(() => {
      dispatch(resetAuthState())
    })

  },[dispatch])
  
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: '#FFE4E1'
            },
            FloatButton: {
              colorBgElevated: '#ee3880',
              colorText: 'white'
            }
          }
        }}
      >
        <AlertMessage />
        <NotificationMessage />
        <RouterProvider router={routes}/>
      </ConfigProvider>
    </>
  )
}

export default App

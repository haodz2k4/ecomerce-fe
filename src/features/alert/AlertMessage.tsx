import React, { useEffect } from "react";
import { message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { clearAlert } from "./alert.slice";
import { RootState } from "../../common/types/store.type";
import successMp3 from "../../assets/sound/success_sound.mp3"
import errorMp3 from "../../assets/sound/error_sound.mp3";
const AlertMessage: React.FC = () => {
  const dispatch = useDispatch();
  const { type, message: msg } = useSelector((state: RootState) => state.alert);
  
  const [messageApi, contextHolder] = message.useMessage()
  useEffect(() => {
    if (type && msg) {
      if(type === 'success') {
        const audio = new Audio(successMp3)
        audio.play()
      } else {
        const audio = new Audio(errorMp3);
        audio.play()
      }
      messageApi[type](msg, 3);
      dispatch(clearAlert());
    }
  }, [type, msg, dispatch, messageApi]);

  return <>{contextHolder}</>; 
};

export default AlertMessage;

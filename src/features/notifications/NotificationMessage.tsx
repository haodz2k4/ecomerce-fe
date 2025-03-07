import { useSelector } from "react-redux"
import { RootState } from "../../common/types/store.type";
import { notification } from "antd";
import { useEffect } from "react";
import successMp3 from "../../assets/sound/success_sound.mp3"
import errorMp3 from "../../assets/sound/error_sound.mp3";
const NotificationMessage = () => {

    const {type, message, description} = useSelector((state: RootState) => state.notification);
    const [api, contextHolder] = notification.useNotification();
    console.log(type, message, description)
    useEffect(() => {
        if (type && message && api[type as 'success' | 'error']) {

            if(type === 'success') {
                const audio = new Audio(successMp3)
                audio.play()
            } else {
                const audio = new Audio(errorMp3);
                audio.play()
            }
            api[type as 'success' | 'error']({
                message,
                description,
            });
        }
    }, [type, message, description, api]);
    

    return contextHolder
}

export default NotificationMessage
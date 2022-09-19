import React from 'react'
import s from './Message.module.css'

type MessagePropsType= {
        avatar: any
        name: string
        message: string | null
        time: any
}
/*function toDateTime(secs: number) {
    let t = new Date(0); // Epoch
    t.setUTCSeconds(secs);
    let hours = t.getHours();
    let minutes = t.getMinutes();
    return (
        <span>
      {hours > 9 ? hours : <>0{hours}</>}:
            {minutes > 9 ? minutes : <>0{minutes}</>}
    </span>
    );
}*/

function Message(props:MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="user avatar"/>
            </div>
                    <div className={s.bubble}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <span className={s.time}>{props.time}</span>
                </div>
        </div>
    );
}

export default Message

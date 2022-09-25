import React from 'react'
import Message from "./Message";
import s from "../../../src/p1-main/m1-ui/u1-app/App.module.css"

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'Привет, Самурай!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <span className={s.homework}>homeworks 1:</span>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    )
}

export default HW1

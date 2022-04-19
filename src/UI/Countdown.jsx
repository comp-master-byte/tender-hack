import React, { useState } from 'react'
import styles from './Countdown.module.scss'

export const Countdown = () => {

    const [day, setDay] = useState('02')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [second, setSecond] = useState('')


    const countDown = () => {
        const countDate = new Date('20 April, 2022 00:00:00').getTime()
        const now = new Date().getTime()
        const setPeriod = countDate - now

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const textDay = Math.floor(setPeriod / day)
        const textHour = Math.floor((setPeriod % day) / hour)
        const textMinute = Math.floor((setPeriod % hour) / minute)
        const textSecond = Math.floor((setPeriod % minute) / second)

        setDay(textDay)
        setHour(textHour)
        setMinute(textMinute)
        setSecond(textSecond)
    }

    setInterval(countDown, 1000)

    return (
        <div>
            <div>
                До сессии осталось:
            </div>
            <div className={styles.countdown}>
                <div>
                    <div className={styles.block}>
                        <div className={styles.day}>{day}</div>
                    </div>
                    <div>День</div>
                </div>
                <div>
                    <div className={styles.block}>
                        <div className={styles.hour}>{hour}</div>
                    </div >
                    <div>Час</div>
                </div>
                <div>
                    <div className={styles.block}>
                        <div className={styles.minute}>{minute}</div>
                    </div>
                    <div>Минуты</div>
                </div>
                <div>
                    <div className={styles.block}>
                        <div className={styles.second}>{second}</div>
                    </div>
                    <div>Секунды</div>
                </div>
            </div>
        </div>


    )
}

import { useState, useEffect } from "react"

export const TimePicker = (props) => {

    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {
        if (hour >= 24) { setHour(0) }
        if (minute >= 60) {
            setHour(hour + 1)
            setMinute(0)
        }
        if (hour >= 23 && minute >= 60) {
            setHour(0)
            setMinute(0)
        }
        if (hour < 0) { setHour(23) }
        if (minute < 0) {
            setMinute(59)
            setHour(hour - 1)
        }
    }, [hour, minute])

    const onClickHour = (value) => {
        setHour(hour + value)
    }
    const onClickMinute = (value) => {
        setMinute(minute + value)
    }


    return (
        <div className={'wrap'}>
            <div className={'clock'}>
                <div className={'hour'}>{hour < 10 ? '0' + hour : hour}</div>
                <div className={'clock-dublepoint'}>:</div>
                <div className={'minute'}>{minute < 10 ? '0' + minute : minute}</div>
                <div className={'clock-hour-button'}>
                    <button onClick={() => onClickHour(props.value)} className={'btn hour-plus'}>+</button>
                    <button onClick={() => onClickHour(-props.value)} className={'btn hour-minus'}>-</button>
                </div>
                <div className={'clock-minute-button'}>
                    <button onClick={() => onClickMinute(props.value)} className={'btn minute-plus'}>+</button>
                    <button onClick={() => onClickMinute(-props.value)} className={'btn minute-plus'}>-</button>
                </div>

            </div>
        </div>
    )
}
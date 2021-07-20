import { useState, useEffect } from "react"

export const TimePicker = (props) => {

    const [hour, setHour] = useState({decadeHour: 0, hour: 0})
    const [minute, setMinute] = useState({decadeMinute: 0, minute: 0})

    useEffect(() => {
        if (minute.minute >= 10) {setMinute({decadeMinute: minute.decadeMinute + 1, minute: 0})}
        if (minute.decadeMinute === 6 && minute.minute === 0) {
            setHour({decadeHour: hour.decadeHour, hour: hour.hour + 1})
            setMinute({decadeMinute: 0, minute: 0})
        }
        if (hour.hour >= 10) {setHour({decadeHour: hour.decadeHour + 1, hour: 0})}
        if (hour.hour < 0) {setHour({decadeHour: hour.decadeHour - 1, hour: 9})}
        if (hour.decadeHour === 2 && hour.hour > 3) {setHour({decadeHour: 0, hour: 0})}

        if (hour.decadeHour === 0 && hour.hour < 0) {setHour({decadeHour: 2, hour: 3})}
        if (minute.minute < 0) {setMinute({decadeMinute: minute.decadeMinute - 1, minute: 9})}
        if (minute.decadeMinute === 0 && minute.minute < 0) {
            setHour({decadeHour: hour.decadeHour, hour: hour.hour - 1})
            setMinute({decadeMinute: 5, minute: 9})
        }
        if (hour.decadeHour === 0 && hour.hour === 0 && minute.decadeMinute === 0 && minute.minute < 0) {
            setHour({decadeHour: 2, hour: 3})
            setMinute({decadeMinute: 5, minute: 9})
        }

    }, [hour, minute])

    const onClickHour = (value) => {
        let newHour = {}
        newHour = Object.assign(newHour, hour)
        newHour.hour = newHour.hour + value
        setHour(newHour)
    }
    const onClickMinute = (value) => {
        let newMinute = {}
        newMinute = Object.assign(newMinute, minute)
        newMinute.minute = newMinute.minute + value
        setMinute(newMinute)
    }


    return (
        <div className={'wrap'}>
            <div className={'clock'}>
                <div className={'hour'}>{hour.decadeHour}{hour.hour}</div>
                <div className={'clock-dublepoint'}>:</div>
                <div className={'minute'}>{minute.decadeMinute}{minute.minute}</div>
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
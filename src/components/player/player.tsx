import { useState } from "react"
import useSound from 'use-sound'
import sqwozbab from '../../assets/music/sqwozbab.mp3'
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
import { AiOutlinePause } from "react-icons/ai"
import { BsFillPlayFill } from 'react-icons/bs'
import { IconContext } from "react-icons"
import styles from './player.module.css'

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    // const [play, { pause, duration, sound }] = useSound(sqwozbab)
    const [play, { pause }] = useSound(sqwozbab)
    const playingButton = () => {
        if (isPlaying) {
            pause()
        } else {
            play()
        }
        setIsPlaying((prev) => !prev)
    }
    // const [durTime, setDurTime] = useState({ min: 0, sec: 0 })
    // const [curTime, setCurTime] = useState({ min: 0, sec: 0 })
    // const [sec, setSec] = useState(0)
    // useEffect(() => {
    //     const seconds = duration / 1000
    //     const min = Math.floor(seconds / 60)
    //     const secRemain = Math.floor(seconds % 60)
    //     setDurTime({
    //         min: min,
    //         sec: secRemain
    //     })
    //     // console.log(min, secRemain)
    // }, [duration])
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (sound) {
    //             setSec(sound.seek())
    //             const min = Math.floor(sound.seek() / 60)
    //             const sec = Math.floor(sound.seek() % 60)
    //             setCurTime({
    //                 min: min,
    //                 sec: sec
    //             })
    //         }
    //     }, 1000)
    //     console.log(sound)
    //     return clearInterval(interval)
    // }, [sound])
    return (
        <div className={styles.playing_card}>
            <h2>Сейчас играет:</h2>
            <img className={styles.playing_img} src='src/assets/img/sqwozbab_img.jpg' alt='sqwozbab' />
            {/* <div className="time">
                <p>{curTime.min}:{curTime.sec}</p>
                <p>{durTime.min}:{durTime.sec}</p>
            </div>
            <input type="range" min={0} max={duration / 1000} value={sec} className="time_line" onChange={e => sound.seek(e.target.value)}/> */}
            <div className={styles.playing_buttons}>
                <button className={styles.playing_button}>
                    <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
                        <BiSkipPrevious />
                    </IconContext.Provider>
                </button>
                {!isPlaying ?
                    <button className={styles.playing_button} onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
                            <BsFillPlayFill />
                        </IconContext.Provider>
                    </button> :
                    <button className={styles.playing_button} onClick={playingButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
                            <AiOutlinePause />
                        </IconContext.Provider>
                    </button>
                }
                <button className={styles.playing_button}>
                    <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
                        <BiSkipNext />
                    </IconContext.Provider>
                </button>
            </div>
            <div className="playing_desc">
                <h3>Папа забыл меня в стрипклубе</h3>
                <p>sqwozbab</p>
            </div>
        </div>
    )
}
import { useState } from "react";
import useSound from "use-sound";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import styles from "./player.module.css";
import sqwozbab from "music/sqwozbab.mp3";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [play, { pause, duration, sound }] = useSound(sqwozbab)
  const [play, { pause }] = useSound(sqwozbab);
  const playingButton = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying((prev) => !prev);
  };
  return (
    <div
      className={styles.playing_card}
      style={{
        backgroundImage: `url(/public/assets/img/albums/zapiskiOLubvi_sqwozBab.jpg)`,
      }}
    >
      <div className={styles.playing_desc}>
        <div className={styles.playing_buttons}>
          <button className={styles.playing_button}>
            <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className={styles.playing_button} onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
                <BsFillPlayFill />
              </IconContext.Provider>
            </button>
          ) : (
            <button className={styles.playing_button} onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
                <AiOutlinePause />
              </IconContext.Provider>
            </button>
          )}
          <button className={styles.playing_button}>
            <IconContext.Provider value={{ size: "3em", color: "#e7e7e7" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
        <div>
          <h3>Папа забыл меня в стрипклубе</h3>
          <p style={{ textAlign: "center" }}>sqwozbab</p>
        </div>
      </div>
    </div>
  );
}

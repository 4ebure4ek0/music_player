import { IconContext } from "react-icons";
import styles from "./item.module.css";
import { BsFillPlayFill } from "react-icons/bs";
interface IPerformer {
  id: number;
  name: string;
  link: string;
}

interface ISong extends IPerformer{
  performer?: string,
  album?: string
}


interface IProps {
  item: ISong;
  list: string;
}

const Item = (props: IProps) => {
  if (props.list == "popular_list") {
    return (
      <div className={styles.music_item}>
        <img src={"/public/assets/img/albums/"+ props.item.album +".jpg"} alt="album" style={{maxWidth: '40px', borderRadius: '7px'}} />
        <h5 style={{alignSelf: 'center', justifySelf: 'center'}}>{props.item.name}</h5>
      </div>
    );
  }
  if (props.list == "list") {
    return (
      <div className={styles.music_item}>
        <img src={"/public/assets/img/albums/"+ props.item.album +".jpg"} alt="album" style={{maxWidth: '40px', borderRadius: '7px'}} />
        <h5 style={{alignSelf: 'center', justifySelf: 'center'}}>{props.item.name}</h5>
      </div>
    );
  }
  if (props.list == "performers") {
    return (
      <div
        className={styles.performer_item}
        style={{
          backgroundImage: `url("/public/assets/img/performers/${props.item.link}.jpg")`,
        }}
      >
        <div className={styles.performer_desc}>
          <span style={{ textAlign: "center" }}>{props.item.name}</span>
        </div>
      </div>
    );
  }
  if (props.list == "albums") {
    return (
      <div
        className={styles.album_item}
        style={{
          backgroundImage: `url("/public/assets/img/albums/${props.item.link}.jpg")`,
        }}
      >
        <div className={styles.album_desc}>
          <span style={{ textAlign: "center" }}>{props.item.name}</span>
        </div>
        <div className={styles.to_play}>
          <IconContext.Provider value={{ size: "40px", color: "#e7e7e7" }}>
            <BsFillPlayFill />
          </IconContext.Provider>
        </div>
      </div>
    );
  }
};

export default Item;

import styles from "./list.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Item from "components/items/item";


interface IPerformer {
  id: number;
  name: string;
  link: string;
}

interface IProps {
  items: Array<IPerformer>;
  list: string;
}
const List = (props: IProps) => {
  if(props.list == 'list' || props.list == 'popular_list' ){
    return (
      <div style={{height: '500px'}}>
        <Swiper slidesPerView={9} direction={'vertical'} className={styles.list} >
            {props.items.map((item, n) =><SwiperSlide key={n}><Item item = {item} list={props.list}/></SwiperSlide> )}
        </Swiper>
      </div>
    );
  } else{
    return (
      <div>
        <Swiper slidesPerView={5} className={styles.list}>
            {props.items.map((item, n) =><SwiperSlide  key={n}><Item item = {item} list={props.list}/></SwiperSlide> )}
        </Swiper>
      </div>
    );
  }
};

export default List;

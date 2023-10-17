import { Link } from 'react-router-dom'
import styles from './menu.module.css'
import { AiFillHeart, AiFillHome } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { BsClockHistory } from 'react-icons/bs'

const Menu = () => {
    return(
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.menu_block}>
                <Link to='#' className={styles.menu_item}>
                    <IconContext.Provider value={{ size: "30px", color: "#f0f0f0c9" }}>
                        <AiFillHome />
                    </IconContext.Provider>
                    <h4>Home</h4>
                </Link>
                <Link to='#' className={styles.menu_item}>
                    <IconContext.Provider value={{ size: "30px", color: "#f0f0f0c9" }}>
                        <AiFillHeart />
                    </IconContext.Provider>
                    <h4>Liked songs</h4>
                </Link>
                <Link to='#' className={styles.menu_item}>
                    <IconContext.Provider value={{ size: "30px", color: "#f0f0f0c9" }}>
                        <BsClockHistory/>
                    </IconContext.Provider>
                    <h4>Recent</h4>
                </Link>
            </div>
        </div>
    )
}

export default Menu
import { Outlet } from "react-router"
import styles from "./layout.module.css"
import MusicBar from "components/musicBar/musicBar"
import Menu from "components/menu/menu"

const Layout = () => {
    return(
        <div className={styles.container}>
            <div className={styles.pages_bar}>
                <Menu />
            </div>
            <main className={styles.main}>
                <Outlet />
            </main>
            <div className={styles.music_bar}>
                <MusicBar />
            </div>
        </div>
    )
}
export default Layout
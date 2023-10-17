import List from "components/list/list"
import Player from "components/player/player"
import styles from "./musicBar.module.css"

interface IMusic{
    id: number,
    name: string,
    performer: string,
    link: string,
    album: string
}

const MusicBar = () => {
    const items:Array<IMusic> = [
        {
            id: 1,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 2,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 3,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 4,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 5,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 6,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 7,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 8,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 9,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 10,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 1,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 2,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 3,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 4,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 5,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 6,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 7,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 8,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 9,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 10,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 1,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 2,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 3,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 4,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 5,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 6,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 7,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 8,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 9,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 10,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 1,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 2,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 3,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 4,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 5,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 6,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 7,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 8,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 9,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
        {
            id: 10,
            name: 'Папа забыл меня в стрипклубе',
            performer: 'Sqwoz Bab',
            link: 'papaZabilMenyaVStripclube_sqwozBab',
            album: 'zapiskiOLubvi_sqwozBab'
        },
    ]
    return(
        <div className={styles.container}>
            <div className={styles.playlist_container}>
                <h2>Playlist</h2>
                <List items={items} list="list" />
            </div>
            <div className={styles.player_container}>
                <h3>Is playing:</h3>
                <Player />
            </div>
        </div>
    )
}

export default MusicBar
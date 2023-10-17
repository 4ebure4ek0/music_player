import List from "components/list/list";
import { FC } from "react";
import styles from './mainPage.module.css'
// import bbno from "images/performers/bbno.jpg";
// import arcticMonkeys from "images/performers/arcticMonkeys.jpg";
// import muse from "images/performers/muse.jpg";
// import sqwozBab from "images/performers/sqwozBab.jpg";
// import gspd from "images/performers/gspd.jpg";

interface IPerformer {
  id: number;
  name: string;
  link: string;
}

type albumType = 'Album' | 'Single'

interface IAlbum {
  id: number;
  name: string;
  link: string;
  performer: string;
  type: albumType
}

interface IMusic{
  id: number,
  name: string,
  performer: string,
  link: string,
  album: string
}

const MainPage: FC = () => {
  const performers: Array<IPerformer> = [
    {
      id: 1,
      name: "bbno",
      link: "bbno",
    },
    {
      id: 2,
      name: "Arctic Monkeys",
      link: "arcticMonkeys",
    },
    {
      id: 3,
      name: "Muse",
      link: "muse",
    },
    {
      id: 4,
      name: "sqwoz bab",
      link: "sqwozBab",
    },
    {
      id: 5,
      name: "GSPD",
      link: "gspd",
    },
  ];
  const albums: Array<IAlbum> = [
    {
      id: 1,
      name: "Graduation",
      link: "graduation_kaneyWest",
      performer: 'kaneyWest',
      type: 'Album'
    },
    {
      id: 2,
      name: "Ленинградский электроклуб",
      link: "LeningradskyElectroclub_gspd",
      performer: 'gspd',
      type: 'Album'
    },
    {
      id: 3,
      name: "Музло",
      link: "muzlo_gspd",
      performer: 'gspd',
      type: 'Album'
    },
    {
      id: 4,
      name: "Уроборос",
      link: "uroboros_scriptonyte",
      performer: 'scriptonyte',
      type: 'Album'
    },
    {
      id: 5,
      name: "Записки о любви",
      link: "zapiskiOLubvi_sqwozBab",
      performer: 'sqwozBab',
      type: 'Album'
    },
    {
      id: 6,
      name: "Simulation",
      link: "simulation_muse",
      performer: 'muse',
      type: 'Album'
    }
  ]
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
  return (
    <div className={styles.main_container}>
      <div className={styles.list}>
        <h3>Top performers</h3>
        <List items={performers} list="performers" />
      </div>
      <div className={styles.list}>
        <h3>Recommended playlists</h3>
        <List items={albums} list="albums" />
      </div>
      <div className={styles.list}>
        <h3>Most popular songs</h3>
        <List items={items} list="popular_list" />
      </div>
    </div>
  );
};

export default MainPage;

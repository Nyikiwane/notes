import styles from './NotesList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import notes from '../lib/notes.json';

function NotesList() {
  const [path, setPath] = useState('/');
  const pathname = useLocation()?.pathname; // to strip the /
  useEffect(() => {
    if (pathname !== '/') {
      setPath(pathname.slice(1));
    }
  }, [pathname]);

  return (
    <ul className={styles['menu-list']}>
      {Object.entries(notes).map(([slug, { title, body }]) => {
        return (
          <li
            className={`${styles['menu-note']} ${
              path === slug ? styles['menu-note__active--note'] : ''
            }`}
            key={slug}
          >
            <Link to={slug} className={styles['menu-note__note']}>
              <span>{title}</span>
              <span className={styles['menu-note__body']}>{body}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NotesList;

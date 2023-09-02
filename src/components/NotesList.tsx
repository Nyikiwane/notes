import styles from './NotesList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import notes from '../lib/notes.json';
import { makeSlugFromTitle } from '../helpers/helpers';

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
      {notes.notes.map((note) => {
        const slug = makeSlugFromTitle(note.title);
        return (
          <li
            className={`${styles['menu-note']} ${
              path === slug ? styles['menu-note__active--note'] : ''
            }`}
            key={slug}
          >
            <Link to={slug} className={styles['menu-note__note']}>
              <span>{note.title}</span>
              <span className={styles['menu-note__body']}>{note.body}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NotesList;

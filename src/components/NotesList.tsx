import styles from './NotesList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import notes from '../lib/notes.json';
import { makeSlugFromTitle } from '../helpers/helpers';

function NotesList() {
  const [path, setPath] = useState('/');
  const pathname = useLocation().pathname;
  useEffect(() => {
    if (pathname !== '/') {
      setPath(pathname.slice(1)); // to strip the '/'
    }
  }, [pathname]);

  return (
    <ul className={styles['menu-list']}>
      {notes.notes
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
        .map((note) => {
          const slug = makeSlugFromTitle(note.title);
          return (
            <li
              className={`${styles['menu-note']} ${
                path === slug ? styles['menu-note__active--note'] : ''
              }`}
              key={slug}
            >
              <Link to={slug} className={styles['menu-note__note']}>
                <span className={styles['menu-note__title']}>{note.title}</span>
                <span className={styles['menu-note__body']}>{note.body}</span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default NotesList;
